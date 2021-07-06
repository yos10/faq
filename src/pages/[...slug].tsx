import { useRouter } from 'next/router'
import { getPostBySlug, getAllPosts } from '../lib/api'
import Head from 'next/head'
import remark from 'remark'
import remarkHtml from 'remark-html'

type Props = {
  post: {
    date: string;
    title: string;
    content: string;
  }
}

const Post = ({ post }: Props) => {
  const router = useRouter()

  return (
    <>
      {router.isFallback ? (
        <h1>ロード中...</h1>
      ) : (
        <>
          <Head>
            <title>{post.title} | FAQ</title>
          </Head>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </>
      )}
    </>
  )
}

export default Post

type Params = {
  params: {
    slug: string[]
  }
}

const markdownToHtml = async (markdown: string) => {
  const htmlResult = await remark().use(remarkHtml).process(markdown)
  return htmlResult.toString()
}

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug, [
    'date',
    'title',
    'content',
  ])
  const content = await markdownToHtml((post.content as string) || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export const getStaticPaths = async () => {
  let posts = getAllPosts()
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post
        }
      }
    }),
    fallback: false
  }
}
