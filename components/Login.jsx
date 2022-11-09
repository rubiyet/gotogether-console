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
    <div className="flex justify-center items-center h-screen w-screen bg-loginModalText">
      <div className="flex h-[35rem] w-[26rem] lg:w-[52rem]">
        <div className="hidden lg:block">
        <div className="flex h-[35rem] justify-center items-center w-[26rem] rounded-l-xl bg-loginModal bg-[url('/bg6.png')] bg-top">
          <div>
            <Lottie
              animationData={loaderAnimation}
              loop={false}
              className="w-100 h-90"
            />
            <div className="flex flex-col justify-center items-center text-xs font-semibold pt-8">
              <span>
                “ The way to get started is to quit talking and begin doing.
              </span>
              <span>– Walt Disney ”</span>
            </div>
          </div>
        </div>
        </div>
        <div className="flex justify-center items-center w-[26rem] rounded-xl lg:rounded-r-xl bg-white bg-[url('/bg8.jpg')] bg-no-repeat bg-top">
          <div className="space-y-6 pt-10">
            <div className="flex justify-center">
              <Image src="/logo.svg" alt="" width={250} height={100} />
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-black text-sm font-semibold">Email</div>
                <input
                  className="focus:outline-none w-64 border-b border-violet-300 bg-violet-50 rounded-t-lg text-sm p-1.5 m-2 text-indigo-800"
                  type="text"
                  placeholder="Enter Your Email Here"
                />
              </div>
              <div>
                <div className="text-black text-sm font-semibold">Password</div>
                <input
                  className="focus:outline-none w-64 border-b border-violet-300 bg-violet-50 rounded-t-lg text-sm p-1.5 m-2 text-indigo-800"
                  type="password"
                  placeholder="Enter Your Password Here"
                />
              </div>
              <button
                onClick={HandleLogIn}
                className="text-black rounded-xl w-64 p-2 m-2 bg-gradient-to-r from-violet-500 to-violet-300 hover:from-violet-300 hover:to-violet-500"
              >
                Login
              </button>
            </div>
            <div className="flex justify-end">
              <button className="text-gray-500 hover:text-gray-600 rounded-md px-2">
                Forgot Password ?
              </button>
            </div>
            <div className="flex justify-center">
              <button className="text-violet-900 font-semibold rounded-md hover:text-violet-700">
                Don&apos;t have an account ?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
