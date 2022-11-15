import Image from "next/image";

export default function Quote() {
  return (
    <div className="">
      <div className="bg-footercolor h-28 text-gray-300 font-semibold flex items-center justify-center space-x-10 px-5 text-lg rounded-lg">
        <div className="rounded-full border-2 border-y-green-400 w-16 h-16 flex items-center justify-center text-xs">
          History
        </div>
        <div className="rounded-full border-2 border-y-green-400 w-16 h-16 flex items-center justify-center text-xs">
          Thrillers
        </div>
        <div className="rounded-full border-2 border-y-green-400 w-16 h-16 flex items-center justify-center text-xs">
          Mystery
        </div>
        <div className="rounded-full border-2 border-y-green-400 w-16 h-16 flex items-center justify-center text-xs">
          Poetry
        </div>
        <div className="rounded-full border-2 border-y-green-400 w-16 h-16 flex items-center justify-center text-xs">
          Fiction
        </div>
        <div className="rounded-full border-2 border-y-green-400 w-16 h-16 flex items-center justify-center text-xs">
          Sci-Fi
        </div>
      </div>
    </div>
  );
}
