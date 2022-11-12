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
    <div className=" bg-white h-20 flex justify-center px-10 border border-fuchsia-600">
      <div className="grid grid-cols-3 gap-10">
        <div className="flex items-center justify-center ">
          <Link href="/home">
            <Image src="/logo.svg" alt="" width={260} height={0} />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2 italic text-sm">
              <Image src="/icon-hotline.png" alt="" width={19} height={0} />
              <span className="text-gray-400">Hotline:</span>
              <span>+8801862297140</span>
            </div>
            <div className="flex items-center space-x-2 italic text-sm">
              <Image src="/icon-mail.png" alt="" width={19} height={0} />
              <span className="text-gray-400">Email:</span>
              <span>contact@gotogether.com</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <div className="flex items-center space-x-2 italic text-sm">
              <Image src="/design.svg" alt="" width={13} height={0} />
              <span>Design by Rubiyet Fardous</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
