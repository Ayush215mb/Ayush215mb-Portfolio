import React from "react";
import BgCard from "../ui/bg-Card";
import Customtext from "../ui/CustomText";
import CustomButton from "../ui/CustomButton";
import Image from "next/image";
const ParseSpy = () => {
  return (
    <BgCard
      className=" w-full flex flex-col gap-7 hover:border-gray-200 "
      delay={0.3}
    >
      <div className="flex flex-col gap-4">
        <Customtext heading={true}> Parse Spy</Customtext>
        <div className="flex md:flex-row flex-col-reverse gap-5 justify-between ">
          <div className="text-gray-200 text-xs md:text-sm">
            <Customtext>
              - Developed an{" "}
              <Customtext bold={true}>
                automated digital forensic tool
              </Customtext>{" "}
              using Selenium WebDriver to simulate human interaction for
              high-fidelity{" "}
              <Customtext bold={true}>data extraction </Customtext> from{" "}
              <Customtext bold={true}>social media</Customtext>
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

          <div className="relative w-full md:w-90 shrink-0">
            <Image
              src="/ParseSpy.png"
              width={1456}
              height={816}
              loading="eager"
              sizes="(max-width: 768px) 100vw, 360px"
              quality={100}
              alt="Project Sentinel"
              className="w-full h-auto rounded-lg"
            />
          </div>
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
