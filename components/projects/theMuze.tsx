import React from "react";
import BgCard from "../ui/bg-Card";
import Customtext from "../ui/CustomText";
import CustomButton from "../ui/CustomButton";
import Image from "next/image";
const TheMuze = () => {
  return (
    <BgCard
      className="w-full flex flex-col gap-7 hover:border-gray-200 "
      delay={0.3}
    >
      <div className="flex flex-col gap-4">
        <Customtext bold={true}>The Muze (Demo)</Customtext>

        <div className="flex md:flex-row flex-col-reverse gap-5 justify-between">
          <div className="text-gray-200 text-sm ">
            <Customtext>
              - Built with <Customtext bold={true}>React JS</Customtext> using
              component-based architecture for clean,{" "}
              <Customtext bold={true}>reusable UI</Customtext> .
            </Customtext>
            <br />
            <Customtext>
              - Used <Customtext bold={true}>custom color palette</Customtext> (
              navy blue + golden yellow) giving a{" "}
              <Customtext bold={true}>bold</Customtext> ,{" "}
              <Customtext bold={true}>premium brand </Customtext> feel.
            </Customtext>
            <br />
            <Customtext>
              - It Demonstrates my{" "}
              <Customtext bold={true}>real-world UI/UX thinking</Customtext> and
              showcases the ability to{" "}
              <Customtext bold={true}>
                replicate production-level design aesthetics
              </Customtext>{" "}
              .
            </Customtext>
          </div>
          <div className="relative w-full md:w-90 shrink-0">
            <Image
              src="/TheMuze.png"
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
