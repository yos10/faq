import Layout from '../../components/Layout';
import Link from 'next/link';

const IndexPage = () => {
  return (<>
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
          その他
        </div>
          <div className="mt-6">
            <h1 className="font-bold text-xl pb-1 border-b-2">
              その他
            </h1>
          </div>
        </div>
      </main>
    </Layout>
  </>);
};

export default IndexPage;
