import Image from "next/image";
import { array } from "../customValue/customValue";

export default function RecentlyViewed() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl">Recently Viewed</h1>
        <button className="text-sm font-semibold text-slate-500">
          See All
        </button>
      </div>
      <div className="overflow-x-auto">
        <div className="flex flex-row space-x-10 mt-3 py-1  overflow-x-auto">
          {array.map((item) => (
          <a href="#" key={item}>
            <div className="w-28 h-40 bg-[url('/books/1.jpg')] bg-no-repeat bg-top"></div>
          </a>
          ))}
        </div>
      </div>
    </div>
  );
}
