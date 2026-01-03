import { motion } from "framer-motion";
import ayush215mb from "../assets/Images/AyushYadav.png";
import { fadeIn } from "../Variants";
import { GoRocket } from "react-icons/go";

const First = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ayush_RESUME.pdf"; // path relative to public/
    link.download = "Ayush_RESUME.pdf"; // file name for download
    link.click();
  };
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
            A developer bringing ideas to life through web and mobile
            applications.
          </motion.p>

          <div className="flex justify-center items-center max-w-xl mx-auto rounded-lg overflow-hidden hover:border hover:border-white cursor-pointer   ">
            <motion.button
              variants={fadeIn("down", 1)}
              // initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className=" bg-transparent py-2 rounded-lg px-3 text-white"
              onClick={handleDownload}
            >
              <p className="text-white font-semibold md:text-2xl text-lg  flex  items-center justify-center  gap-4 ">
                Resume <GoRocket className="font-black text-xl" />
              </p>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
