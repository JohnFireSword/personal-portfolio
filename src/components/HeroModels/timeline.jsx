import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = ({ experiences, activeIndex }) => {
  const timelineRef = useRef(null);
  const progressLineRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const timeline = timelineRef.current;
    const progressLine = progressLineRef.current;
    const dots = dotsRef.current;

    if (!timeline || !progressLine) return;

    // Create timeline context
    const ctx = gsap.context(() => {
      // Animate progress line based on scroll
      gsap.fromTo(progressLine, 
        { 
          scaleY: 0,
          transformOrigin: "top center"
        },
        {
          scaleY: 1,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            onUpdate: (self) => {
              // Update glow intensity based on progress
              const progress = self.progress;
              gsap.set(progressLine, {
                filter: `drop-shadow(0 0 ${8 + progress * 12}px rgba(236, 72, 153, 0.6))`
              });
            }
          }
        }
      );

      // Animate dots with stagger and hover effects
      dots.forEach((dot, index) => {
        if (!dot) return;

        // Initial dot animation
        gsap.fromTo(dot,
          { 
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: dot,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Pulsing animation for active dot
        if (index === activeIndex) {
          gsap.to(dot.querySelector('.dot-inner'), {
            scale: 1.2,
            duration: 0.8,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1
          });
        }
      });

      // Period text animations
      gsap.utils.toArray('.period-text').forEach((text, index) => {
        gsap.fromTo(text,
          {
            x: -30,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: text,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, timeline);

    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <div 
      ref={timelineRef}
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block"
    >
      {/* Background Line */}
      <div className="absolute left-8 top-0 w-0.5 h-96 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 opacity-40 rounded-full"></div>
      
      {/* Animated Progress Line */}
      <div
        ref={progressLineRef}
        className="absolute left-8 top-0 w-0.5 h-96 bg-gradient-to-b from-pink-500 via-purple-400 to-blue-500 rounded-full shadow-lg"
        style={{ 
          filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.4))',
        }}
      />

      {/* Timeline Dots and Labels */}
      <div className="relative space-y-16 py-8">
        {experiences.map((experience, index) => {
          const isActive = activeIndex === index;
          const isPassed = index < activeIndex;
          
          return (
            <div 
              key={experience.id || index} 
              className="relative flex items-center group cursor-pointer"
              ref={el => dotsRef.current[index] = el}
            >
              {/* Dot Container */}
              <div className="relative">
                {/* Outer Ring */}
                <div 
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-500 ${
                    isActive 
                      ? 'border-pink-400 bg-pink-500/20 shadow-lg shadow-pink-500/30' 
                      : isPassed
                      ? 'border-blue-400 bg-blue-500/20'
                      : 'border-gray-600 bg-gray-800/50'
                  }`}
                >
                  {/* Inner Dot */}
                  <div 
                    className={`dot-inner absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-pink-500 shadow-lg shadow-pink-500/50' 
                        : isPassed
                        ? 'bg-blue-500 shadow-md shadow-blue-500/40'
                        : 'bg-gray-500'
                    }`}
                  />
                  
                  {/* Ripple Effect for Active */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full border-2 border-pink-400 animate-ping opacity-30"></div>
                  )}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </div>

              {/* Period Label */}
              <div 
                className={`period-text ml-6 px-3 py-1 rounded-md text-sm font-medium transition-all duration-500 whitespace-nowrap backdrop-blur-sm ${
                  isActive 
                    ? 'text-pink-200 bg-pink-500/10 border border-pink-500/30' 
                    : isPassed
                    ? 'text-blue-200 bg-blue-500/10 border border-blue-500/20'
                    : 'text-gray-400 bg-gray-800/30 border border-gray-700/30'
                } group-hover:scale-105`}
              >
                {experience.period}
              </div>

              {/* Company on Hover */}
              <div className={`absolute left-full ml-4 px-2 py-1 rounded text-xs font-medium bg-gray-900/90 border border-gray-700 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm ${
                isActive ? 'border-pink-500/30' : 'border-gray-700'
              }`}>
                {experience.company}
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Progress Indicator */}
      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
        <div className="w-2 h-16 bg-gradient-to-b from-transparent via-pink-500/30 to-transparent rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-4 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"></div>
      </div>
    </div>
  );
};

export default Timeline;