import ShareBook from "../components/ShareBook";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ShareBookPage() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen bg-slate-50">
      <Head>
        <title>Go Together</title>
        <meta name="description" content="Design by Rubiyet Fardous" />
        <link rel="icon" href="/11.png" />
      </Head>
      {/* <div className="col-span-1"></div> */}
      <div className="col-span-12 h-screen content-between bg-slate-100 grid grid-cols-1">
        <Header />
        <ShareBook />
        <Footer />
      </div>
      {/* <div className="col-span-1"></div> */}
    </div>
  );
}
