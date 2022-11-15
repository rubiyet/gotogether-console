import Image from "next/image";
import { array } from "../customValue/customValue";

export default function Books() {
  return (
    <div className="bg-gradient-to-b from-gradient">
      <div className="bg-footercolor text-gray-300 font-semibold h-10 flex items-center px-5 text-lg rounded-lg space-x-2">
        <Image src="/books.svg" alt="" width={18} height={0} />
        <span>Books</span>
      </div>
      <div className="flex justify-center items-center">
        <div className=" grid grid-cols-6 gap-14 h-[32rem] overflow-y-auto py-5">
          {array.map((item) => (
            <a href="#" key={item}>
              <Image src="/books/1.jpg" alt="" width={156} height={10} />
              <span className="flex justify-center">{item}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
