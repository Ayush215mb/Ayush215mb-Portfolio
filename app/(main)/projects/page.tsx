import CropSense from "@/components/projects/cropSense";
import ParseSpy from "@/components/projects/parseSpy";
import Sentinel from "@/components/projects/sentinel";
import TheMuze from "@/components/projects/theMuze";
import WomenSafety from "@/components/projects/women-safety";
import Customtext from "@/components/ui/CustomText";

export const metadata = {
  title: "Projects",
  description:
    "Full-stack projects by Ayush Yadav — including an AI governance proxy, a digital forensics tool, and a patented IoT farming platform.",
  openGraph: {
    title: "Projects | Ayush Yadav",
    description: "Full-stack projects by Ayush Yadav...",
    url: "https://www.glevoidd.in/projects",
  },
};

export default function Projectspage() {
  return (
    <div className=" md:w-2/3 w-full ">
      <div className="mx-10">
        <Customtext heading={true}>Projects</Customtext>
        <Customtext>Things I have built</Customtext>
      </div>

      <div className="mt-7 flex flex-col gap-10  mx-10 ">
        <Sentinel />
        <ParseSpy />
        <CropSense />
        <TheMuze />
        {/* <WomenSafety /> */}
      </div>
    </div>
  );
}
