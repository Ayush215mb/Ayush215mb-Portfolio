import React from "react";
import BgCard from "../ui/bg-Card";

const ParseSpy = () => {
  return (
    <BgCard className="min-w-3xl flex flex-col gap-7 hover:border-gray-200 ">
      <div className="flex flex-col gap-4">
        <p className="text-white font-bold text-lg"> Parse Spy</p>
        <div className="text-gray-200 text-sm ">
          <p>
            - Developed an{" "}
            <span className="font-bold text-white">
              automated digital forensic tool
            </span>{" "}
            using Selenium WebDriver to simulate human interaction for
            high-fidelity <span>data extraction </span> from{" "}
            <span>social media</span>
            platforms.
          </p>
          <br />
          <p>
            - Architected a{" "}
            <span className="font-bold text-white">
              modular desktop application
            </span>{" "}
            with an Electron.js frontend and Node.js backend, achieving a{" "}
            <span className="font-bold text-white">90% reduction</span> in mean
            processing time compared to manual investigation.
          </p>
          <br />
          <p>
            - Engineered an{" "}
            <span className="font-bold text-white"> automated reporting</span>{" "}
            module using PDFKit to generate comprehensive forensic reports with
            <span className="font-bold text-white">
              embedded screenshots
            </span>{" "}
            and verified timestamps.{" "}
          </p>
          <br />
        </div>
      </div>
      <div className="flex">
        <a href="https://parsespy.vercel.app/" target="_blank">
          <button className="px-4 py-2 border border-neutral-700 bg-neutral-800 rounded-l-lg hover:bg-neutral-700 hover:border-white cursor-pointer flex gap-2 hover:scale-105 ">
            <p className="text-white font-bold">Live Link</p>
            <span>🔗</span>
          </button>
        </a>
        <a href="https://www.youtube.com/watch?v=mMH8NYUHNUg" target="_blank">
          <button className="px-4 py-2 border border-neutral-700 bg-neutral-800 rounded-r-lg hover:bg-neutral-700 hover:border-white cursor-pointer flex gap-2 hover:scale-105 ">
            <p className="text-white font-bold">Youtube Link</p>
            <span>🎥</span>
          </button>
        </a>
      </div>
    </BgCard>
  );
};

export default ParseSpy;
