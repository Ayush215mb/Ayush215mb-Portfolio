import React from "react";
import project1 from "../assets/Images/project1.jpeg";
import project2 from "../assets/Images/project2.jpeg";
import project3 from "../assets/Images/project3.jpeg";
import project4 from "../assets/Images/project4.jpeg";
import project5 from "../assets/Images/project5.jpeg";
import project6 from "../assets/Images/project6.jpeg";
import ProjectsTemp from "./ProjectsTemp";

import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const Projects = () => {
  return (
    <div className="p-20">
      <h2 className="lg:text-4xl text-3xl mb-8 text-center font-semibold">
        Projects
      </h2>
      <div className="flex flex-col justify-between items-center gap-y-5">
        <div className="flex gap-x-10">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <ProjectsTemp
              title="Anyvend"
              image={project1}
              description="Designed and developed a website that integrates with vending machines equipped with
                      QR codes. "
              link="https://avt1-9a0bb.web.app/"
            />
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <ProjectsTemp
              title="Veer Solutions"
              image={project2}
              description="Developed a responsive and visually appealing website for a software agenncy."
              link="https://veer-solutions.vercel.app/"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <ProjectsTemp
              title="COMING SOON"
              image={project3}
              description=""
              link=""
            />
          </motion.div>
        </div>
        <div className="flex gap-10">
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <ProjectsTemp
              title="COMING SOON"
              image={project4}
              description=""
              link=""
            />
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <ProjectsTemp
              title="COMING SOON"
              image={project6}
              description=""
              link=""
            />
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <ProjectsTemp
              title="COMING SOON"
              image={project5}
              description=""
              link=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
