import React from "react";
import heroImage from "../img/hero_banner.webp";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  return (
    <div className="relative isolate lg:px-8 bg-gray-900 h-screen">
      <div className="absolute top-0 left-0 -z-10">
        <img
          src={heroImage}
          className=" h-screen w-screen object-cover object-top opacity-5"
          alt=""
        />
      </div>
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Find your dream job{" "}
            <span className="text-orange-500 italic">now</span>
          </h1>
          <p className="mt-3 text-gray-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            nostrum esse pariatur deserunt vitae excepturi culpa perspiciatis
            voluptas placeat at!
          </p>
          <div className="mt-10 items-center justify-center flex gap-x-2">
            <input
              type="text"
              className="py-2 px-2 max-w-96 lg:w-96 outline-none bg-white rounded"
              placeholder="Search Jobs"
            />
            <button
              type="search"
              className="rounded flex justify-center items-center gap-1 bg-gray-900 border px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-900 hover:text-white"
            >
              <MagnifyingGlassIcon className="h-5 w-5 text-white" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
