"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(animationPath)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => console.error("Failed to load Lottie:", err));
  }, [animationPath]);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width: width || "95%" }}
    />
  );
};

export default AnimationLottie;
