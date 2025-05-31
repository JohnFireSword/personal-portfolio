import React from "react";
import {
  Code,
  Palette,
  Zap,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Heart,
} from "lucide-react";

const iconMap = {
  Lightbulb: Lightbulb,
  Code: Code,
  Palette: Palette,
  Zap: Zap,
  Users: Users,
  Target: Target,
};

const IconRenderer = React.memo(({ iconName, className }) => {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
});

const TraitCard = React.memo(
    
  ({ trait, index, onMouseEnter, onMouseLeave, isHovered }) => (
    <div
      className={`group relative ${
        trait.featured ? "lg:col-span-1 lg:row-span-1" : ""
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {/* Simplified card with reduced complexity */}
      <div
        className={`
      relative h-full overflow-hidden rounded-3xl border transition-all duration-300 ease-out
      ${
        trait.featured
          ? "border-pink-100/20 bg-gradient-to-br from-black-100/90 to-black-200/90"
          : "border-black-50/10 bg-gradient-to-br from-black-200/50 to-black-100/50"
      }
      hover:border-pink-100/30 hover:shadow-lg hover:shadow-pink-100/5
      backdrop-blur-sm
      ${isHovered ? "transform scale-105 -translate-y-1" : ""}
    `}>
        {/* Simplified background overlay - only shows on hover */}
        <div
          className={`
        absolute inset-0 bg-gradient-to-br ${trait.bgColor} opacity-0 
        group-hover:opacity-100 transition-opacity duration-300
      `}
        />

        {/* Featured badge */}
        {trait.featured && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-pink-100/20 to-purple-100/20 border border-pink-100/30">
              <Rocket className="w-3 h-3 text-pink-100" />
              <span className="text-xs font-medium text-pink-100">
                Featured
              </span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col">
          {/* Icon with simplified hover effect */}
          <div
            className={`
          inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6
          bg-gradient-to-br ${trait.bgColor} border border-white-50/10
          group-hover:scale-105 transition-transform duration-200
        `}>
            <div className="text-pink-400">
              <IconRenderer iconName={trait.icon} className="w-8 h-8" />
            </div>
          </div>

          {/* Title */}
          <h3
            className={`
          text-xl sm:text-2xl font-bold mb-4 
          ${
            trait.featured
              ? "bg-gradient-to-r from-white-50 to-pink-100 bg-clip-text text-transparent"
              : "text-white-50"
          }
          group-hover:text-white-50 transition-colors duration-200
        `}>
            {trait.title}
          </h3>

          {/* Description */}
          <p className="text-blue-50/80 leading-relaxed flex-grow group-hover:text-blue-50 transition-colors duration-200">
            {trait.description}
          </p>

          {/* Simplified bottom accent */}
          <div className="mt-6 pt-4 border-t border-white-50/5">
            <div
              className={`
            h-1 rounded-full bg-gradient-to-r ${trait.color} 
            transform scale-x-0 group-hover:scale-x-100 
            transition-transform duration-300 origin-left
          `}
            />
          </div>
        </div>

        {/* Simplified hover glow - reduced blur */}
        <div
          className={`
        absolute -inset-0.5 bg-gradient-to-r ${trait.color} rounded-3xl opacity-0 
        group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-sm
      `}
        />
      </div>
    </div>
  )
);

export default TraitCard;
