import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '../../lib/api';

type Props = {
  posts: PostData[]
}

const IntroPage = ({ posts }: Props) => {
  return <>
    <Layout>
      <main className="p-5 bg-blue-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-1">
          <div>
            <Link href="/">
              <span className="cursor-pointer text-blue-600 hover:text-blue-400 transition duration-300">
                FAQ・トラブルシューティング
              </span>
            </Link>
            &nbsp;/
            プログラミング入門 Web アプリコース
          </div>
          <div className="mt-6">
            <h1 className="font-bold text-xl pb-1 border-b-2">
              プログラミング入門 Web アプリコース
            </h1>
          </div>

          <div className="mt-5">
            {posts.map(post => (
              <div className="mb-2">
                <Card href={post.path} hover={true} flex={false} >
                  <div className="p-4">
                    {post.title} →
                  </div>
                </Card>
              </div>
            ))}
          </div>

        </div>
      </main>
    </Layout>
  </>
};

export default IntroPage;

type PostData = {
  date: string;
  title: string;
  path: string;
}

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  const posts = allPosts
    .filter(post => post[0] === 'intro')
    .map(post => {
      const postData = getPostBySlug(post, [
        'date',
        'title',
      ]);
      if (!postData.title) {
        postData.title = `${post[1]} のトラブル`;
      }
      return {
        ...postData,
        path: `/${post[0]}/${post[1]}`
      }
    })
    .map(postData => postData);
  return {
    props: {
      posts
    }
  }
}
