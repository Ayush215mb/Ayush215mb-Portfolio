import { langauges } from "@/components/tech-stack/languages";
import TechBox from "../ui/TechBox";
import { Frontend } from "@/components/tech-stack/frontend";
import { Backend } from "@/components/tech-stack/backend";
import { DatabaseAndTools } from "@/components/tech-stack/dbandtools";
import Customtext from "../ui/CustomText";

const TechStack = () => {
  return (
    <section className="w-2/3 mt-10">
      <Customtext heading={true}>Tech Stack</Customtext>
      <Customtext>Technologies I work with</Customtext>

      <div className="flex flex-wrap gap-y-7 gap-x-5 mt-7 ">
        <TechBox heading="Languages" Techs={langauges} />
        <TechBox heading="Frontend" Techs={Frontend} />
        <TechBox heading="Bakcend" Techs={Backend} />
        <TechBox heading="Database and Tools" Techs={DatabaseAndTools} />
      </div>
    </section>
  );
};

export default TechStack;
