import CropSense from "@/components/projects/cropSense";
import ParseSpy from "@/components/projects/parseSpy";
import Sentinel from "@/components/projects/sentinel";
import TheMuze from "@/components/projects/theMuze";
import WomenSafety from "@/components/projects/women-safety";
import Customtext from "@/components/ui/CustomText";

export default function Projectspage() {
  return (
    <div className=" w-2/3 ">
      <Customtext heading={true}>Projects</Customtext>
      <Customtext>Things I have built</Customtext>
      <div className="mt-7 flex flex-col gap-10  ">
        <Sentinel />
        <ParseSpy />
        <CropSense />
        <WomenSafety />
        <TheMuze />
      </div>
    </div>
  );
}
