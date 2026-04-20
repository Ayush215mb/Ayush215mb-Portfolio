import React from "react";
import BgCard from "../ui/bg-Card";

const CropSense = () => {
  return (
    <BgCard className="min-w-3xl flex flex-col gap-7 hover:border-gray-200 ">
      <div className="flex flex-col gap-4">
        <p className="text-white font-bold text-lg">Crop Sense</p>
        <div className="text-gray-200 text-sm cursor-default ">
          <p>
            - Developed an{" "}
            <span className="font-bold text-white">
              IoT-enabled predictive farming
            </span>{" "}
            platform
            <span className="font-bold text-white">
              (Indian Patent: 202531042207 A)
            </span>
            that recommends optimal crops based on real-time soil composition,
            temperature, and humidity sensor data.
          </p>
          <br />
          <p>
            - Delivered a{" "}
            <span className="font-bold text-white">
              responsive farmer-facing UI
            </span>{" "}
            for location-specific input and
            <span className="font-bold text-white">
              personalized crop recommendations
            </span>{" "}
            reducing dependency on manual agronomic consultation.
          </p>
          <br />

          <span className="font-bold text-white"></span>
        </div>
      </div>
      <div className="flex">
        <a href="https://crop-sense-ai.vercel.app/" target="_blank">
          <button className="px-4 py-2 border border-neutral-700 bg-neutral-800 rounded-l-lg hover:bg-neutral-700 hover:border-white cursor-pointer flex gap-2 hover:scale-105 ">
            <p className="text-white font-bold">Live Link</p>
            <span>🔗</span>
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/1BuCxbyWfgDgvftBv4v2jLjfI95YLtFqs/view"
          target="_blank"
        >
          <button className="px-4 py-2 border border-neutral-700 bg-neutral-800 rounded-r-lg hover:bg-neutral-700 hover:border-white cursor-pointer  flex gap-2 hover:scale-105 ">
            <p className="text-white font-bold">Patent </p>
            <span>📄</span>
          </button>
        </a>
      </div>
    </BgCard>
  );
};

export default CropSense;
