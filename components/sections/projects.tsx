import CropSense from "../projects/cropSense";
import ParseSpy from "../projects/parseSpy";
import Sentinel from "../projects/sentinel";

const Projects = () => {
  return (
    <section className="w-2/3 mt-10">
      <p className="text-lg text-white font-bold">Projects</p>
      <p className="text-sm text-gray-200 ">Things I have built</p>
      <div className="mt-7 flex gap-10 overflow-x-auto space-x-4 flex-nowrap scrollbar-hide ">
        <Sentinel />
        <ParseSpy />
        <CropSense />
      </div>
    </section>
  );
};

export default Projects;
