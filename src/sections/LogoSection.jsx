import React from "react";
import skills from "../constants/skills";


const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} className="md:h-12 h-8"/>
      <span className="text-md text-white ml-6">{icon.name}</span>
    </div>
  );
};

function LogoSection() {
  return (
    <div  id="skills" className="md:my-20 my-10 relative  ">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee  h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {skills.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
          {skills.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
