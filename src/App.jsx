import LogoSection from "./sections/LogoSection";
import Navbar from "./components/Navbar";
import ExperienceSection from "./sections/ExperienceSection";
import Hero from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import FeaturedTraitsCards from "./sections/FeaturesSection";

const App = () => {
  return (
    <>
    <Navbar/>
      <Hero />
      <ExperienceSection/>
      <ProjectsSection/>
      <LogoSection/>
      <FeaturedTraitsCards/>
    </>
    
  );
};

export default App;
