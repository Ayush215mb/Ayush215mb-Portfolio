import React from "react";
import BgCard from "../ui/bg-Card";
import Customtext from "../ui/CustomText";
import CustomButton from "../ui/CustomButton";

export default function WomenSafety() {
  return (
    <BgCard className=" w-full flex flex-col gap-7 hover:border-gray-200  ">
      <div className="flex flex-col gap-4">
        <Customtext heading={true}>Women Safety App</Customtext>
        <div className="text-gray-200 text-xs md:text-sm ">
          <Customtext>
            - Designed and built a{" "}
            <Customtext bold={true}>
              Cross-platform mobile application
            </Customtext>{" "}
            using React native .
          </Customtext>
          <br />
        </div>
      </div>
      <div className="flex">
        <CustomButton
          Submit={true}
          href="https://expo.dev/accounts/ayush215mb/projects/women-safety/builds/d25217a6-9d5f-4d38-914c-bd62f9079c1e"
        >
          <Customtext BtnText={true}>Downloadable APK </Customtext>
          <Customtext emoji={true}>⬇️</Customtext>
        </CustomButton>
      </div>
    </BgCard>
  );
}
