import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Link from 'next/link';

const Chapter1Page = () => {
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

          <div className="mt-5 mb-2">
            <Card href="/intro/vscode" hover={true} flex={false} >
              <div className="p-4">
                VS Code のトラブル →
              </div>
            </Card>
          </div>

          <div className="mb-2">
            <Card href="/intro/docker" hover={true} flex={false} >
              <div className="p-4">
                Docker 関連のトラブル →
              </div>
            </Card>
          </div>

        </div>
      </main>
    </Layout>
  </>
};

export default Chapter1Page;
