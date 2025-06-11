import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useState, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const TitleHeader = ({ title, sub }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const badgeRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      gsap.from(badgeRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      SplitText.create(".title-header-title", {
        type: "words,chars",
        onSplit(self) {
          gsap.from(self.chars, {
            autoAlpha: 0,
            stagger: 0.05,
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
            },
          });
        },
      });

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          opacity: 1,
          delay: 0.6,
          ease: "power3.out",
          transformOrigin: "center",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.to(badgeRef.current, {
        y: -3,
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="title-header-container flex flex-col items-center gap-6 pt-12">
      {/* Elegant Badge */}
      <div
        ref={badgeRef}
        className="title-header-badge relative overflow-hidden rounded-full px-6 py-3 backdrop-blur-sm border border-pink-500/20  shadow-lg shadow-black-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 animate-pulse" />
        <p className="relative z-10 text-pink-200 text-sm font-light tracking-wide">
          {sub}
        </p>
      </div>

      {/* Main Title */}
      <div className="title-header-title-wrapper relative">
        <div
          ref={titleRef}
          className="title-header-title font-semibold md:text-6xl text-4xl text-white text-center leading-tight tracking-tight">
          <span className="relative z-10">{title}</span>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl opacity-30 -z-10" />
      </div>

      {/* Elegant Divider Line */}
      <div
        ref={lineRef}
        className="title-header-line w-24 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60"
      />
    </div>
  );
};

export default TitleHeader;
