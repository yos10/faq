import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'FAQ - N予備校プログラミングコース・トラブルシューティング',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <h1>FAQ - N予備校プログラミングコース・トラブルシューティング</h1>
    </header>
    {children}
    <footer>
      <hr />
      <span>FAQ - N予備校プログラミングコース・トラブルシューティング</span>
    </footer>
  </div>
)

export default Layout;
