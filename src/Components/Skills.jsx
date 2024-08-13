import React from "react";
import html from "../assets/Images/html-1.svg";
const Skills = () => {
  return (
    <div className="my-10 px-40">
      <h2 className="text-3xl  md:text-4xl mb-8 font-bold text-center">
        Skills
      </h2>
      <div className="border-2 rounded-3xl border-gray-800 px-10 overflow-hidden">
        <div className="flex text-xl border-b   md:justify-between  p-4 border-gray-800 items-center">
          <div className="flex gap-2 items-center">
            <img src={html} alt="react_logo" className="md:max-w-10 max-w-8" />
            <p>HTML</p>
          </div>

          <p>1.5 Years</p>
        </div>

        <div className="flex text-xl border-b justify-between  p-4 border-gray-800 items-center">
          <div className="flex gap-2 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
              alt="react_logo"
              className="md:max-w-10 max-w-8"
            />
            <p>CSS</p>
          </div>

          <p>1.5 Years</p>
        </div>

        <div className="flex text-xl border-b justify-between  p-4 border-gray-800 items-center">
          <div className="flex gap-2 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
              alt="react_logo"
              className="md:max-w-10 max-w-8"
            />
            <p className="text-nowrap">Java Script</p>
          </div>

          <p>1.5 Years</p>
        </div>

        <div className="flex text-xl border-b justify-between  p-4 border-gray-800 items-center">
          <div className="flex gap-2 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="react_logo"
              className="md:max-w-10 max-w-8"
            />
            <p className="text-nowrap">React.js</p>
          </div>

          <p>1 Years</p>
        </div>

        <div className="flex text-xl border-b justify-between  p-4 border-gray-800 items-center">
          <div className="flex gap-2 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/85/Firebase.svg"
              alt="react_logo"
              className="md:max-w-10 max-w-8"
            />
            <p className="text-nowrap">Firebase</p>
          </div>

          <p>1 Year</p>
        </div>

        <div className="flex text-xl border-b justify-between  p-4 border-gray-800 items-center">
          <div className="flex gap-2 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="react_logo"
              className="md:max-w-10 max-w-8"
            />
            <p className="text-nowrap">React Native</p>
          </div>

          <p>learning</p>
        </div>

        <div className="flex text-xl border-b justify-between  p-4 border-gray-800 items-center">
          <div className="flex gap-4 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
              alt="react_logo"
              className="md:max-w-10 max-w-8"
            />
            <p className="text-nowrap">C++</p>
          </div>

          <p>learning</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

//source of all logos
// https://commons.wikimedia.org/wiki/Main_Page
