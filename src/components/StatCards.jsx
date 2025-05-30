import React, { useRef } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function StatCards() {
  const cardRefs = useRef([]);

  useGSAP(() => {
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);


  return (
    <div className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={item.label + index}
            ref={(card) => (cardRefs.current[index] = card)}
            className="bg-zinc-900 rounded p-10 flex flex-col justify-center items-center text-center"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp end={item.value} suffix={item.suffix} duration={2} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatCards;
