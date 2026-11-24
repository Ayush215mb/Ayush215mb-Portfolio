import {
    BsGithub,
    BsLinkedin,
    BsTwitterX,
    BsFileEarmarkText,
} from "react-icons/bs";
import { IconType } from "react-icons/lib";
import { SiLeetcode } from "react-icons/si";

type social = {
    name: string;
    link: string;
    icon: IconType;
};

export const socials: social[] = [
    {
        name: "Github",
        link: "https://github.com/Ayush215mb",
        icon: BsGithub,
    },
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/glevoidd/",
        icon: BsLinkedin,
    },
    {
        name: "LeetCode",
        link: "https://leetcode.com/ayush215mb",
        icon: SiLeetcode,
    },
    {
        name: "Twitter",
        link: "https://x.com/Glevoidd",
        icon: BsTwitterX,
    },
    {
        name: "Resume",
        link: "/CV-glevoidd.pdf",
        icon: BsFileEarmarkText,
    },
];
