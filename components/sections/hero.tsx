import BgCard from "../ui/bg-Card";
import Image from "next/image";
import { socials } from "@/components/ui/socials";
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
              alt="User_image"
              className="border border-neutral-100 rounded-2xl lg:max-w-md sm:max-w-sm max-w-xs  "
            />
            <div className="text-white">
              <p className="text-lg text-bold">Ayush Yadav</p>
              <p className="text-sm text-gray-300 ">Full-Stack Developer</p>
              <p className="text-sm text-gray-300 "> ayush215mb@gmail.com </p>
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
          <p className="">
            Hi, I&apos;m
            <span className="font-bold text-white"> Ayush Yadav</span>, a
            Full-Stack Developer from 🇮🇳 India.
          </p>
          <br />
          <p>
            I design and ship full-stack products{" "}
            <span className="text-white font-bold">end to end</span>. Whether
            I&apos;m{" "}
            <span className="text-white font-bold">architecting a backend</span>
            ,{" "}
            <span className="text-white font-bold">designing the frontend</span>
            , or <span className="text-white font-bold">optimizing state</span>{" "}
            across 30 screens, I own the work until it works.
          </p>
          <br />
          <p>
            You can reach me on
            <a href="https://www.linkedin.com/in/ayush215mb/" target="_blank">
              {" "}
              <span className="font-bold text-white">Linkedin DMs</span>
            </a>{" "}
            or{" "}
            <a href="mailto:ayush215mb@gmail.com" target="_blank">
              {" "}
              <span className="font-bold text-white">Email</span>
            </a>
            .
          </p>
        </div>
      </BgCard>
    </section>
  );
}
