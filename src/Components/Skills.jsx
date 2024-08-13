import React from "react";
import html from "../assets/Images/html-1.svg";
import SkillsTemp from "./SkillsTemp";
const Skills = () => {
  return (
    <div className="my-10  md:px-52 ">
      <h2 className="text-3xl  md:text-4xl mb-8 font-bold text-center">
        Skills
      </h2>
      <div className="border-2 rounded-3xl border-gray-700 md:px-10 overflow-hidden w-full ">
        <SkillsTemp name="HTML" image={html} year="2 years" />
        <SkillsTemp
          name="CSS"
          image="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
          year="2 years"
        />

        <SkillsTemp
          name="Java Script"
          image="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          year="2 years"
        />

        <SkillsTemp
          name="React.js"
          image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          year="1.5 years"
        />

        <SkillsTemp
          name="Firebase"
          image="https://upload.wikimedia.org/wikipedia/commons/8/85/Firebase.svg"
          year="1.5 year"
        />

        <SkillsTemp
          name="React Native"
          image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          year="learning"
        />

        <SkillsTemp
          name="C++"
          image="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
          year="learning"
        />
      </div>
    </div>
  );
};

export default Skills;

//source of all logos
// https://commons.wikimedia.org/wiki/Main_Page
