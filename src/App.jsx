import LogoSection from "./components/LogoSection";
import Navbar from "./components/Navbar";
import ExperienceSection from "./sections/experience-section";
import Hero from "./sections/hero-section";
import ProjectsSection from "./sections/projects-section";

const App = () => {
  return (
    <>
    <Navbar/>
      <Hero />
      <ExperienceSection/>
      <ProjectsSection/>
      <LogoSection/>
    </>
    
  );
};

export default App;
