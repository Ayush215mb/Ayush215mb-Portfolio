import React from "react";
import BgCard from "./bg-Card";
import { TechName } from "./languages";

const TechBox = ({
  heading,
  Techs,
}: {
  heading: string;
  Techs: TechName[];
}) => {
  return (
    <div className="">
      <BgCard className="w-70 h-70 p-4">
        <p className="text-gray-200 text-sm">{heading}</p>
        <div className="flex gap-3 max-w-80 flex-wrap mt-4">
          {Techs.map((Tech) => {
            return (
              <span
                key={Tech.name}
                className="flex gap-2 border-neutral-700 border px-3 py-2 w-fit rounded-lg hover:bg-neutral-700 hover:border-neutral-600 cursor-default "
              >
                {Tech.svg()}
                <p className="text-white text-xs text-nowrap">{Tech.name}</p>
              </span>
            );
          })}
        </div>
      </BgCard>
    </div>
  );
};

export default TechBox;
