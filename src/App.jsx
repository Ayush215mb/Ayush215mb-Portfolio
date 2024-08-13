import Bio from "./Components/Bio";
import First from "./Components/First";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="mx-5  ">
      <header>
        <Navbar />
      </header>
      <main>
        <First />

        {/* <Projects /> */}
        <Bio />
        <Skills />
      </main>
      <Analytics />
    </div>
  );
}

export default App;
