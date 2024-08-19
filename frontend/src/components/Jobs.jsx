import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";

const Jobs = () => {
  const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="">
      <Navbar />
      <div className="pt-28 pb-10 bg-gray-900 px-3">
        <div className="max-w-7xl mx-auto">
          <FilterCard />
          {jobsArray.length <= 0 ? (
            <span>No Job listing</span>
          ) : (
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5 mt-10">
              {jobsArray.map((item, index) => (
                <div>
                  <Job />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
