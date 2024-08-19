import React from "react";
import LatestJobCard from "./LatestJobCard";
import { Link } from "react-router-dom";

const LatestJobs = () => {
  const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className="bg-gray-900 relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
      <div className="max-w-7xl m-auto py-10 mb-10">
        <h1 className="text-4xl font-bold text-white">Latest Job Posting</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-10">
          {randomJobs.slice(0, 6).map((item, index) => (
            <LatestJobCard key={index} />
          ))}
        </div>
        <Link
          to={"./jobs"}
          className="px-5 py-2.5 bg-indigo-800 rounded-md text-white hover:bg-indigo-700 transition ease-in-out duration-200"
        >
          View All the Jobs
        </Link>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#809eff] to-[#89fcf2] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </section>
  );
};

export default LatestJobs;
