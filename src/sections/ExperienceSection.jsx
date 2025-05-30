import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceCard from "../components/ExperienceCard";
import experiences from "../constants/experiences";

gsap.registerPlugin(ScrollTrigger);


  

// Timeline component
const Timeline = ({ experiences, activeIndex, onSelect }) => {
  return (
    <div className="relative flex flex-col items-center w-16">
      {/* Vertical line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

      {experiences.map((exp, i) => (
        <div
          key={exp.id}
          onClick={() => onSelect(i)}
          className="relative flex flex-col items-center cursor-pointer mb-16 last:mb-0"
          style={{ zIndex: i === activeIndex ? 10 : 1 }}
        >
          {/* Dot */}
          <div
            className={`rounded-full w-6 h-6 border-2 border-gray-700 bg-gray-900 transition-colors duration-300 ${
              i === activeIndex ? "border-pink-500 bg-pink-600" : ""
            }`}
          ></div>

          {/* Icon centered below dot */}
          <div
            className={`mt-4 text-3xl bg-clip-text text-transparent bg-gradient-to-r ${exp.color} select-none`}
          >
            {exp.icon}
          </div>
        </div>
      ))}
    </div>
  );
};


export default function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef([]);

  // GSAP animation for cards on scroll
  useEffect(() => {
    if (!cardsRef.current.length) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(cardsRef.current, {
        interval: 0.1,
        batchMax: 3,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power2.out",
          }),
        onLeave: (batch) => gsap.to(batch, { autoAlpha: 0, y: 50, duration: 0.6 }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power2.out",
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, { autoAlpha: 0, y: 50, duration: 0.6 }),
        start: "top 80%",
        end: "bottom 20%",
      });
    });

    return () => ctx.revert();
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
          className="absolute w-1 h-1 bg-gradient-to-r from-pink-500 to-purple-100 rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>

    <section className="max-w-7xl mx-auto px-6 py-16 flex gap-12">
      {/* Timeline */}
      <aside className="w-16 sticky top-20 h-[calc(100vh-80px)]">
        <Timeline
          experiences={experiences}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />
      </aside>

      {/* Cards */}
      <div className="flex-1 space-y-12">
        {experiences.map((exp, i) => (
          <div
            key={exp.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className="opacity-0 translate-y-12"
          >
            <ExperienceCard
              experience={exp}
              isActive={i === activeIndex}
              index={i}
              onClick={setActiveIndex}
            />
          </div>
        ))}
      </div>
    </section>
  </div>
)}