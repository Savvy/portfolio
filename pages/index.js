import Head from 'next/head'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className='app dark-theme'>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#14141C" />
        <meta name="description" content="Design & Development" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whosavvyfn" />
        <meta name="twitter:creator" content="@whosavvyfn" />
        <meta property="og:title" content="Malcom Green" />
        <meta property="og:description" content="Design & Development" />
        <meta property="og:url" content="https://malcom.sh" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/banner.png" />
        <meta property="og:image:alt" content="Malcom Green" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Malcom Green" />
        <link rel="icon" href="/logo.png" />
        <title>Malcom Green</title>
      </Head>
      <div className="top-border"></div>
      <Navbar />
      <Header />

      <div className={'content'}>
        <Main />
      </div>

      <Footer />
    </div>
  )
}
