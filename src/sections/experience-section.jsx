import React, { useState, useEffect } from 'react';
import { experiences } from '../constants/experiences';

const ExperienceCard = ({ experience, index, isActive, onClick }) => {
  return (
    <div 
      className={`relative cursor-pointer transform transition-all duration-500 hover:scale-105 ${
        isActive ? 'scale-105' : ''
      }`}
      onClick={() => onClick(index)}
    >
      {/* Floating Background Circle */}
      <div className={`absolute -inset-4 bg-gradient-to-r ${experience.color} rounded-full opacity-10 blur-xl transition-opacity duration-300 ${
        isActive ? 'opacity-20' : 'opacity-5'
      }`}></div>
      
      {/* Main Card */}
      <div className={`relative bg-black-100 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:border-pink-500/30 ${
        isActive ? 'border-pink-500/50 shadow-2xl shadow-pink-500/10' : ''
      }`}>
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`text-3xl bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
              {experience.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white-50">{experience.title}</h3>
              <p className="text-pink-500 font-medium">{experience.company}</p>
            </div>
          </div>
          <span className="text-blue-50 text-sm bg-black-200 px-3 py-1 rounded-full">
            {experience.period}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {experience.technologies.map((tech, i) => (
            <span 
              key={i}
              className="text-xs bg-gradient-to-r from-blue-150/20 to-purple-100/20 text-blue-50 px-3 py-1 rounded-full border border-blue-150/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable Achievements */}
        <div className={`transition-all duration-300 overflow-hidden ${
          isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 border-t border-gray-700">
            <h4 className="text-pink-500 font-semibold mb-2 flex items-center gap-2">
              ✨ Key Achievements
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color}`}></div>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Location Badge */}
        <div className="absolute top-4 right-4">
          <div className="text-xs text-gray-400 bg-black-200/50 px-2 py-1 rounded">
            📍 {experience.location}
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline = ({ experiences, activeIndex, scrollProgress }) => {
  return (
    <div className="relative">
      {/* Background Vertical Line */}
      <div className="absolute left-8 top-0 w-0.5 h-full bg-gray-700 opacity-30"></div>
      
      {/* Animated Progress Line */}
      <div 
        className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-100 to-blue-150 transition-all duration-300 ease-out"
        style={{ height: `${scrollProgress * 100}%` }}
      ></div>
      
      {/* Timeline Dots */}
      <div className="space-y-8">
        {experiences.map((_, index) => {
          const dotProgress = (index + 1) / experiences.length;
          const isReached = scrollProgress >= dotProgress;
          
          return (
            <div key={index} className="relative flex items-center">
              <div className={`absolute left-6 w-4 h-4 rounded-full transition-all duration-500 ${
                isReached
                  ? 'bg-pink-500 shadow-lg shadow-pink-500/50 scale-125' 
                  : 'bg-gray-600'
              } ${activeIndex === index ? 'ring-2 ring-pink-500/50 ring-offset-2 ring-offset-black-100' : ''}`}>
                {isReached && (
                  <div className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-75"></div>
                )}
              </div>
              <div className={`ml-16 font-medium transition-all duration-500 ${
                isReached ? 'text-blue-50' : 'text-gray-500'
              }`}>
                {experiences[index].period}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('experience');
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
   
      const visibleTop = Math.max(0, -rect.top);
      const visibleBottom = Math.min(elementHeight, windowHeight - rect.top);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      
 
      const progress = Math.min(1, Math.max(0, visibleHeight / (elementHeight * 0.5)));
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
          window.addEventListener('scroll', handleScroll);
          handleScroll(); // Initial call
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
              animationDuration: `${2 + Math.random() * 3}s`
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
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="text-2xl font-bold text-white-50 mb-8 flex items-center gap-3">
                <span className="text-pink-500">🎯</span>
                Career Journey
              </h3>
              <Timeline experiences={experiences} activeIndex={activeExperience} scrollProgress={scrollProgress} />
            </div>
          </div>

          {/* Experience Cards */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`transition-all duration-700 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
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
                      ? 'bg-pink-500 scale-125' 
                      : 'bg-gray-600 hover:bg-purple-100'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "4+", label: "Years Experience", icon: "⭐" },
            { value: "50+", label: "Projects Built", icon: "🚀" },
            { value: "15+", label: "Technologies", icon: "💻" },
            { value: "100%", label: "Client Satisfaction", icon: "❤️" }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-4 bg-black-100/50 rounded-xl border border-gray-700 hover:border-pink-500/30 transition-all duration-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100 + 800}ms` }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-pink-500">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;