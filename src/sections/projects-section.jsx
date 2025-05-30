import React, { useState, useEffect } from "react";
import { projects, projectCategories } from "../constants/projects";

const PhoneMockup = React.memo(({ project, isActive }) => {
  return (
    <div
      className={`relative will-change-transform transition-all duration-700 ${
        isActive ? "scale-105" : "scale-95 opacity-70"
      }`}>
      {/* iPhone Frame with Enhanced Realism */}
      <div className="relative mx-auto w-72 h-[580px]">
        {/* Enhanced Glow Effect */}
        {isActive && (
          <div
            className={`absolute -inset-8 bg-gradient-to-r ${project.color} opacity-20 blur-2xl rounded-full pointer-events-none animate-pulse `}></div>
        )}

        {/* Outer Frame with Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-[3.5rem] shadow-2xl border-4 border-gray-600 ">
          {/* Inner Frame with Realistic Bezels */}
          <div className="absolute inset-1 bg-gradient-to-b from-gray-800 to-black rounded-[3rem] shadow-inner">
            {/* Screen with OLED-like Deep Black */}
            <div className="absolute top-3 left-3 right-3 bottom-3 bg-black rounded-[2.8rem] overflow-hidden shadow-inner border border-gray-900">
              {/* Dynamic Island (Modern iPhone Style) */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20 border border-gray-700 shadow-lg">
                <div className="absolute inset-0.5 bg-gradient-to-b from-gray-900 to-black rounded-full">
                  {/* Camera and Sensors */}
                  <div className="flex items-center justify-center h-full gap-2">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <div className="w-1 h-1 bg-blue-500 rounded-full opacity-60"></div>
                    <div className="w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Screen Content - App Screenshot Display */}
              <div className="relative h-full bg-black">
                {/* Enhanced Status Bar */}
                <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center text-white text-xs p-4 pt-6 bg-gradient-to-b from-black/80 to-transparent">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">
                      {new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {/* Battery */}
                    <div className="w-6 h-3 border border-white rounded-sm relative ml-1">
                      <div className="absolute right-0 top-0.5 w-4 h-2 bg-green-500 rounded-l-sm"></div>
                      <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-white rounded-r-sm"></div>
                    </div>
                  </div>
                </div>

                {/* App Screenshot Container */}
                <div className="absolute inset-0 pt-12 pb-6">
                  {project.screenshot ? (
                    /* Display actual app screenshot */
                    <img
                      src={project.screenshot}
                      alt={`${project.title} app screenshot`}
                      className="w-full h-full object-cover object-top"
                      style={{
                        objectFit: "cover",
                        objectPosition: "top center",
                      }}
                    />
                  ) : (
                    /* Fallback - Enhanced Mock App Interface */
                    <div className="h-full p-4">
                      {/* App Header with Project Branding */}
                      <div
                        className={`relative w-full h-44 bg-gradient-to-br ${project.color} rounded-3xl mb-4 overflow-hidden shadow-xl`}>
                        {/* Glassmorphism overlay */}
                        <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm"></div>

                        {/* Floating elements for depth */}
                        <div className="absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-20 rounded-full blur-xl"></div>
                        <div className="absolute bottom-6 left-6 w-8 h-8 bg-white bg-opacity-15 rounded-full blur-lg"></div>

                        {/* App Title */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                          <div className="w-12 h-12 bg-white bg-opacity-25 rounded-2xl mb-3 flex items-center justify-center backdrop-blur-sm shadow-lg">
                            <span className="text-white text-lg font-bold">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                          <span className="text-white font-bold text-lg drop-shadow-lg">
                            {project.title}
                          </span>
                          <span className="text-white text-xs opacity-80 mt-1">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Preview */}
                      <div className="space-y-4">
                        <div className="bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-2xl p-4 border border-gray-800 shadow-lg">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-white font-semibold text-sm">
                                {project.category}
                              </h3>
                              <p className="text-gray-400 text-xs mt-1">
                                Live Preview
                              </p>
                            </div>
                            <span className="px-3 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                              {project.status}
                            </span>
                          </div>

                          <p className="text-gray-300 text-xs leading-relaxed line-clamp-2 mb-4">
                            {project.description}
                          </p>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <button className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl text-xs font-semibold text-white shadow-lg">
                              View Live Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white opacity-60 rounded-full z-20"></div>
              </div>
            </div>
          </div>

          {/* Physical Button Details */}
          <div className="absolute left-0 top-20 w-1 h-8 bg-gray-600 rounded-r-full shadow-inner"></div>
          <div className="absolute left-0 top-32 w-1 h-12 bg-gray-600 rounded-r-full shadow-inner"></div>
          <div className="absolute left-0 top-48 w-1 h-12 bg-gray-600 rounded-r-full shadow-inner"></div>
          <div className="absolute right-0 top-28 w-1 h-16 bg-gray-600 rounded-l-full shadow-inner"></div>
        </div>

        {/* Enhanced Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-10 rounded-[3.5rem] pointer-events-none"></div>

        {/* Screen Reflection */}
        <div className="absolute top-6 left-6 right-6 h-32 bg-gradient-to-b from-white to-transparent opacity-5 rounded-t-[2.5rem] pointer-events-none"></div>

        {/* Ambient Lighting Effect */}
        {isActive && (
          <>
            <div
              className={`absolute -inset-2 bg-gradient-to-r ${project.color} opacity-5 blur-xl rounded-[4rem] pointer-events-none`}></div>
            <div className="absolute inset-0 shadow-2xl shadow-black/50 rounded-[3.5rem] pointer-events-none"></div>
          </>
        )}
      </div>
    </div>
  );
});

// MacBook/Monitor Mockup Component
const DesktopMockup = React.memo(({ project, isActive }) => {
  return (
    <div
      className={`relative will-change-transform transition-transform duration-500 ${
        isActive ? "scale-105" : "scale-95 opacity-70"
      }`}>
      {/* MacBook Frame */}
      <div className="relative mx-auto w-96 h-64">
        {/* Screen */}
        <div className="relative w-full h-48 bg-gray-900 rounded-t-lg overflow-hidden shadow-xl border border-gray-700">
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 border-b border-gray-700">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300 ml-4 truncate">
              {project.demoUrl}
            </div>
          </div>

          {/* Website Content */}
          <div className="h-full bg-gray-900 p-4">
            {/* Header */}
            <div
              className={`w-full h-12 bg-gradient-to-r ${project.color} rounded-lg mb-3 flex items-center justify-center`}>
              <span className="text-white font-bold text-sm">
                {project.title}
              </span>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="h-8 bg-gray-800 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-700 rounded"></div>
              <div className="h-8 bg-gray-800 rounded animate-pulse"></div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="h-2 bg-gray-700 rounded w-full"></div>
                <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                <div className="h-2 bg-gray-700 rounded w-1/2"></div>
              </div>
              <div
                className={`h-16 bg-gradient-to-r ${project.color} opacity-30 rounded-lg`}></div>
            </div>
          </div>
        </div>

        {/* MacBook Base */}
        <div className="w-full h-4 bg-gray-700 rounded-b-2xl shadow-lg border-t border-gray-600">
          <div className="w-16 h-1 bg-gray-600 rounded-full mx-auto translate-y-1.5"></div>
        </div>

        {/* Optimized Glow Effect */}
        {isActive && (
          <div
            className={`absolute -inset-6 bg-gradient-to-r ${project.color} opacity-10 blur-lg rounded-lg pointer-events-none`}></div>
        )}
      </div>
    </div>
  );
});

// Project Info Panel
const ProjectInfoPanel = React.memo(({ project }) => {
  return (
    <div className="bg-black-100 border border-gray-700 rounded-2xl ml-6 p-6 h-full">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <span className="px-3 py-1 rounded-full text-sm font-medium text-white bg-blue-600">
            {project.category}
          </span>
        </div>
        <div className="flex gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
            <span className="text-blue-400">🔗</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
            <span className="text-white">💻</span>
          </a>
        </div>
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed">
        {project.longDescription}
      </p>

      {/* Technologies */}
      <div className="mb-6">
        <h4 className="text-pink-500 font-semibold mb-3">🛠️ Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h4 className="text-pink-500 font-semibold mb-3">✨ Key Features</h4>
        <ul className="space-y-2">
          {project.features.map((feature, i) => (
            <li key={i} className="text-gray-300 flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`}></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [isVisible, setIsVisible] = useState(false);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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

  const currentProject = filteredProjects[activeProject];

  return (
    <div
      id="projects"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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

      {/* Section Header */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md relative">
            <span className="relative z-10">My Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-100/20 rounded-md"></div>
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

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
