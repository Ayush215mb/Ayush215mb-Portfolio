import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

function ContactUs() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_sidharth197502";
    const templateID = "template_wqffvui";
    const publickey = "bFACtl6s8w3jYYnOm";

    const templateParams = {
      from_name: Name,
      from_email: Email,
      to_name: "Ayush Yadav",
      message: Message,
    };

    console.log(Name, Email, Message);

    emailjs
      .send(serviceID, templateID, templateParams, publickey)
      .then((response) => {
        alert("Thank You for Contacting🙌");
        console.log("email sent succesfully");
        setEmail("");
        setMessage("");
        setName("");
      })
      .catch((error) => {
        console.log("failed", error);
      });
  };

  return (
    <motion.div>
      <div className="md:my-20 my-16">
        <motion.form
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="max-w-md md:max-w-xl mx-auto p-5 rounded-3xl border-2 border-gray-500 text-white"
          onSubmit={handleSubmit}
        >
          <div className="mb-5 md:mb-10">
            <label className="block mb-2 text-lg">Your name </label>
            <input
              type="text"
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full py-2 px-4  bg-transparent border-b "
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-5 md:mb-10">
            <label className="block mb-2 text-lg">Your email </label>
            <input
              type="email"
              name="user_email"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full py-2 px-4 border-b bg-transparent "
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-5 md:mb-10">
            <label htmlFor="message" className="block mb-2 text-lg">
              Your message:
            </label>
            <textarea
              name="message"
              value={Message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="w-full py-2 px-4 min-h-20   bg-transparent  border rounded-b-lg border-t-0  "
              placeholder="write your messaage..."
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-48  py-2 px-4 text-xl font-bold bg-transparent rounded-md hover:bg-transparent hover:border "
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
}

export default ContactUs;
