import React from "react";
import Navbar from "./shared/Navbar";
import { MapPinIcon, PaperClipIcon } from "@heroicons/react/20/solid";
import { Button } from "./ui/button";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { Badge } from "./ui/badge";

const JobDescription = () => {
  const isApplied = false;
  return (
    <div>
      <Navbar />
      <div className="pt-24 bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto md:px-4">
          <div className="px-4 sm:px-0">
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-300">
              Job Information
            </p>
            <div className="lg:flex justify-between">
              <div>
                <h3 className="text-2xl font-semibold leading-7 text-gray-200 mb-2">
                  Software Engineer, Kernel and Firmware, Silicon
                </h3>
                <div className="flex items-center gap-4 mb-3">
                  <p className="text-gray-400 flex items-center gap-1">
                    <BuildingOffice2Icon className="h-4 w-4" /> Google India
                  </p>
                  <p className="text-gray-400 flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4" /> Banglre, India
                  </p>
                </div>
              </div>
              <Button
                disabled={isApplied}
                className={`${
                  isApplied
                    ? "bg-gray-500 hover:bg-gray-500 pointer-events-none cursor-not-allowed"
                    : "bg-indigo-700 hover:bg-indigo-600"
                }`}
              >
                {isApplied ? "Already Applied" : "Apply Now"}
              </Button>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <Badge variant="outline" className="text-white bg-green-900">
              12 Openings
            </Badge>
            <Badge variant="outline" className="text-white">
              7 Applicants
            </Badge>
          </div>
          <div className="mt-6 border-t border-gray-800">
            <dl className="divide-y divide-gray-800">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-200">
                  Role
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
                  Backend Developer
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-200">
                  Experience
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
                  2 Years
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-200">
                  Salary expectation
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
                  ₹120,000
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-200">
                  Job Description
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                  saepe officiis unde, eum tempora architecto error rerum esse
                  odio. Labore quia quisquam laudantium amet nemo magnam ut
                  corporis perspiciatis. Saepe iste delectus, maiores aperiam
                  culpa, mollitia autem commodi amet eum aliquid repellat
                  perspiciatis. Architecto vero nam molestiae! Nemo, enim
                  necessitatibus. Illum, enim? Commodi, vitae dignissimos
                  tempore amet sint veritatis vero ea. Explicabo ipsum quibusdam
                  dolorum provident nisi, ipsam vel magni facere voluptatem
                  adipisci cum aut deserunt dignissimos officiis quidem nostrum.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
