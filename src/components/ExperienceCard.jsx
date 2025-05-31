import React from 'react'
import GlowCard from './GlowingCard'

const ExperienceCard = ({ experience, isActive, onClick }) => {
  return (
   <div
  className={`relative cursor-pointer transform transition-all duration-500 hover:scale-105 ${
    isActive ? "scale-105" : ""
  }`}
  onClick={() => onClick()}
>
  {/* Floating Background Circle */}
  <div
    className={`pointer-events-none absolute -inset-4 bg-gradient-to-r ${
      experience.color || 'from-pink-500 to-purple-500'
    } rounded-full opacity-10 blur-xl transition-opacity duration-300 ${
      isActive ? "opacity-20" : "opacity-5"
    }`}
  />

      {/* Main Card with Glow Effect */}
      <GlowCard identifier={`experience-${experience.id}`}>
        <div
          className={`relative bg-gray-900 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 transition-all duration-300 ${
            isActive ? "border-pink-500/50 shadow-2xl shadow-pink-500/10" : ""
          }`}
          style={{ borderRadius: "12px" }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className={'text-3xl'}
              >
                {experience.icon || '💼'}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {experience.title}
                </h3>
                <p className="text-pink-500 font-medium">
                  {experience.company}
                </p>
              </div>
            </div>
            <span className="text-blue-200 text-sm bg-gray-800 px-3 py-1 rounded-full">
              {experience.period}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Technologies */}
          {experience.technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 px-3 py-1 rounded-full border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Expandable Achievements */}
          {experience.achievements && (
            <div
              className={`transition-all duration-300 overflow-hidden ${
                isActive ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-4 border-t border-gray-700">
                <h4 className="text-pink-500 font-semibold mb-2 flex items-center gap-2">
                  ✨ Key Achievements
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-gray-300 text-sm flex items-start gap-2"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color || 'from-pink-500 to-purple-500'} mt-1.5 flex-shrink-0`}
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Location Badge */}
          <div className="absolute bottom-4 right-4">
            <div className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
              📍 {experience.location}
            </div>
          </div>

          {/* Active Indicator */}
          {isActive && (
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
              <div className="w-1 h-12 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full shadow-lg shadow-pink-500/50" />
            </div>
          )}
        </div>
      </GlowCard>
      
    </div>
  );
};

export default ExperienceCard;