import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { FilterIcon } from "lucide-react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const FilterCard = () => {
  return (
    <Sheet className="fixed">
      <SheetTrigger
        type="Button"
        className="bg-white px-5 py-2 rounded-full hover:bg-gray-100 flex justify-center items-center gap-2"
      >
        Filter Result <AdjustmentsHorizontalIcon className="h-4 w-4" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>Filter Results</SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default FilterCard;
