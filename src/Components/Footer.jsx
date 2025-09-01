import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import githublogo from "../assets/Images/github.png";
import twitterlogo from "../assets/Images/twitter.jpg";
const Footer = () => {
  return (
    <div className="flex my-10  md:mx-40 items-center justify-center  ">
      <div className="flex items-center justify-around gap-7">
        <a href="https://www.linkedin.com/in/ayush215mb/" target="_blank">
          <motion.img
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"
            alt="Linkedin_logo"
            className="max-w-12"
          />
        </a>
        <a href="https://www.instagram.com/ayush215mb" target="_blank">
          <motion.img
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            src=" https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
            alt="Insta_logo"
            className="max-w-12"
          />
        </a>
        <a href="https://github.com/Ayush215mb" target="_blank">
          <motion.img
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            src={githublogo}
            alt="Github_logo"
            className="max-w-12 "
          />
        </a>

        <a href="mailto: sidharth197502@gmail.com" target="_blank">
          <motion.img
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-02-512.png"
            alt="gmail_logo"
            className="max-w-12 "
          />
        </a>
        <a href="https://discord.com/users/903294131768545291" target="_blank">
          <motion.img
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            src=" https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-64.png"
            alt="discord_logo"
            className="max-w-12 "
          />
        </a>
        <a href="https://x.com/glevoidd" target="_blank">
          <motion.img
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            src={twitterlogo}
            alt="twitter_logo"
            className="max-w-12 "
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
