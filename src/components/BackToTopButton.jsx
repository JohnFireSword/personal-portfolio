import { useState, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const BackToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 300); // Show after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useGSAP(() => {
    if (isVisible) {
      gsap.fromTo('.back-to-top-btn', 
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    }
  }, [isVisible]);

  const circumference = 2 * Math.PI * 20;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="back-to-top-btn fixed bottom-8 right-8 z-50 w-14 h-14  rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Back to top"
    >
      {/* Progress Circle */}
      <svg
        className="absolute inset-0 w-full h-full transform -rotate-90"
        viewBox="0 0 44 44"
      >
        {/* Background circle */}
        <circle
          cx="22"
          cy="22"
          r="20"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="2"
        />
        {/* Progress circle */}
        <circle
          cx="22"
          cy="22"
          r="20"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-300 ease-out"
          style={{
            transition: 'stroke-dashoffset 0.15s ease-out'
          }}
        />
      </svg>
      
      {/* Arrow Icon */}
      <svg
        className="w-5 h-5 text-white group-hover:transform group-hover:-translate-y-0.5 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
};

export default BackToTop;