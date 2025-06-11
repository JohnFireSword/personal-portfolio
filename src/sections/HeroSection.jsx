import Button from "../components/button";
import AnimationLottie from "../components/helpers/animation-lottie";
import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    if (window.innerWidth < 768) return;
    // Enhanced lottie animation with bounce effect
    gsap.from(".lottie", {
      scale: 0.1,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay: 0.3,
    });

    // Staggered text animation
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
      }
    );

    // Subtitle animation
    gsap.fromTo(
      ".subtitle",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.8,
      }
    );

    // Floating animation for lottie
    gsap.to(".lottie", {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.5,
    });
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 z-10 flex">
        <img src="/section.svg" alt="background" />
      </div>

      {/* Content layout */}
      <div className="hero-layout">
        {/* Header */}
        <header className="flex flex-col justify-center w-full md:px-20 px-5 z-20">
          <div className="flex flex-col gap-8 ml-10">
            <div className="hero-text ">
              <h1>
                From
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2">
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into interactive</h1>
              <h1>experiences</h1>
            </div>

            <div className="subtitle">
              <h2 className="text-md sm:text-lg md:text-xl text-pink-300   font-medium">
                Hi, I'm John and I deliver results that matter
              </h2>
            </div>

            <Button
              id="button"
              className="md:w-80 md:h-16 w-60 h-12"
              text="See my work"
            />
          </div>
        </header>

        {/* Lottie Animation */}
        <div className="lottie xl:w-4/5 w-full max-w-lg xl:max-w-none mt-12 xl:mt-0">
          <div className="relative">
            {/* Glow effect behind animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl opacity-50"></div>
            <AnimationLottie animationPath="/images/lotties/programming-lottie.json" />
          </div>
        </div>
        <div className="absolute hidden md:flex bottom-6 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-400 animate-pulse">
              Scroll down
            </span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
