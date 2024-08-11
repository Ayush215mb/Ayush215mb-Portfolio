import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-around py-5 items-center">
        <motion.img
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          src="/Images/Ayush215mb-Logo.png"
          alt="logo"
          className="  w-36 sm:w-60 md:w-80 lg:w-80"
        />
        <div>
          <ul className=" hidden lg:flex gap-20 text-2xl font-bold">
            <motion.li
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              Projects
            </motion.li>
            <motion.li
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              Bio
            </motion.li>
            <motion.li
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              Skills
            </motion.li>
            <motion.li
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              Contact
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
