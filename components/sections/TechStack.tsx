import { langauges } from "@/components/ui/languages";
import TechBox from "../ui/TechBox";
import { Frontend } from "../ui/frontend";
import { Backend } from "../ui/backend";
import { DatabaseAndTools } from "../ui/dbandtools";

const TechStack = () => {
  return (
    <div className="w-2/3">
      <p className="text-lg font-bold text-white">Tech Stack</p>
      <p className="text-sm text-gray-200">Technologies I work with</p>

      <div className="flex flex-wrap gap-7 mt-10 ">
        <TechBox heading="Languages" Techs={langauges} />
        <TechBox heading="Frontend" Techs={Frontend} />
        <TechBox heading="Bakcend" Techs={Backend} />
        <TechBox heading="Database and Tools" Techs={DatabaseAndTools} />
      </div>
    </div>
  );
};

export default TechStack;
