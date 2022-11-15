import Image from "next/image";

export default function Quote() {
  return (
    <div className="bg-gradient-to-b from-red-100">
      <div className="bg-footercolor text-gray-300 font-semibold h-10 flex items-center px-5 text-lg rounded-lg space-x-2">
        <Image src="/tags.svg" alt="" width={20} height={0} />
        <span>Tags</span>
      </div>
      <div className="flex justify-center items-center">
        <Image src="/tagcloud.png" alt="" width={550} height={0} />
      </div>
    </div>
  );
}
