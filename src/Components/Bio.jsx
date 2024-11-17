import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const Bio = () => {
  return (
    <div className="flex justify-around md:my-32 my-16 ">
      <div>
        <h2 className="text-3xl md:text-4xl mb-8 font-bold text-center">Bio</h2>
        <div className="flex flex-col items-center justify-center text-xl md:text-2xl px-5  md:max-w-4xl gap-8 ">
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            I am a 20-year-old from Kolkata,India currently pursuing B.Tech in
            Computer Science and Engineering(2023-27).
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            Other than that, I am also a dedicated freelance MERN stack Web
            Developer with experience in creating high-quality websites and web
            automation softwares. Skilled in React.js, Nodejs, Express, pdf-kit,
            Mongoose, Tailwind CSS, Firebase, Selenium, ElectronJS, I aim to
            leverage my expertise to build innovative digital solutions.
            Passionate about crafting userfriendly interfaces and embracing
            cutting-edge technologies for efficient development.
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            I actively participate in online hackathons and coding competitions,
            if you want to add me in your team then reach out to me on LinkedIn
            .If you have any other questions, feel free to ask in the contact
            page or directly DM me on any of my social media accounts.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
