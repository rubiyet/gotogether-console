import Image from "next/image";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex">
        <Image src="/login.png" alt="" width={500} height={400} />
        <div className="py-10">
          <div className="flex justify-center">
            <Image src="/logo.svg" alt="" width={250} height={100} />
          </div>
          <div className="flex flex-col pt-12 space-y-3">
            <div>
              <div className="text-black text-sm font-semibold">Email</div>
              <input
                className="border-0 focus:ring-0 p-2 m-2"
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <div className="text-black text-sm font-semibold">Password</div>
              <input
                className="border border-gray-300 rounded-md p-2 m-2"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="bg-blue-500 text-white rounded-md p-2 m-2">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
