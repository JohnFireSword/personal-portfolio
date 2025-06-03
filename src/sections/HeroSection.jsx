import Button from "../components/button";
import AnimationLottie from "../components/helpers/animation-lottie";
import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {

        gsap.from(".lottie", {
     scale: 0.1,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.3,
    });

    gsap.fromTo(
      ".hero-text h1",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 z-10 flex">
        <img src="/section.svg" alt="background" />
      </div>

      {/* Content layout */}
      <div className="hero-layout flex flex-col xl:flex-row justify-between items-center ">
        {/* Header */}
        <header className="flex flex-col justify-center w-full md:px-20 px-5 z-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
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
              <h1>into real projects</h1>
              <h1>that deliver results</h1>
            </div>

            <h1 className="text-pink-500 md:text-xl pointer-events-none ">
              Hi, I'm John, a Full Stack Developer from Greece
            </h1>

            <Button
              id="button"
              className="md:w-80 md:h-16 w-60 h-12"
              text="See my work"
            />
          </div>
        </header>

        {/* Lottie Animation */}
        <div className=" lottie w-full xl:w-[50%] mt-10 xl:mt-0 xl:absolute xl:top-24 xl:-right-20 flex justify-center xl:block">
          <AnimationLottie animationPath="/images/lotties/programming-lottie.json" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
