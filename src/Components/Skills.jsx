// import html from "../assets/Images/html-1.svg";
import SkillsTemp from "./SkillsTemp";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import Nextjs from "../assets/Images/Nextjs.svg";
const Skills = () => {
  return (
    <div className="my-16  md:px-52 ">
      <h2 className="text-3xl  md:text-4xl mb-8 font-bold text-center">
        Skills
      </h2>
      <div className="border-2 rounded-3xl border-gray-700 md:px-10 overflow-hidden w-full ">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <SkillsTemp
            name="Java Script"
            image="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            year="2 years"
          />{" "}
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <SkillsTemp
            name="TypeScript"
            image="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
            year="2 years"
          />
        </motion.div>

        <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
        >
          <SkillsTemp
              name="Python"
              image="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
              year="2 years"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <SkillsTemp
            name="React.js"
            image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            year="2 year"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          {" "}
          <SkillsTemp name="Next.js" image={Nextjs} year="1 year" />
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <SkillsTemp
            name="React Native"
            image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            year="1 year"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <SkillsTemp
            name="Nest JS"
            image="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg"
            year="1 year"
          />
        </motion.div>

        <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
        >
          <SkillsTemp
              name="Go lang"
              image="https://img.icons8.com/?size=100&id=44442&format=png&color=000000"
              year="basic"
          />
        </motion.div>


      </div>
    </div>
  );
};

export default Skills;

//source of all logos
// https://commons.wikimedia.org/wiki/Main_Page
