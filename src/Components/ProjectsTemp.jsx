import React from "react";
import { CiShare1 } from "react-icons/ci";
const ProjectsTemp = ({ image, title, description, link }) => {
  return (
    <div className="relative h-64 w-64 overflow-hidden rounded-xl group">
      {/* Background Image */}
      <img
        src={image}
        alt="project background"
        className="object-cover w-full h-full opacity-100 transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-500 ease-in-out group-hover:bg-opacity-50">
        <div className="absolute inset-0  transition duration-500 ease-in-out group-hover:backdrop-blur-lg"></div>
      </div>
      {/* backdrop-blur-sm */}
      {/* Text and Link */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          <div className="flex gap-2 font-semibold items-center">
            Check Out <CiShare1 className="font-black text-lg " />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectsTemp;

{
  /* <div className={` `}>
<img src={imgsrc} alt={name} className=" rounded-3xl max-w-60" />
<h3>{name}</h3>
</div> */
}
