import React from "react";
import BgCard from "./bg-Card";
import { TechName } from "../tech-stack/languages";
import Customtext from "./CustomText";

const TechBox = ({
  heading,
  Techs,
}: {
  heading: string;
  Techs: TechName[];
}) => {
  return (
    <BgCard className=" w-full md:w-70 md:h-70 p-4">
      <Customtext bold={true}>{heading}</Customtext>
      <div className="flex gap-3 max-w-80 flex-wrap mt-4">
        {Techs.map((Tech) => {
          return (
            <span
              key={Tech.name}
              className="flex gap-2 border-neutral-700 border px-3 py-2 w-fit rounded-lg hover:bg-neutral-700 hover:border-white cursor-default hover:scale-105 "
            >
              {Tech.svg()}

              <p className="text-white text-xs text-nowrap">{Tech.name}</p>
            </span>
          );
        })}
      </div>
    </BgCard>
  );
};

export default TechBox;
