import React, { useRef, useState } from "react";
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
  Heart 
} from "lucide-react";
import { traits } from "../constants/traits";

gsap.registerPlugin(ScrollTrigger);

// Icon mapping object
const iconMap = {
  Lightbulb: Lightbulb,
  Code: Code,
  Palette: Palette,
  Zap: Zap,
  Users: Users,
  Target: Target,
};

function FeaturedTraitsCards() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useGSAP(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
        },
      }
    );

    // Cards staggered animation
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            y: 60,
            scale: 0.9,
            rotateX: 15
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=50",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-100 via-black-200 to-black-100 opacity-50" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-100/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
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
          {traits.map((trait, index) => (
            <div
              key={trait.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`group relative ${
                trait.featured 
                  ? 'lg:col-span-1 lg:row-span-1' 
                  : ''
              }`}
              onMouseEnter={() => setHoveredCard(trait.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className={`
                relative h-full overflow-hidden rounded-3xl border transition-all duration-500
                ${trait.featured 
                  ? 'border-pink-100/20 bg-gradient-to-br from-black-100/90 to-black-200/90' 
                  : 'border-black-50/10 bg-gradient-to-br from-black-200/50 to-black-100/50'
                }
                hover:border-pink-100/30 hover:shadow-2xl hover:shadow-pink-100/10
                backdrop-blur-sm
                ${hoveredCard === trait.id ? 'scale-105 -translate-y-2' : ''}
              `}>
                
                {/* Background gradient overlay */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${trait.bgColor} opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500
                `} />
                
                {/* Featured badge */}
                {trait.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-pink-100/20 to-purple-100/20 border border-pink-100/30">
                      <Rocket className="w-3 h-3 text-pink-100" />
                      <span className="text-xs font-medium text-pink-100">Featured</span>
                    </div>
                  </div>
                )}
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`
                    inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6
                    bg-gradient-to-br ${trait.bgColor} border border-white-50/10
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <div className={`bg-gradient-to-r ${trait.color} bg-clip-text text-transparent`}>
                      {React.createElement(iconMap[trait.icon], { className: "w-8 h-8" })}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className={`
                    text-xl sm:text-2xl font-bold mb-4 
                    ${trait.featured 
                      ? 'bg-gradient-to-r from-white-50 to-pink-100 bg-clip-text text-transparent' 
                      : 'text-white-50'
                    }
                    group-hover:text-white-50 transition-colors duration-300
                  `}>
                    {trait.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-blue-50/80 leading-relaxed flex-grow group-hover:text-blue-50 transition-colors duration-300">
                    {trait.description}
                  </p>
                  
                  {/* Bottom accent */}
                  <div className="mt-6 pt-4 border-t border-white-50/5">
                    <div className={`
                      h-1 rounded-full bg-gradient-to-r ${trait.color} 
                      transform scale-x-0 group-hover:scale-x-100 
                      transition-transform duration-500 origin-left
                    `} />
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className={`
                  absolute -inset-0.5 bg-gradient-to-r ${trait.color} rounded-3xl opacity-0 
                  group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm
                `} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-100/10 to-purple-100/10 border border-pink-100/20 hover:border-pink-100/40 transition-all duration-300 group cursor-pointer">
            <Heart className="w-5 h-5 text-pink-100 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white-50 font-medium">Let's Create Something Amazing Together</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTraitsCards;