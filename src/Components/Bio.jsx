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
            I’m from India and currently in my 3rd year of pursuing a B.Tech in
            Computer Science.
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            I’ve always enjoyed the process of taking a small idea and actually
            building it into something people can use. That’s what got me
            interested in development. I’ve built projects across the
            stack(MERN) and also explored mobile development with React Native,
            which has given me a well-rounded perspective on creating solutions
            that actually reach users.
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            For the past year, I’ve been freelancing, which gave me the
            opportunity to work directly with clients, manage projects
            independently, and deliver real-world solutions—something that
            really sharpened both my technical and communication skills.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
