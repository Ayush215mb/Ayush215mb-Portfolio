import React from "react";
import BgCard from "../ui/bg-Card";
import Customtext from "../ui/CustomText";
import CustomButton from "../ui/CustomButton";

const ParseSpy = () => {
  return (
    <BgCard className=" w-full flex flex-col gap-7 hover:border-gray-200 ">
      <div className="flex flex-col gap-4">
        <Customtext heading={true}> Parse Spy</Customtext>
        <div className="text-gray-200 text-xs md:text-sm">
          <Customtext>
            - Developed an{" "}
            <Customtext bold={true}>automated digital forensic tool</Customtext>{" "}
            using Selenium WebDriver to simulate human interaction for
            high-fidelity <Customtext bold={true}>data extraction </Customtext>{" "}
            from <Customtext bold={true}>social media</Customtext>
            platforms.
          </Customtext>
          <br />
          <Customtext>
            - Architected a{" "}
            <Customtext bold={true}>modular desktop application</Customtext>{" "}
            with an Electron.js frontend and Node.js backend, achieving a{" "}
            <Customtext bold={true}>90% reduction</Customtext> in mean
            processing time compared to manual investigation.
          </Customtext>
          <br />
          <Customtext>
            - Engineered an{" "}
            <Customtext bold={true}> automated reporting</Customtext> module
            using PDFKit to generate comprehensive forensic reports with
            <Customtext bold={true}>embedded screenshots</Customtext> and
            verified timestamps.{" "}
          </Customtext>
          <br />
        </div>
      </div>
      <div className="flex">
        <CustomButton liveLink={true} href={"https://parsespy.vercel.app/"} />
        <CustomButton
          UtubeLink={true}
          href="https://www.youtube.com/watch?v=mMH8NYUHNUg"
        />
      </div>
    </BgCard>
  );
};

export default ParseSpy;
