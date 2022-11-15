import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Profile, notifications, Filters } from "../customValue/customValue";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Filter() {
  return (
    <div className="bg-white flex justify-center items-center space-x-16 border-t border-gray-200 py-1">
      {Filters?.map((filter, index) => (
      <Menu key={index} as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex justify-center bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-0">
            {filter.title}
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
          <Menu.Items className="absolute right-0 z-10 mt-2 w-[18rem] origin-top-right rounded-md bg-white shadow-lg">
            <div className="h-30 overflow-y-auto ">
              {filter.lists.map((list, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-red-900" : "text-gray-700",
                        "block px-2 py-2 text-sm border-b border-gray-200"
                      )}
                    >
                      {list}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      ))}
    </div>
  );
}
