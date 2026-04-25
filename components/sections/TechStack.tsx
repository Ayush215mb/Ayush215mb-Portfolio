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
      <Customtext subHeading={true}>Technologies I work with</Customtext>

      <div className="flex flex-wrap gap-y-7 gap-x-5 mt-7 ">
        <TechBox heading="Languages" Techs={langauges} delay={0.2} />
        <TechBox heading="Frontend" Techs={Frontend} delay={0.4} />
        <TechBox heading="Backend" Techs={Backend} delay={0.5} />
        <TechBox
          heading="Database and Tools"
          Techs={DatabaseAndTools}
          delay={0.6}
        />
      </div>
    </section>
  );
};

export default TechStack;
