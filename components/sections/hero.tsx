"use client";
import BgCard from "../ui/bg-Card";
import Image from "next/image";
import { socials } from "@/components/icons/socials";
import Customtext from "@/components/ui/CustomText";
export default function Hero() {
  return (
    <section className="w-2/3">
      <BgCard className=" w-full">
        <div className="flex md:justify-between mb-10  flex-col md:flex-row">
          <div className="flex gap-4 md:items-start flex-col md:flex-row items-center">
            <Image
              width={100}
              height={100}
              loading="eager"
              src="/AyushYadav.jpeg"
              alt="Ayush Yadav — Full-Stack Developer from India"
              className="border border-neutral-100 rounded-2xl lg:max-w-md sm:max-w-sm max-w-xs  "
            />
            <div className="text-white">
              <h1 className="text-xs md:text-sm text-white font-bold">
                Ayush Yadav
              </h1>

              <Customtext>Full-Stack Developer</Customtext>
              <Customtext> ayush215mb@gmail.com </Customtext>
            </div>
          </div>
          <div className="flex justify-center m ">
            {socials.map((social) => {
              return (
                <div key={social.link}>
                  <a href={social.link} target="_blank">
                    <span className="hover:bg-neutral-700 flex p-3 rounded-lg max-h-12 cursor-pointer justify-center items-center ">
                      <p className="text-white size-4 "> {social.icon()}</p>
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-gray-300 pt-6 border-t border-neutral-600 text-sm px-4 ">
          <Customtext>
            Hi, I&apos;m
            <Customtext bold={true}> Ayush Yadav</Customtext>, a Full-Stack
            Developer from 🇮🇳 India.
          </Customtext>
          <br />
          <Customtext>
            I design and ship full-stack products{" "}
            <Customtext bold={true}>end to end</Customtext>. Whether I&apos;m{" "}
            <Customtext bold={true}>architecting a backend</Customtext>,{" "}
            <Customtext bold={true}>designing the frontend</Customtext>, or{" "}
            <Customtext bold={true}>optimizing state</Customtext>
            across 30 screens, I own the work until it works.
          </Customtext>
          <br />
          <Customtext>
            You can reach me on
            <Customtext
              link={true}
              href="https://www.linkedin.com/in/ayush215mb/"
            >
              Linkedin DMs
            </Customtext>
            or
            <Customtext link={true} href="mailto:ayush215mb@gmail.com">
              Email
            </Customtext>
            .
          </Customtext>
        </div>
      </BgCard>
    </section>
  );
}
