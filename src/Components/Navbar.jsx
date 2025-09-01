import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import logo from "../assets/Images/Ayush215mb-Logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex md:justify-around justify-center py-5  items-center">
        {/* <div className="flex justify-center">
          <motion.img
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            src={logo}
            alt="logo"
            className=" w-36 sm:w-60 md:w-80 lg:w-80 "
          />
        </div> */}

        <div>
          <ul className=" hidden md:flex gap-20 text-2xl font-bold">
            <a href="#">
              <motion.li
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
              >
                Projects
              </motion.li>
            </a>

            <a href="#">
              <motion.li
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
              >
                Bio
              </motion.li>
            </a>

            <a href="#">
              <motion.li
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
              >
                Skills
              </motion.li>
            </a>

            <a href="#">
              <motion.li
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
              >
                Contact
              </motion.li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
