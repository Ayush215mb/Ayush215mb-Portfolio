import React from "react";

const ProjectsTemp = ({ name, imgsrc }) => {
  return (
    <div className={` `}>
      <img src={imgsrc} alt={name} className=" rounded-3xl max-w-60" />
      <h3>{name}</h3>
    </div>
  );
};

export default ProjectsTemp;
