import React from "react";
import { motion } from "framer-motion";
import ayush215mb from "../assets/Images/Ayush215mb.jpg";
const First = () => {
  return (
    <div className=" mx-10 mb-10 ">
      <div className="items-center md:flex-row-reverse  flex-col justify-center py-7 flex gap-10 lg:justify-around ">
        <img
          src={ayush215mb}
          className="lg:max-w-md rounded-3xl sm:max-w-sm max-w-xs  "
          alt="logo"
        />
        <div className="flex flex-col gap-5">
          <h1 className="md:text-7xl text-2xl text-center md:text-start">
            AYUSH YADAV
          </h1>
          <p className="md:text-3xl">Hello there! 🤙</p>
          <motion.p className="md:text-xl md:max-w-xl">
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
