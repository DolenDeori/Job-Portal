import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCard = () => {
  return (
    <div className="p-4 rounded-md shadow-lg bg-gray-800 backdrop-blur-xl bg-opacity-80 text-white border border-gray-600">
      <div>
        <h1 className="font-bold">Company Name</h1>
        <p className="text-sm">India</p>
      </div>
      <div className="mt-2">
        <h1 className="font-bold">Job Title</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur.
        </p>
      </div>
      <div className="flex gap-2 mt-4">
        <Badge variant="solid">12 Position</Badge>
        <Badge variant="solid">Part time</Badge>
        <Badge variant="solid">10 LPA</Badge>
      </div>
    </div>
  );
};

export default LatestJobCard;
