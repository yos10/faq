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
    {children}

    <footer>
      <hr />
      <div className="px-5 py-3">
        <span>
          <Link href="/">
            FAQ・トラブルシューティング - N予備校プログラミングコース
          </Link>
        </span>
      </div>
    </footer>
  </div>

)

export default Layout;
