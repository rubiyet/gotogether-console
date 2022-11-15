import Image from "next/image";
import Link from "next/link";
import { array } from "../customValue/customValue";

export default function RecentlyViewed() {
  return (
    <div className="">
      <div className="flex items-center bg-footercolor text-gray-300 font-semibold h-10 px-5 text-lg rounded-lg space-x-2">
        <Image src="/viewed.svg" alt="" width={15} height={10} />
        <span>Recently Viewed</span>
      </div>
      <div className="h-44 overflow-y-auto p-5">
        <div className="grid grid-cols-7 gap-5">
          {array.map((item) => {
            return (
              <Link href="/" key={item}>
                <Image src="/books/3.jpg" alt="" width={100} height={0} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
