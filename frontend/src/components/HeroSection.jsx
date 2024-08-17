import React from "react";
import heroImage from "../img/hero_banner.webp";

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
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Search Your First Job
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            nostrum esse pariatur deserunt vitae excepturi culpa perspiciatis
            voluptas placeat at!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded bg-indigo-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
