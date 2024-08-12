import First from "./Components/First";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="mx-5  ">
      <header>
        <Navbar />
      </header>
      <main>
        <First />

        <Projects />
      </main>
    </div>
  );
}

export default App;
