import React from "react";
import BgCard from "../ui/bg-Card";
import Customtext from "../ui/CustomText";
import CustomButton from "../ui/CustomButton";
import Image from "next/image";
const CropSense = () => {
  return (
    <BgCard
      className="w-full flex flex-col gap-7 hover:border-gray-200 "
      delay={0.1}
    >
      <div className="flex flex-col gap-4">
        <Customtext heading={true}>Crop Sense</Customtext>

        <div className="flex md:flex-row flex-col-reverse gap-5 justify-between ">
          <div className="cursor-default ">
            <Customtext>
              - Developed an{" "}
              <Customtext bold={true}>
                IoT-enabled predictive farming
              </Customtext>{" "}
              platform
              <Customtext bold={true}>
                (Indian Patent: 202531042207 A)
              </Customtext>
              that recommends optimal crops based on real-time soil composition,
              temperature, and humidity sensor data.
            </Customtext>
            <br />
            <Customtext>
              - Delivered a{" "}
              <Customtext bold={true}>responsive farmer-facing UI</Customtext>{" "}
              for location-specific input and
              <Customtext bold={true}>
                personalized crop recommendations
              </Customtext>{" "}
              reducing dependency on manual agronomic consultation.
            </Customtext>
            <br />
          </div>
          <div className="relative w-full md:w-90 shrink-0">
            <Image
              src="/CropSense.png"
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
        <CustomButton
          liveLink={true}
          href={"https://crop-sense-ai.vercel.app/"}
        />
        <CustomButton
          Patent={true}
          href="https://drive.google.com/file/d/1BuCxbyWfgDgvftBv4v2jLjfI95YLtFqs/view"
        />
      </div>
    </BgCard>
  );
};

export default CropSense;
