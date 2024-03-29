import Head from "next/head";
import Filter from "../components/Filter";
import Header from "../components/Header";
import HomePageSlider from "../components/HomePageSlider";
import RecentlyViewed from "../components/RecentlyViewed";
import Footer from "../components/Footer";
import Quote from "../components/Quote";
import TagCloud from "../components/TagCloud";
import Books from "../components/Books";
import Collectedbooks from "../components/Collectedbooks";
import HomePageSlider2 from "../components/HomePageSlider2";
import BookCategory from "../components/BookCategory";

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <Head>
        <title>Go Together</title>
        <meta name="description" content="Design by Rubiyet Fardous" />
        <link rel="icon" href="/11.png" />
      </Head>
      {/* <div className="col-span-2"></div> */}
      <div className="col-span-12 space-y-3 bg-slate-100">
        <div>
          <Header />
          <Filter />
        </div>
        <div className="px-5 space-y-3">
          <HomePageSlider />
        </div>
        <div className="space-y-3">
          <BookCategory />
          <div className="grid grid-cols-4 gap-2 pr-5">
            <div className="col-span-3 space-y-3">
              <RecentlyViewed />
              <Collectedbooks />
              <Collectedbooks />
            </div>
            <HomePageSlider2 />
          </div>
          <Books />
          <TagCloud />
          <Quote />
          <Footer />
        </div>
      </div>
      {/* <div className="col-span-2"></div> */}
    </div>
  );
}
