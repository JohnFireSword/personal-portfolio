import React, { useRef, useState, useCallback, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Code,
  Palette,
  Zap,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Heart,
} from "lucide-react";
import { traits } from "../constants/traits";
import TraitCard from "../components/HeroModels/TraitCards";

gsap.registerPlugin(ScrollTrigger);

function FeaturedTraitsCards() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Memoized hover handlers
  const handleMouseEnter = useCallback((traitId) => {
    setHoveredCard(traitId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  // Memoize traits to prevent unnecessary re-renders
  const memoizedTraits = useMemo(() => traits, []);

  // GSAP animations
  useGSAP(() => {
    // Simplified title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          once: true, // Only animate once for better performance
        },
      }
    );

    // Simplified cards animation with better performance
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 40,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.08, // Reduced delay for faster overall animation
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=50",
              once: true, // Only animate once
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      ref={containerRef} id="featured"
      className="w-full py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Simplified background with reduced blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-100 via-black-200 to-black-100 opacity-50" />

      {/* Reduced complexity floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-100/3 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100/3 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-pink-100 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-50 uppercase tracking-wider">
              What Makes Me Unique
            </span>
            <div className="w-2 h-2 bg-purple-100 rounded-full animate-pulse delay-500" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white-50 via-pink-100 to-purple-100 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="text-blue-50">Traits</span>
          </h2>

          <p className="text-lg text-blue-50/80 max-w-2xl mx-auto leading-relaxed">
            Discover the core qualities that drive my passion for creating
            exceptional digital experiences and meaningful solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {memoizedTraits.map((trait, index) => (
            <div key={trait.id} ref={(el) => (cardsRef.current[index] = el)}>
              <TraitCard
                trait={trait}
                index={index}
                onMouseEnter={() => handleMouseEnter(trait.id)}
                onMouseLeave={handleMouseLeave}
                isHovered={hoveredCard === trait.id}
              />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-100/10 to-purple-100/10 border border-pink-100/20 hover:border-pink-100/40 transition-all duration-200 group cursor-pointer">
            <Heart className="w-5 h-5 text-pink-100 group-hover:scale-105 transition-transform duration-200" />
            <span className="text-white-50 font-medium">
              Let's Create Something Amazing Together
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTraitsCards;
