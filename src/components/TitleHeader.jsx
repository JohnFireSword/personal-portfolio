import React, { useEffect, useRef } from "react";




const TitleHeader = ({ title, sub }) => {
  


  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge text-pink-200 inset-0 bg-gradient-to-r from-pink-500/20 to-purple-100/20">
        <p>{sub}</p>
      </div>
      <div
        
        className=" font-semibold md:text-5xl text-3xl text-white text-center"
      >
        {title}
      </div>
    </div>
  );
};

export default TitleHeader;
