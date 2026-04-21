import React from "react";
import BgCard from "../ui/bg-Card";

const Sentinel = () => {
  return (
    <BgCard className="min-w-3xl flex flex-col gap-7 hover:border-gray-200  ">
      <div className="flex flex-col gap-4">
        <p className="text-white font-bold text-lg"> Project Sentinel</p>
        <div className="text-gray-200 text-sm ">
          <p>
            - Built a real-time{" "}
            <span className="font-bold text-white">AI governance proxy</span>{" "}
            that intercepts and validates all requests between applications and
            LLM APIs (Gemini) before they reach the model.
          </p>
          <br />
          <p>
            - Engineered a{" "}
            <span className="font-bold text-white">PII detection</span> and
            redaction engine using{" "}
            <span className="font-bold text-white">Microsoft Presidio </span>{" "}
            capable of identifying and masking 50+ sensitive data types
            including <span className="font-bold text-white">emails</span>,{" "}
            <span className="font-bold text-white">credit card numbers</span>{" "}
            and <span className="font-bold text-white">API keys</span>.
          </p>
          <br />
          <p>
            - Implemented a semantic{" "}
            <span className="font-bold text-white">
              {" "}
              prompt injection detection system
            </span>{" "}
            to{" "}
            <span className="font-bold text-white">
              block jailbreak attempts
            </span>{" "}
            and system prompt overrides in real time with sub-50ms latency
            overhead.
          </p>
        </div>
      </div>
      <div className="flex">
        <a href="https://sentinel.theprinceraj.tech" target="_blank">
          <button className="px-4 py-2 border border-neutral-700 rounded-l-lg hover:bg-neutral-700 hover:border-white cursor-pointer flex gap-2 hover:scale-105 ">
            <p className="text-white font-bold">Live Link</p>
            <span>🔗</span>
          </button>
        </a>

        <a href="https://www.youtube.com/watch?v=PTOFpwGESmE" target="_blank">
          <button className="px-4 py-2 border border-neutral-700  rounded-r-lg hover:bg-neutral-700 hover:border-white cursor-pointer flex gap-2 hover:scale-105 ">
            <p className="text-white font-bold">Youtube Link</p>
            <span>🎥</span>
          </button>
        </a>
      </div>
    </BgCard>
  );
};

export default Sentinel;
