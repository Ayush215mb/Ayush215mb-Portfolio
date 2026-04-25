import CropSense from "../projects/cropSense";
import ParseSpy from "../projects/parseSpy";
import Sentinel from "../projects/sentinel";
import Customtext from "../ui/CustomText";

const Projects = () => {
  return (
    <section className="w-2/3 mt-10">
      <div className="flex justify-between items-center">
        <div>
          <Customtext heading={true}>Projects</Customtext>
          <Customtext subHeading={true}>Things I have built</Customtext>
        </div>
        <div>
          <a href="/projects">
            {" "}
            <span className="text-xs md:text-sm text-white font-bold underline cursor-pointer">
              View all
            </span>{" "}
          </a>
        </div>
      </div>

      <div className="mt-7 flex flex-col  gap-10 ">
        <Sentinel />
        <ParseSpy />
        <CropSense />
      </div>
    </section>
  );
};

export default Projects;
