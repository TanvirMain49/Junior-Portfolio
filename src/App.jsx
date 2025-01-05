import AboutMe from "./Component/AboutMe";
import Contact from "./Component/Contact";
import Education from "./Component/Eduction";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Project from "./Component/Project";
import Skill from "./Component/Skill";

function App() {

  return <div className="poppins">
    <Navbar></Navbar>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Skill></Skill>
    <Project></Project>
    <Education></Education>
    <Contact></Contact>
  </div>;
}

export default App;
