import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Profile, notifications } from "../customValue/customValue";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <div className="h-44 w-full flex justify-center items-end px-10 bg-[url('/footerbg.png')]">
      <div className="grid grid-cols-4 gap-10">
        <div className="flex items-center justify-center ">
          <Link href="/home">
            <Image src="/logo.png" alt="" width={120} height={0} />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-3 ">
              <Image src="/facebook1.svg" alt="" width={20} height={0} />
              <Image src="/linkedin1.svg" alt="" width={20} height={0} />
              <Image src="/youtube1.svg" alt="" width={20} height={0} />
            </div>
            <div className="space-y-1">
              <span className="text-gray-300 text-base font-semibold italic">
                Contact Us
              </span>
              <div className="flex items-center space-x-2 italic text-sm">
                <Image src="/icon-hotline.png" alt="" width={19} height={0} />
                <span className="text-gray-300">Hotline: +8801862297140</span>
              </div>
              <div className="flex items-center space-x-2 italic text-sm">
                <Image src="/icon-mail.png" alt="" width={19} height={0} />
                <span className="text-gray-300">
                  Email: contact@gotogether.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <div className="flex items-center space-x-2 italic text-sm">
              <Image src="/design.svg" alt="" width={13} height={0} />
              <span className="text-gray-300">Design by Rubiyet Fardous</span>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-center">
          <Image src="/footerimage2.png" alt="" width={150} height={0} />
        </div>
      </div>
    </div>
  );
}
