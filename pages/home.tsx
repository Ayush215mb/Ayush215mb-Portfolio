import Hero from "@/components/sections/hero";
import TechStack from "@/components/sections/TechStack";

const Homepage = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-16">
      <Hero />
      <TechStack />
    </section>
  );
};

export default Homepage;
