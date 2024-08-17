import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import {
  ArrowRightEndOnRectangleIcon,
  Bars3Icon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Dialog, DialogPanel } from "@headlessui/react";

const Navbar = () => {
  const user = false;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to={"/"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          <Link
            to={"#"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Jobs
          </Link>
          <Link
            to={"#"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Brows
          </Link>
        </div>

        {/* User authentication */}
        {user ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-3 lg:transition-all">
            <Popover>
              <PopoverTrigger>
                {" "}
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent>
                <div className=" flex gap-4 items-center">
                  <div>
                    <h4 className="font-medium">Dolen Deori</h4>
                    <p className="text-muted-foreground text-sm">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start my-2 space-y-2">
                  <div className="flex items-center cursor-pointer mt-2">
                    <UserIcon className="h-5 mr-2"></UserIcon>
                    <Link to={"#"}>View Profile</Link>
                  </div>
                  <div className="flex items-center cursor-pointer">
                    <ArrowRightEndOnRectangleIcon className="h-5 mr-2" />
                    <Link to={"#"}>Login</Link>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-3 lg:transition-all">
            <Link
              to={"/login"}
              className="text-sm font-semibold leading-6 text-indigo-600 py-2 px-4 rounded border-indigo-600 border hover:bg-gray-100"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              to={"/signup"}
              className="text-sm font-semibold leading-6 text-white py-2 px-4 rounded bg-indigo-600 hover:bg-indigo-500"
            >
              Signup
            </Link>
          </div>
        )}
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to={"/"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Jobs
                </Link>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Brows
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to={"/login"}
                  className="-mx-3 block rounded-lg px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to={"/signup"}
                  className="-mx-3 block rounded-lg px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default Navbar;
