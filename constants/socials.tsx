import { JSX } from "react";
import {
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsFileEarmarkText,
} from "react-icons/bs";

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
      return <BsGithub size={18} />;
    },
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/ayush215mb/",
    icon: () => <BsLinkedin size={18} />,
  },
  {
    name: "Twitter",
    link: "https://x.com/Glevoidd",
    icon: () => <BsTwitterX size={18} />,
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1suxUsgwERKwUrb5P22r5721UzOnvEGMo/view",
    icon: () => <BsFileEarmarkText size={18} />,
  },
];
