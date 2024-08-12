import React from "react";
import project1 from "../assets/Images/project1.jpeg";
import ProjectsTemp from "./ProjectsTemp";
const Projects = () => {
  return (
    <div className="p-20">
      <h2 className="lg:text-4xl text-3xl mb-8 text-center font-semibold">
        Projects
      </h2>
      <ProjectsTemp name="" imgsrc={project1} />
    </div>
  );
};

export default Projects;
