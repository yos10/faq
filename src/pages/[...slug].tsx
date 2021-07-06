import { useRouter } from 'next/router'
import { getPostBySlug, getAllPosts } from '../lib/api'
import Head from 'next/head'
import remark from 'remark'
import html from 'remark-html'

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
        <h1>Loading…</h1>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title} | Next.js Blog Example with</title>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
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
  const result = await remark().use(html).process(markdown)
  return result.toString()
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
