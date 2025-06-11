import { projects, projectCategories } from "../constants/projects";
import TitleHeader from "../components/TitleHeader";
import PhoneMockup from "../mockups/PhoneMockup";
import DesktopMockup from "../mockups/DesktopMockup";
import ProjectInfoPanel from "../components/ProjectInfoPanel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useState, useEffect, useRef } from "react";
import NavigationArrow from "../components/NavArrow";
import PhoneMockupVideo from "../mockups/PhoneMockupVideo";

gsap.registerPlugin(ScrollTrigger, SplitText);

function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const titleRef = useRef(null);
  const splitTextInstance = useRef(null);
  const projectContentRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;

    // Create SplitText instance targeting the title element
    splitTextInstance.current = new SplitText(titleRef.current, {
      type: "words,chars",
    });

    const chars = splitTextInstance.current.chars;

    gsap.from(chars, {
      autoAlpha: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });

    return () => {
      if (splitTextInstance.current) {
        splitTextInstance.current.revert();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("work");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Reset active project when category changes
  useEffect(() => {
    setActiveProject(0);
  }, [activeCategory]);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const currentProject = filteredProjects[activeProject];

  // Navigation functions with smooth transitions
  const navigateProject = (direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Animate out current content
    gsap.to(projectContentRef.current, {
      opacity: 0,
      x: direction === "next" ? -50 : 50,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        // Update project index
        if (direction === "next") {
          setActiveProject((prev) =>
            prev < filteredProjects.length - 1 ? prev + 1 : 0
          );
        } else {
          setActiveProject((prev) =>
            prev > 0 ? prev - 1 : filteredProjects.length - 1
          );
        }

        // Animate in new content
        gsap.fromTo(
          projectContentRef.current,
          {
            opacity: 0,
            x: direction === "next" ? 50 : -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => setIsTransitioning(false),
          }
        );
      },
    });
  };

  const handlePrevious = () => navigateProject("prev");
  const handleNext = () => navigateProject("next");

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [filteredProjects.length]);

  return (
    <div
      id="work"
      className="relative z-50 border-t mt-12 my-12 lg:my-24 border-[#25213b]">
      <img
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Floating Elements - Reduced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 2}s infinite`,
            }}></div>
        ))}
      </div>

      <TitleHeader
        ref={titleRef}
        className="title-header-title"
        title="Recent Projects"
        sub="My Projects 📽️"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer px-6 py-3 rounded-xl border border-slate-500 text-white font-medium group transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-pink-500 text-white shadow-lg shadow-pink-500/25"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }
              `}>
              <div className="relative overflow-hidden h-6">
                <span className="block group-hover:-translate-y-6 transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  {category}
                </span>
                <span className="absolute top-6 left-0 right-0 text-center group-hover:top-0 transition-all duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  {category}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Main Project Display with Navigation */}
        {currentProject && (
          <div className="relative">
            {/* Navigation Arrows */}
            {/* Navigation Arrows */}
            <div className="absolute -left-2 md:-left-4 md:top-1/2 top-1/5 -translate-y-1/2 z-10">
              <NavigationArrow
                direction="left"
                onClick={handlePrevious}
                disabled={filteredProjects.length <= 1}
              />
            </div>

            <div className="absolute -right-2 md:-right-4 md:top-1/2 top-1/5 -translate-y-1/2 z-10">
              <NavigationArrow
                direction="right"
                onClick={handleNext}
                disabled={filteredProjects.length <= 1}
              />
            </div>

            {/* Project Content */}
            <div
              ref={projectContentRef}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center px-4 md:px-8">
              {/* Device Mockups */}
              <div
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}>
                {currentProject.displayType === "mobile" && (
                  <div className="flex justify-center">
                    <PhoneMockupVideo
                      project={currentProject}
                      isActive={true}
                    />
                  </div>
                )}

                {currentProject.displayType === "desktop" && (
                  <div className="flex justify-center">
                    <DesktopMockup project={currentProject} isActive={true} />
                  </div>
                )}
                {currentProject.displayType === "both" && (
                  <div className="flex items-center justify-center gap-8">
                    <DesktopMockup project={currentProject} isActive={true} />
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div
                className={`transition-all duration-1000 w-full lg:mr-10  px-2 sm:px-4 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}>
                <ProjectInfoPanel project={currentProject} />
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Project Navigation Indicators */}
        <div className="flex justify-center items-center mt-12 gap-6">
          {/* Project Counter */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>{activeProject + 1}</span>
            <span>/</span>
            <span>{filteredProjects.length}</span>
          </div>

          {/* Dot Indicators */}
          <div className="flex gap-3">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === index
                    ? "bg-pink-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}>
                {activeProject === index && (
                  <div className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-25"></div>
                )}
              </button>
            ))}
          </div>

          {/* Keyboard Hint */}
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
            <span>Use</span>
            <kbd className="px-2 py-1 bg-gray-800 rounded border border-gray-600">
              ←
            </kbd>
            <kbd className="px-2 py-1 bg-gray-800 rounded border border-gray-600">
              →
            </kbd>
            <kbd></kbd>
            <span>keys</span>
          </div>
        </div>

        {/* Project Grid Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            All Projects Overview
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`cursor-pointer bg-black-100 border border-gray-700 rounded-xl p-4 transition-all duration-300 hover:border-pink-500/50 hover:scale-105 ${
                  activeProject === index
                    ? "border-pink-500/50 shadow-lg shadow-pink-500/10 ring-2 ring-pink-500/20"
                    : ""
                }`}>
                <div
                  className={`w-full h-32 bg-gradient-to-r ${project.color} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-white font-bold z-10">
                    {project.title}
                  </span>
                  {activeProject === index && (
                    <div className="absolute inset-0 bg-pink-500/20 animate-pulse"></div>
                  )}
                </div>
                <h4 className="text-white font-semibold mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <span
                    className="text-xs px-2 py-1 rounded text-white"
                    style={{ backgroundColor: project.accent }}>
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
