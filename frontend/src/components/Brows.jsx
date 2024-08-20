import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";

const randomJobs = [1, 2, 3, 4, 5, 6, 7];

const Brows = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-10 bg-gray-900 px-4 sm:px-2">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-xl font-bold">
            Search Results ({randomJobs.length})
          </h1>
          {randomJobs.length <= 0 ? (
            <span>No Job listing</span>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
              {randomJobs.map((item, index) => (
                <div key={index}>
                  <Job />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Brows;
