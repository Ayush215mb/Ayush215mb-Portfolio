import { JSX } from "react";
import {
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsFileEarmarkText,
} from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

type social = {
  name: string;
  link: string;
  icon: () => JSX.Element;
};

export const socials: social[] = [
  {
    name: "Github",
    link: "https://github.com/Ayush215mb",
    icon: () => {
      return <BsGithub />;
    },
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/ayush215mb/",
    icon: () => <BsLinkedin />,
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/ayush215mb",
    icon: () => {
      return <SiLeetcode />;
    },
  },

  {
    name: "Twitter",
    link: "https://x.com/Glevoidd",
    icon: () => <BsTwitterX />,
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1suxUsgwERKwUrb5P22r5721UzOnvEGMo/view",
    icon: () => <BsFileEarmarkText />,
  },
];
