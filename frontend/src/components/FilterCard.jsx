import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { data } from "autoprefixer";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Banglore", "Pune", "Mumbai", "Remote"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Fullstack Developer",
      "System Administrator",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-4 LPA", "42 - 50 LPA", "50+ LPA"],
  },
];
const FilterCard = () => {
  return (
    <Sheet className="fixed">
      <SheetTrigger
        type="Button"
        className="bg-white px-5 py-2 rounded-full hover:bg-gray-100 flex justify-center items-center gap-2"
      >
        Filter Result <AdjustmentsHorizontalIcon className="h-4 w-4" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-gray-900 text-white">
        <SheetHeader>Filter Results</SheetHeader>
        <div className="mt-5">
          <RadioGroup>
            {filterData.map((data, index) => (
              <div key={index}>
                <h1 className="font-bold text-lg">{data.filterType}</h1>
                {data.array.map((item, index) => {
                  return (
                    <div
                      className="flex items-center space-x-2 my-2"
                      key={index}
                    >
                      <RadioGroupItem
                        value={item}
                        className="text-gray-900 bg-white"
                      />
                      <Label>{item}</Label>
                    </div>
                  );
                })}
              </div>
            ))}
          </RadioGroup>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterCard;
