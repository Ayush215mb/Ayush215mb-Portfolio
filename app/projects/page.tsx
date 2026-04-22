import CropSense from "@/components/projects/cropSense";
import ParseSpy from "@/components/projects/parseSpy";
import Sentinel from "@/components/projects/sentinel";
import Projects from "@/components/sections/projects";

export default function Projectspage() {
  return (
    <div className=" w-2/3">
      <div className="mt-7 flex flex-col  gap-10 ">
        <Sentinel />
        <ParseSpy />
        <CropSense />
      </div>
    </div>
  );
}
