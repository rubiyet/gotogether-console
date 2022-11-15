import Image from "next/image";
import { array } from "../customValue/customValue";
import Link from "next/link";

export default function Collectedbooks() {
  return (
    <div className="">
      <div className="flex flex-row justify-between items-center bg-footercolor text-gray-300 font-semibold h-10 px-5 text-lg rounded-lg">
        <div className="flex items-center space-x-2">
          <Image src="/collected.svg" alt="" width={15} height={10} />
          <span>Collected books</span>
        </div>
        <button className="text-sm">See All</button>
      </div>
      <div className="h-44 overflow-y-auto p-5">
        <div className="grid grid-cols-7 gap-5">
          {array.map((item) => {
            return (
              <Link href="/" key={item}>
                <Image src="/books/2.jpg" alt="" width={100} height={0} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
