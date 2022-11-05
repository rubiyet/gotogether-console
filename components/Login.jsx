import Image from "next/image";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const HandleLogIn = () => {
    console.log("Log in");
    router.push("/home");
  };
  
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex h-[30rem]">
        <Image src="/login.png" alt="" width={500} height={400} />
        <div className="grid grid-cols-1 content-center space-y-12">
          <div className="flex justify-center">
            <Image src="/logo.svg" alt="" width={250} height={100} />
          </div>
          <div className="flex flex-col space-y-3">
            <div>
              <div className="text-black text-sm font-semibold">Email</div>
              <input
                className="focus:outline-none border-b rounded-md p-1.5 m-2 text-indigo-800"
                type="text"
                // placeholder="Enter Your Email Here"
              />
            </div>
            <div>
              <div className="text-black text-sm font-semibold">Password</div>
              <input
                className="focus:outline-none border-b rounded-md p-1.5 m-2 text-indigo-800"
                type="password"
                // placeholder="Enter Your Password Here"
              />
            </div>
            <button onClick={HandleLogIn} className="text-black rounded-xl p-2 m-2 bg-gradient-to-r from-pink-500 to-pink-300">
              Login
            </button>
            <button className="flex justify-end text-gray-500 rounded-md px-2">
              Forgot Password ?
            </button>
          </div>
          <div className="flex justify-center">
            <button className="flex justify-center text-purple-900 font-semibold rounded-md px-2">
              Don&apos;t have an account ?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}