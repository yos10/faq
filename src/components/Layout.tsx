import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'FAQ・トラブルシューティング - N予備校プログラミングコース',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header>
      <div className=" px-5 pt-5 pb-2 border-gray-100 border-b">
        <Link href="/">
          <div className="flex items-center">
            <img className="icon ml-1 mb-0.5 cursor-pointer" src="/images/nyobiko.png" />
            <h1 className="leading-4 pl-4 cursor-pointer">
              <div className="ml-1">N予備校プログラミングコース</div>
              <div className="font-bold text-xl ml-1">FAQ・トラブルシューティング</div>
            </h1>
          </div>
        </Link>

      </div>
    </header>

    { children}

    <footer>
      <hr />
      <div className="px-5 pt-3 pb-5 bg-gray-700 text-sm text-white font-bold">
        <span>
          <Link href="/">
            FAQ・トラブルシューティング - N予備校プログラミングコース
          </Link>
        </span>
      </div>
    </footer>
  </div >

)

export default Layout;
