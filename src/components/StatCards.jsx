import React, { useRef } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function StatCards() {
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  useGSAP(() => {
    // Container animation
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=50",
        },
      }
    );

    // Staggered card animations
    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            y: 40,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=80",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full py-16 px-4 sm:px-6 lg:px-8"
      aria-label="Statistics"
    >
      <div className="padding-x-lg xl:mt-0 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16">
          {counterItems.map((item, index) => (
            <div
              key={`stat-${index}-${item.label}`}
              ref={(card) => (cardRefs.current[index] = card)}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black-100 to-black-200 border border-black-50/10 hover:border-pink-100/20 transition-all duration-300 hover:shadow-lg hover:shadow-pink-100/5"
              role="article"
              aria-labelledby={`stat-label-${index}`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/5 to-purple-100/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative p-8 flex flex-col items-center text-center space-y-8">
                {/* Icon */}

                <div className="text-3xl">{item.icon}</div>

                {/* Counter */}
                <div className="space-y-1">
                  <div
                    className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white-50 to-blue-50 bg-clip-text text-transparent"
                    aria-live="polite"
                  >
                    <CountUp
                      end={item.value}
                      suffix={item.suffix}
                      duration={5}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>

                  {/* Label */}
                  <h3
                    id={`stat-label-${index}`}
                    className="text-sm sm:text-base font-medium text-blue-50 group-hover:text-white-50 transition-colors duration-300"
                  >
                    {item.label}
                  </h3>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-100 to-purple-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatCards;
