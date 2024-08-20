import React from "react";
import { Button } from "./ui/button";
import { BookmarkIcon, ShareIcon } from "@heroicons/react/24/outline";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { ArrowUpRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "323";
  return (
    <div className="bg-gray-800 shadow-xl rounded-md p-3 text-white border border-gray-700">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">
          Software Engineer, Kernel and Firmware, Silicon
        </h1>
        <div className="flex gap-2">
          <span
            variant="outline"
            className="rounded-full cursor-pointer p-2 hover:bg-gray-700"
            size="icon"
          >
            <ShareIcon className="w-4 h-4" />
          </span>
          <span
            variant="outline"
            className="rounded-full cursor-pointer p-2 hover:bg-gray-700"
            size="icon"
          >
            <BookmarkIcon className="w-4 h-4" />
          </span>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <span size="icon" className="p-1 bg-gray-200 rounded-md">
          <Avatar>
            <AvatarImage src="https://blog.logomyway.com/wp-content/uploads/2021/01/google-symbol.jpg" />
          </Avatar>
        </span>
        <div>
          {" "}
          <h1 className="font-bold text-md">Google</h1>
          <p className="text-sm">India, Kolkata</p>
        </div>
      </div>

      <div className="job-description mt-5 border-t pt-2">
        <h1 className="font-bold">Job Requirements</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          maxime quae iusto aliquid, praesentium illum, nostrum vero laboriosam
          tempore, doloremque magnam aut corrupti ullam dicta commodi suscipit
          soluta quasi debitis!
        </p>
      </div>

      <div className="info-badges flex gap-2 mt-3">
        <Badge className="text-xsm">12 Opening</Badge>
        <Badge className="text-xsm">Full Time</Badge>
        <Badge className="text-xsm">7 LPA</Badge>
      </div>

      <div className="button-group mt-5">
        <Button
          className="flex items-center justify-center gap-1"
          onClick={() => navigate(`/description/${jobId}`)}
        >
          Learn More <ArrowUpRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Job;
