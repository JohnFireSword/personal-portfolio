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

gsap.registerPlugin(ScrollTrigger, SplitText);

function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [isVisible, setIsVisible] = useState(false);

  const titleRef = useRef(null);
  const splitTextInstance = useRef(null);

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

    const element = document.getElementById("projects");
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

  return (
    <div
      id="projects"
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
        title="Project Showcase"
        sub="My Projects 📽️"
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-pink-500 text-white shadow-lg shadow-pink-500/25"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}>
              {category}
            </button>
          ))}
        </div>

        {currentProject && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Device Mockups */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}>
              {currentProject.displayType === "mobile" && (
                <div className="flex justify-center">
                  <PhoneMockup project={currentProject} isActive={true} />
                </div>
              )}

              {currentProject.displayType === "desktop" && (
                <div className="flex justify-center">
                  <DesktopMockup project={currentProject} isActive={true} />
                </div>
              )}

              {currentProject.displayType === "both" && (
                <div className="flex items-center justify-center gap-8">
                  <PhoneMockup project={currentProject} isActive={true} />
                  <DesktopMockup project={currentProject} isActive={true} />
                </div>
              )}
            </div>

            {/* Project Info */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}>
              <ProjectInfoPanel project={currentProject} />
            </div>
          </div>
        )}

        {/* Project Navigation */}
        <div className="flex justify-center mt-12 gap-3">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeProject === index
                  ? "bg-pink-500 scale-125 shadow-lg shadow-pink-500/50"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Project Grid Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            All Projects Overview
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`cursor-pointer bg-black-100 border border-gray-700 rounded-xl p-4 transition-all duration-300 hover:border-pink-500/50 hover:scale-105 ${
                  activeProject === index
                    ? "border-pink-500/50 shadow-lg shadow-pink-500/10"
                    : ""
                }`}>
                <div
                  className={`w-full h-32 bg-gradient-to-r ${project.color} rounded-lg mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold">{project.title}</span>
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
                    className={`text-xs px-2 py-1 rounded text-white`}
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
