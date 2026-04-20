import React from "react";
import BgCard from "../ui/bg-Card";

const TheMuze = () => {
  return (
    <BgCard className="min-w-3xl flex flex-col gap-7 hover:border-gray-200 ">
      <div className="flex flex-col gap-4">
        <p className="text-white font-bold">The Muze (Demo)</p>
        <div className="text-gray-200 text-sm ">
          <p>
            - Designed and Devloped a{" "}
            <span className="font-bold text-white">beautiful landing page</span>{" "}
            for a clothing brand.
          </p>
        </div>
      </div>
      <div>
        <a href="https://themuze.vercel.app/" target="_blank">
          <button className="px-4 py-2 border border-neutral-700 bg-neutral-800 rounded-sm hover:bg-neutral-700 hover:border-white cursor-pointer ">
            <p className="text-white">Live Link</p>
          </button>
        </a>
      </div>
    </BgCard>
  );
};

export default TheMuze;
