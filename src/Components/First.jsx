import React from "react";
import { motion } from "framer-motion";
import ayush215mb from "../assets/Images/Ayush215mb.jpg";
import { fadeIn } from "../Variants";
const First = () => {
  return (
    <div className=" mx-10 mb-16 ">
      <div className="items-center md:flex-row-reverse  flex-col justify-center py-7 flex gap-10 lg:justify-around ">
        <motion.img
          variants={fadeIn("up", 1.0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          src={ayush215mb}
          className="lg:max-w-md rounded-3xl sm:max-w-sm max-w-xs  "
          alt="logo"
        />
        <div className="flex flex-col gap-5">
          <motion.h1
            variants={fadeIn("down", 1.0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="md:text-7xl text-2xl text-center md:text-start"
          >
            AYUSH YADAV
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 1.0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="md:text-3xl text-xl"
          >
            Hello there! 🤙
          </motion.p>
          <motion.p
            variants={fadeIn("down", 1.0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="md:text-2xl text-lg md:max-w-xl"
          >
            I am a passionate Web Developer with a knack of creating beautiful
            and functional websites.
            <br /> I like transforming ideas into enaging and user-friendly web
            experiences.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default First;
