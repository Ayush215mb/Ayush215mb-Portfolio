import React from "react";
import BgCard from "../ui/bg-Card";
import Customtext from "../ui/CustomText";
import CustomButton from "../ui/CustomButton";

const Sentinel = () => {
  return (
    <BgCard className=" w-full flex flex-col gap-7 hover:border-gray-200  ">
      <div className="flex flex-col gap-4">
        <Customtext heading={true}> Project Sentinel</Customtext>
        <div className="text-gray-200 text-xs md:text-sm ">
          <Customtext>
            - Built a real-time{" "}
            <Customtext bold={true}>AI governance proxy</Customtext> that
            intercepts and validates all requests between applications and LLM
            APIs (Gemini) before they reach the model.
          </Customtext>
          <br />
          <Customtext>
            - Engineered a <Customtext bold={true}>PII detection</Customtext>{" "}
            and redaction engine using{" "}
            <Customtext bold={true}>Microsoft Presidio </Customtext> capable of
            identifying and masking 50+ sensitive data types including{" "}
            <Customtext bold={true}>emails</Customtext>,{" "}
            <Customtext bold={true}>credit card numbers</Customtext> and{" "}
            <Customtext bold={true}>API keys</Customtext>.
          </Customtext>
          <br />
          <Customtext>
            - Implemented a semantic{" "}
            <Customtext bold={true}>
              {" "}
              prompt injection detection system
            </Customtext>{" "}
            to <Customtext bold={true}>block jailbreak attempts</Customtext> and
            system prompt overrides in real time with sub-50ms latency overhead.
          </Customtext>
        </div>
      </div>
      <div className="flex">
        <CustomButton
          liveLink={true}
          href="https://sentinel.theprinceraj.tech/"
        />
        <CustomButton
          UtubeLink={true}
          href={"https://www.youtube.com/watch?v=PTOFpwGESmE"}
        />
      </div>
    </BgCard>
  );
};

export default Sentinel;
