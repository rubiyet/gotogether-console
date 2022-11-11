import Image from "next/image";
import { people, Profile } from "../customValue/customValue";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ShareBook() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex h-[35rem] w-[26rem] lg:w-[52rem]">
        <div className="hidden lg:block">
          <div className="flex h-[35rem] justify-center items-center w-[26rem] rounded-l-xl bg-loginModal bg-[url('/bg10.png')] bg-no-repeat bg-left">
            <div className="space-y-5">
              <div className="flex justify-end">
                <div className="w-52 font-semibold text-lg space-y-5 italic">
                  <div>A book lying idle on a shelf is wasted ammunition</div>
                  <div>- Henry Miller</div>
                </div>
              </div>
              <Image src="/book2.png" alt="" width={420} height={0} />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[26rem] rounded-xl lg:rounded-r-xl bg-white bg-[url('/bg8.jpg')] bg-no-repeat bg-top">
          <div className="grid grid-cols-1 pt-[6rem]">
            {/* <span className="font-semibold text-xl text-amber-900">
              Share My Book
            </span> */}
            <input
              type="text"
              className="focus:outline-none w-64 border-b border-violet-300 bg-violet-50 rounded-t-lg text-sm p-1.5 m-2 text-indigo-800"
              placeholder="Book Title"
            />
            <input
              type="text"
              className="focus:outline-none w-64 border-b border-violet-300 bg-violet-50 rounded-t-lg text-sm p-1.5 m-2 text-indigo-800"
              placeholder="Author"
            />
            <input
              type="text"
              className="focus:outline-none w-64 border-b border-violet-300 bg-violet-50 rounded-t-lg text-sm p-1.5 m-2 text-indigo-800"
              placeholder="Subject"
            />
            <input
              type="text"
              className="focus:outline-none w-64 border-b border-violet-300 bg-violet-50 rounded-t-lg text-sm p-1.5 m-2 text-indigo-800"
              placeholder="Publisher"
            />
            <input
              type="text"
              className="focus:outline-none w-64 border-b border-violet-300 bg-violet-50 rounded-t-lg text-sm p-1.5 m-2 text-indigo-800"
              placeholder="Category"
            />
            <input
              type="file"
              className="focus:outline-none w-64 border-b border-violet-300 bg-violet-50 rounded-t-lg text-sm p-1.5 m-2 text-indigo-800"
              placeholder="Location"
            />
            <div className="flex justify-center items-center mt-5">
              <div className="flex justify-center items-center w-20 h-10 rounded-xl bg-amber-900">
                <span className="font-semibold text-white">Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
