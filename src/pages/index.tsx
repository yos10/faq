import Layout from '../components/Layout';
import Link from 'next/link';
import Card from '../components/Card';

const IndexPage = () => {
  return (
    <Layout>
      <header>
        <div className="flex items-center px-5 pt-5 pb-2 border-gray-100 border-b">
          <img className="icon ml-1 mb-0.5" src="/images/nyobiko.png" />
          <h1 className="leading-4 ml-4">
            <div className="ml-1">N予備校プログラミングコース</div>
            <div className="font-bold text-xl ml-1">FAQ・トラブルシューティング</div>
          </h1>
        </div>
      </header>
      <main className="px-5 bg-blue-50 pt-5 pb-20">
        <div>
          <p>
            こちらは、<strong className="text-blue-600 hover:text-blue-400 trainsition duration-300">
              <Link href="https://www.nnn.ed.nico/pages/programming/">N予備校プログラミングコース</Link></strong>
          を受講中のみなさんに向けた FAQ（よくある質問）ページです。
        </p>
        </div>
        <div className="mt-4 flex flex-wrap">
          <div className="mb-2.5 mr-3">
            <Card hover={true} flex={true} href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja">
              <div className="p-4 flex items-center px-2">
                <div>
                  <img src="/images/cc.png" />
                </div>
                <div className="ml-3 w-72 leading-5 ">
                  このサイトは、
                  <span className="text-blue-600 hover:text-blue-400 transition duration-300">クリエイティブ・コモンズ 表示 - 継承 4.0 国際 ライセンス</span>
                  の下、提供されています。
                </div>
              </div>
            </Card>
          </div>
          <div className="mb-3">
            <Card hover={true} flex={true} href="https://github.com/nnn-training/faq">
              <div className="p-4 flex items-center px-2">
                <div>
                  <img src="/images/github.png" />
                </div>
                <div className="ml-3 w-96 leading-5 ">
                  このサイトは、どなたでも記述の追加・変更提案が可能です。
                  練習問題の提出と同様に
                  <span className="text-blue-600 hover:text-blue-400 transition duration-300"> GitHub リポジトリ</span>
                  をフォークし、プルリクエストを送ってください。
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-xl font-bold mt-8 py-2 px-3 bg-yellow-600 text-white">コース別トラブルシューティング</h1>
          <div className="mt-5">
            <Card hover="true" href="" flex={false}>
              <div className="">
                <h2 className="px-4 pt-3 pb-2 text-xl hover:text-gray-500 transition duration-300 pb-1 border-b">プログラミング入門コース</h2>
                <p className="px-4 pb-4 pt-3 font-bold text-gray-500">コンソールや Docker Desktop の環境構築、Heroku へのデプロイなど、入門コースに関連するトラブルはこちらです。</p>
              </div>
            </Card>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold mt-5 py-2 px-3 bg-yellow-600 text-white">質問したいときは ...</h1>
        </div>
      </main>
    </Layout >
  )
}

export default IndexPage;
