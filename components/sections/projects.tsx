import CropSense from "../projects/cropSense";
import ParseSpy from "../projects/parseSpy";
import Sentinel from "../projects/sentinel";
import Customtext from "../ui/CustomText";

const Projects = () => {
  return (
    <section className="w-2/3 mt-10">
      <Customtext heading={true}>Projects</Customtext>
      <Customtext>Things I have built</Customtext>
      <div className="mt-7 flex flex-col  gap-10 ">
        <Sentinel />
        <ParseSpy />
        <CropSense />
      </div>
    </section>
  );
};

export default Projects;
