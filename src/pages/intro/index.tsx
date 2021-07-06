import Layout from '../../components/Layout';
import Card from '../../components/Card';
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
            プログラミング入門 Web アプリコース
          </div>
          <div className="mt-6">
            <h1 className="font-bold text-xl pb-1 border-b-2">
              プログラミング入門 Web アプリコース
            </h1>
          </div>

          <div className="mt-5 mb-2">
            <Card href="intro/chapter1" hover={true} flex={false} >
              <div className="p-4">
                第 1 章のトラブル →
              </div>
            </Card>
          </div>

          <div className="mb-2">
            <Card href="intro/chapter2" hover={true} flex={false} >
              <div className="p-4">
                第 2 章のトラブル →
              </div>
            </Card>
          </div>

          <div className="mb-2">
            <Card href="intro/chapter3" hover={true} flex={false} >
              <div className="p-4">
                第 3 章のトラブル →
              </div>
            </Card>
          </div>

          <div className="mb-2">
            <Card href="intro/chapter4" hover={true} flex={false} >
              <div className="p-4">
                第 4 章のトラブル →
              </div>
            </Card>
          </div>

          <div className="mb-10">
            <Card href="intro/others" hover={true} flex={false} >
              <div className="p-4">
                その他のトラブル →
              </div>
            </Card>
          </div>

        </div>
      </main>
    </Layout>
  </>);
};

export default IndexPage;
