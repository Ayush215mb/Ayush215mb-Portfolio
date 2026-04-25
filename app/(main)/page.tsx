import ContactUs from "@/components/sections/contactUs";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-16 mx-10">
      <Hero />
      <TechStack />
      <Projects />
      <ContactUs />
    </div>
  );
}
