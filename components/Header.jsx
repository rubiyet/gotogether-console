import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Profile, notifications } from "../customValue/customValue";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <div className="bg-white h-16 flex justify-between items-center px-10">
      <Link href="/home">
        <Image src="/logo.svg" alt="" width={260} height={0} />
      </Link>
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
          <Image src="/search.svg" alt="Search Icon" width={18} height={12} />
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/sharebook">
          <button className="text-white hover:text-slate-100 rounded-md px-3 h-8 bg-zinc-500">
            Share Book
          </button>
        </Link>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex justify-center  border-gray-300 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-0">
              <Image src="/notification.svg" alt="" width={20} height={0} />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-5 w-[18rem] origin-top-right rounded-md bg-white shadow-lg">
              <div className="">
                <div className="bg-notification text-white font-semibold text-sm p-0.5">
                  Notifications
                </div>
                {notifications?.map((notification, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100 text-red-900" : "text-gray-700",
                          "block px-2 py-2 text-sm border-b border-gray-200"
                        )}
                      >
                        <div className="flex items-center space-x-2">
                          <div>
                            <Image
                              className="h-10 w-10 rounded-full"
                              width={20}
                              height={20}
                              src={notification.image}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-sm">
                              {notification.title}
                            </div>
                            <div className="w-56 truncate">
                              {notification.description}
                            </div>
                          </div>
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-full border border-gray-300 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-0">
              <Image src="/userPlaceHolder.svg" alt="" width={40} height={0} />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="">
                {Profile?.map((profile, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm border-b border-gray-200"
                        )}
                      >
                        {profile}
                      </a>
                    )}
                  </Menu.Item>
                ))}
                <form method="POST" action="/">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-sm"
                        )}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
