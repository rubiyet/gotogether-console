import ShareBook from "../components/ShareBook";
import Head from 'next/head'
import Header from '../components/Header'

export default function ShareBookPage() {
  return (
    <div className="grid grid-cols-12">
      <Head>
        <title>Go Together</title>
        <meta name="description" content="Generated by Go Together" />
        <link rel="icon" href="/11.png" />
      </Head>
      <div className="col-span-2"></div>
      <div className="col-span-8">
        <Header />
        <ShareBook />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
}