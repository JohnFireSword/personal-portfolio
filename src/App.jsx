import LogoSection from "./sections/LogoSection";
import Navbar from "./components/Navbar";
import ExperienceSection from "./sections/ExperienceSection";
import Hero from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import FeaturedTraitsCards from "./sections/FeaturesSection";
import ContactSection from "./sections/ContactSection";
import PortfolioFooter from "./sections/FooterSection";
import BackToTop from "./components/BackToTopButton";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <LogoSection />
      <FeaturedTraitsCards />
      <ContactSection />
      <PortfolioFooter />
      <BackToTop />
    </>
  );
};

export default App;
