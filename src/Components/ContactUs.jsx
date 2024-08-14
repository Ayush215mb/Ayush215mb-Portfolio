import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../Variants";

function ContactUs() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    option: "",
    budget: "",
    message: "",
  });

  const handleOptionClick = (option, field) => {
    setFormData({
      ...formData,
      [field]: option,
    });
    setSelectedOption(option);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, option, budget, message } = formData;

    const subject = `Hello there, I am ${name}`;
    const body = `${message}`;
    const mailtoLink = `mailto:sidharth197502@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}&cc=ayush215mb@gmail.com`;

    window.location.href = mailtoLink;
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-2 px-4  bg-transparent border-b "
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-5 md:mb-10">
            <label className="block mb-2 text-lg">Your email </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              id="message"
              name="message"
              value={formData.brief}
              onChange={handleChange}
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
