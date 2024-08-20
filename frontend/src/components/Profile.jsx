import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  EnvelopeIcon,
  PencilSquareIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Badge } from "./ui/badge";
import AppliedJobTable from "./AppliedJobTable";
import { Button } from "./ui/button";
import UpdateProfileDialog from "./UpdateProfileDialog";

const skillsList = ["HTML", "CSS", "JS"];
const Profile = () => {
  const [open, setOpen] = useState(false);
  const isResume = true;
  return (
    <div className="bg-gray-900 min-h-[100vh]">
      <Navbar />
      <div className="pt-24 bg-dark-900 max-w-7xl mx-auto px-2 pb-10 lg:flex items-start gap-2">
        <div className="lg:w-[30%] flex flex-col gap-2">
          <div className="border p-5 rounded-md relative bg-gray-800 border-gray-600 shadow-lg">
            <div className="flex items-center gap-4">
              <Avatar className="lg:h-24 lg:w-24">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <div>
                <h1 className="text-white font-bold text-xl">Dolen Deori</h1>
                <p className="text-sm text-gray-400">
                  North Lakhimpur, Assam, India
                </p>
              </div>
            </div>
            <div className="bio mt-5 text-white">
              <p className="text-md font-bold">Bio</p>
              <p className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                reprehenderit similique quia iusto nemo natus nobis repellendus
                quae numquam ad illo molestias saepe officiis libero architecto,
                quibusdam vitae eveniet atque.
              </p>
            </div>
            <div className="contact-info space-y-2 mt-4 text-gray-200">
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-4 w-4" />
                <p>dolendeori@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-4 w-4" />
                <p>+91 9878654561</p>
              </div>
            </div>
          </div>
          <div className="border p-5 rounded-md bg-gray-800 border-gray-600 shadow-lg">
            <div>
              <h1 className="text-white font-bold text-md">Skills</h1>
              <div className="flex gap-1 mt-2">
                {skillsList.map((items, index) => (
                  <Badge className="p-2 px-5" key={index}>
                    {" "}
                    {items}{" "}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="text-white">
              <h1 className="mt-4 text-white font-bold text-md mb-4">Resume</h1>
              {isResume ? (
                <a
                  target="__blank"
                  href="https://www.google.com"
                  className="p-2 bg-gray-700 hover:underline rounded-md px-5"
                >
                  dolendeoriResuem.pdf
                </a>
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>
          <Button
            onClick={() => {
              setOpen(true);
            }}
            className="border p-5 rounded-md bg-gray-800 border-gray-600 shadow-lg flex gap-2 mb-2"
          >
            <PencilSquareIcon className="h-5 w-5 text-white cursor-pointer" />{" "}
            Edit My Profile
          </Button>
        </div>
        <div className="border p-5 rounded-md bg-gray-800 border-gray-600 shadow-lg flex-1">
          <AppliedJobTable />
        </div>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
