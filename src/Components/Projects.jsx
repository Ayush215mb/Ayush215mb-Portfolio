import project1 from "../assets/Images/project1.jpeg";
import project2 from "../assets/Images/project2.jpeg";
import project3 from "../assets/Images/project3.jpeg";
import project4 from "../assets/Images/project4.jpeg";
import project5 from "../assets/Images/project5.jpeg";
import project6 from "../assets/Images/project6.jpeg";
import ProjectsTemp from "./ProjectsTemp";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="p-20">
      <h2 className="lg:text-4xl text-3xl mb-8 text-center font-bold">
        Projects
      </h2>
      <div className="flex flex-col justify-between items-center gap-y-5">
        <div className="flex  md:flex-row  flex-col gap-10">
          <motion.div>
            <ProjectsTemp
              title="Echomate"
              image={project1}
              description="Building an AI sales Agent for Educational institutes."
              link="https://echomate-fr.vercel.app/"
            />
          </motion.div>
          <motion.div>
            <ProjectsTemp
              title="YAIT"
              image={project3}
              description="Built an AI therapist chat bot."
              link="https://yait.onrender.com/"
            />
          </motion.div>

          <motion.div>
            <ProjectsTemp
              title="Crop Sense"
              image={project6}
              description="A platform which helps predicts the ideal crop and its expected yeild based on the composition details of the soil and climate of the region."
              link="https://crop-sense-ai.vercel.app/"
            />
          </motion.div>
        </div>
        <div className="flex gap-10 md:flex-row  flex-col">
          <motion.div>
            <ProjectsTemp
              title="Veer Solutions"
              image={project2}
              description="Developed a responsive and visually appealing website for a software agenncy."
              link="https://veer-solutions.vercel.app/"
            />
          </motion.div>

          <motion.div>
            <ProjectsTemp
              title="Parse Spy"
              image={project4}
              description="A desktop app which automates social media investigations with a complete report."
              link="https://parsespy.vercel.app/"
            />
          </motion.div>

          <motion.div>
            <ProjectsTemp
              title="E-commerce frontend"
              image={project5}
              description="This is just as an proof of my skills in developing frontend of a e-commerce site."
              link="https://themuze.vercel.app/"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
