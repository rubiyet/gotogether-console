import Image from "next/image";

export default function Quote() {
  return (
    <div className="flex items-center justify-center space-x-8">
      <Image
        src="/writer/1.png"
        alt=""
        width={60}
        height={0}
        className="rounded-full  w-[4rem] h-[5rem]"
      />
      <div className="w-[28rem] italic">
      <div>“Maybe this is why we read, and why in moments of darkness we return to books: to find words for what we already know.”</div>
      <div className="text-gray-500 font-semibold">― Alberto Manguel</div>
      </div>
      <Image src="/quote.png" alt="" width={100} height={0} />
    </div>
  );
}
