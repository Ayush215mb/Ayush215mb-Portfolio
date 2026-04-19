import BgCard from "../ui/bg-Card";
import Image from "next/image";
import { socials } from "@/constants/socials";
export default function Hero() {
  return (
    <BgCard className="w-2/3 ">
      <div className="flex justify-between mb-10 ">
        <div className="flex gap-4 items-start">
          <Image
            width={100}
            height={100}
            loading="eager"
            src="/AyushYadav.jpeg"
            alt="User_image"
            className="border border-neutral-100 rounded-2xl"
          />
          <div className="text-white">
            <p className="text-lg text-bold">Ayush Yadav</p>
            <p className="text-sm text-gray-300 ">Full-Stack Developer</p>
            <p className="text-sm text-gray-300 "> ayush215mb@gmail.com </p>
          </div>
        </div>
        <div className="flex ">
          {socials.map((social) => {
            return (
              <a key={social.link} href={social.link} target="_blank">
                <span className="hover:bg-neutral-800 flex p-4 max-h-12 cursor-pointer justify-center items-center ">
                  <p className="text-white size-4 "> {social.icon()}</p>
                </span>
              </a>
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
          I design and ship full-stack products end to end. Whether I&apos;m
          architecting a backend, designing the frontend, or optimizing state
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
  );
}
