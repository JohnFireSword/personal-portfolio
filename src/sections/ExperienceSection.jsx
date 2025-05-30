import React, { useState, useEffect } from "react";
import { experiences } from "../constants/experiences";
import GlowCard from "../components/GlowingCard";
import StatCards from "../components/StatCards";
import ExperienceCard from "../components/ExperienceCard";
import Timeline from "../components/HeroModels/timeline";


function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("experience");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      const visibleTop = Math.max(0, -rect.top);
      const visibleBottom = Math.min(elementHeight, windowHeight - rect.top);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      const progress = Math.min(
        1,
        Math.max(0, visibleHeight / (elementHeight * 0.5))
      );
      setScrollProgress(progress);

      // Update active experience based on scroll progress
      const newActiveIndex = Math.min(
        experiences.length - 1,
        Math.floor(progress * experiences.length)
      );
      setActiveExperience(newActiveIndex);

      // Set visibility
      setIsVisible(progress > 0.1);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", handleScroll);
          handleScroll(); // Initial call
        } else {
          window.removeEventListener("scroll", handleScroll);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("experience");
    if (element) observer.observe(element);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <img
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r from-pink-500 to-purple-100 rounded-full opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md relative">
            <span className="relative z-10">Experiences</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-100/20 rounded-md"></div>
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Timeline (Hidden on mobile) */}
          <div className="hidden lg:block">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h3 className="text-2xl font-bold text-white-50 mb-8 flex items-center gap-3">
                <span className="text-pink-500">🎯</span>
                Career Journey
              </h3>
              <Timeline
                experiences={experiences}
                activeIndex={activeExperience}
                scrollProgress={scrollProgress}
              />
            </div>
          </div>

          {/* Experience Cards */}
          <div className="lg:col-span-2 mb-32">
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <ExperienceCard
                    experience={experience}
                    index={index}
                    isActive={activeExperience === index}
                    onClick={setActiveExperience}
                  />
                </div>
              ))}
            </div>

            {/* Mobile Timeline Dots */}
            <div className="lg:hidden flex justify-center mt-8 gap-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExperience(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeExperience === index
                      ? "bg-pink-500 scale-125"
                      : "bg-gray-600 hover:bg-purple-100"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <StatCards />
    </div>
  );
}

export default ExperienceSection;
