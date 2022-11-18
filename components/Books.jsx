import Image from "next/image";
import { array } from "../customValue/customValue";

export default function Books() {
  return (
    <div className="bg-gradient-to-b from-gradient">
      <div className="bg-footercolor text-gray-300 font-semibold h-10 flex items-center px-5 text-lg rounded-lg space-x-2">
        <Image src="/books.svg" alt="" width={18} height={0} />
        <span>Available Books</span>
      </div>
      <div className="flex justify-center items-center">
        <div className=" grid grid-cols-9 gap-14 h-[32rem] overflow-y-auto scrollbar p-5">
          {array.map((item) => (
            <a href="#" key={item}>
              <Image src={"/books/" + item + ".jpg"} alt="" width={140} height={10}  className="w-[10rem] h-56"/>
              <span className="flex justify-center">{item}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
