import Bio from "./Components/Bio";
import ContactUs from "./Components/ContactUs";
import First from "./Components/First";
import Footer from "./Components/Footer";
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

        <Projects />
        <Bio />
        <Skills />
        <ContactUs />
      </main>
      <footer>
        <Footer />
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
