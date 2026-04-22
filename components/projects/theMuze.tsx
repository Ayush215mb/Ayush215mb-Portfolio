import React from "react";
import BgCard from "../ui/bg-Card";
import Customtext from "../ui/CustomText";
import CustomButton from "../ui/CustomButton";

const TheMuze = () => {
  return (
    <BgCard className="w-full flex flex-col gap-7 hover:border-gray-200 ">
      <div className="flex flex-col gap-4">
        <Customtext bold={true}>The Muze (Demo)</Customtext>
        <div className="text-gray-200 text-sm ">
          <Customtext>
            - Designed and Devloped a{" "}
            <Customtext bold={true}>beautiful landing page</Customtext> for a
            clothing brand.
          </Customtext>
        </div>
      </div>
      <div>
        <CustomButton Submit={true} href="https://themuze.vercel.app/">
          <Customtext BtnText={true}>Live Link</Customtext>{" "}
          <Customtext emoji={true}>🔗</Customtext>
        </CustomButton>
      </div>
    </BgCard>
  );
};

export default TheMuze;
