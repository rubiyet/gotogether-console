import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-slate-100 h-16 flex justify-between items-center px-10">
      <Image src="/logo.svg" alt="" width={160} height={0} />
      <div className="relative">
      <input
        type="text"
        className="bg-slate-200 rounded-full w-96 h-9 pl-5 pr-14 focus:outline-none"
        placeholder="Search by author, title, or name"
      />
        <button
          type="submit"
          className="absolute top-0 right-0 h-6 flex items-center justify-center p-5 border-gray-300"
        >
          <Image
            src="/search.svg"
            alt="Search Icon"
            width={18}
            height={12}
          />
        </button>
      </div>
      <div className="flex space-x-6">
        <Image src="/love.svg" alt="" width={20} height={0} />
        <Image src="/notification.svg" alt="" width={20} height={0} />
        <Image src="/userPlaceHolder.svg" alt="" width={40} height={0} />
      </div>
    </div>
  );
}
