import BgCard from "../ui/bg-Card";
import Image from "next/image";
import { socials } from "@/constants/socials";
export default function Hero() {
  return (
    <BgCard className="w-full">
      <div className="flex gap-4">
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
      <div>
        {socials.map((social) => {
          return <div key={social.link}></div>;
        })}
      </div>
    </BgCard>
  );
}
