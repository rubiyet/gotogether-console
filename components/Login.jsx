import Image from "next/image";
import { useRouter } from "next/router";
import Lottie from "lottie-react";
import loaderAnimation from "../public/LogInAnimation.json";

export default function Login() {
  const router = useRouter();

  const HandleLogIn = () => {
    console.log("Log in");
    router.push("/home");
  };

  return (
    <div className="grid grid-cols-2 h-screen w-screen bg-[url('/bg2.png')] bg-center">
      <div className="col-span-1 flex h-screen justify-center items-center">
        <div className="grid grid-cols-1 space-y-5">
          <div className="flex justify-start">
            <Image src="/logo.svg" alt="" width={180} height={100} />
          </div>
          <div className="w-68">
          <Lottie
            animationData={loaderAnimation}
            loop={false}
          />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex h-screen justify-center items-center space-x-20 ">
        <div className="flex bg-opacity-80 rounded-xl bg-loginModal opacity-80 space-x-5">
        <div className="flex space-x-5 py-10 pl-10">
          <div className="grid grid-cols-1 content-center space-y-12 ">
            <div className="flex flex-col space-y-3">
              <div>
                <div className="text-black text-sm font-semibold">Email</div>
                <input
                  className="focus:outline-none w-64 border-b border-violet-300 bg-violet-50 rounded-t-lg text-sm p-1.5 m-2 text-indigo-800"
                  type="text"
                  placeholder="Enter Your Email Here"
                />
              </div>
              <div>
                <div className="text-black text-sm font-semibold">
                  Password
                </div>
                <input
                  className="focus:outline-none w-64 border-b border-violet-300 bg-violet-50 rounded-t-lg text-sm p-1.5 m-2 text-indigo-800"
                  type="password"
                  placeholder="Enter Your Password Here"
                />
              </div>
              <button
                onClick={HandleLogIn}
                className="text-black rounded-xl w-64 p-2 m-2 bg-gradient-to-r from-pink-500 to-pink-300"
              >
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
        <div className="">
            <span className="text-bold text-3xl">New Here</span>
          </div>
        </div>
      </div>
    </div>
  );
}
