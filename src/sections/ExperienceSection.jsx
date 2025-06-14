import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect } from "react";

import TitleHeader from "../components/TitleHeader";
import ExperienceCard from "../components/ExperienceCard";
import experiences from "../constants/experiences";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [scrollActiveId, setScrollActiveId] = useState(null);
  const [clickActiveId, setClickActiveId] = useState(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile && experiences.length > 0) {
      setClickActiveId(experiences[0].id);
    }
  }, []);

  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card, index) => {
      const cardId = card.getAttribute("data-id");

      ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        end: "bottom 30%",
        onEnter: () => {
          setClickActiveId(null);
          setScrollActiveId(cardId);
        },
        onLeaveBack: () => {
          setScrollActiveId(null);
        },
      });
    });
  }, []);

  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          className: "active",
        },
      });
    });

    gsap.to(".timeline2", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline2",
        start: "top center",
        end: "80% center",
        onUpdate: (self) => {
          gsap.to(".timeline2", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
  }, []);

  return (
    <section
      id="experience"
      className="relative  w-full md:mt-30 mt-20 section-padding xl:px-0">
      <div className="absolute top-0 left-0  flex">
        <img src="/section.svg" alt="background" />
      </div>
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Past Experiences" sub="My Career Overview 💼" 
            aria-label="Past Experiences"
        
        />

        {/* Particle effects */}
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

        <div className="mt-32 relative ">
          {/* Experience Cards Container */}
          <div className=" z-50 xl:space-y-32 space-y-10 ">
            {experiences.map((card) => {
              return (
                <div key={card.id} className="exp-card-wrapper">
                  <div className="xl:w-3/6 timeline-card" data-id={card.id}>
                    <ExperienceCard
                      experience={card}
                      isActive={
                        clickActiveId !== null
                          ? clickActiveId === card.id
                          : scrollActiveId === String(card.id)
                      }
                      onClick={() =>
                        setClickActiveId((prev) =>
                          prev === card.id ? null : card.id
                        )
                      }
                    />
                  </div>

                  <div className="xl:w-2/6 ">
                    <div className="flex item-start ">
                      <div className=" hidden bottom-15 top-0 2xl:left-[39vw] xl:left-[40.5vw] h-full md:flex justify-center absolute md:right-15">
                        <div className="timeline2 h-[110%] absolute z-30  -top-7 w-14 md:w-28 bg-[#0d1224]" />
                        <div className="gradient-line w-1 h-full" />
                      </div>
                      <div className=" flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                        <div className="timeline-logo bg-[#0d1224]  w-26">
                          <img
                            className="w-20"
                            src={card.logoPath}
                            alt="logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
