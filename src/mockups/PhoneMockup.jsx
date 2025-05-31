import React from "react";

const PhoneMockup = React.memo(({ project, isActive }) => {
  return (
    <div
      className={`relative will-change-transform transition-all duration-700 scale-80
      `}>
      {/* iPhone Frame with Enhanced Realism */}
      <div className="relative mx-auto w-72 h-[580px]">
        {/* Enhanced Glow Effect */}
        {isActive && (
          <div
            className={`absolute -inset-8 bg-gradient-to-r ${project.color} opacity-20 blur-2xl rounded-full pointer-events-none animate-pulse `}></div>
        )}

        {/* Outer Frame with Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-[3.5rem] shadow-2xl border-4 border-gray-600 ">
          {/* Inner Frame with Realistic Bezels */}
          <div className="absolute inset-1 bg-gradient-to-b from-gray-800 to-black rounded-[3rem] shadow-inner">
            {/* Screen with OLED-like Deep Black */}
            <div className="absolute top-3 left-3 right-3 bottom-3 bg-black rounded-[2.8rem] overflow-hidden shadow-inner border border-gray-900">
              {/* Dynamic Island (Modern iPhone Style) */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20 border border-gray-700 shadow-lg">
                <div className="absolute inset-0.5 bg-gradient-to-b from-gray-900 to-black rounded-full">
                  {/* Camera and Sensors */}
                  <div className="flex items-center justify-center h-full gap-2">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <div className="w-1 h-1 bg-blue-500 rounded-full opacity-60"></div>
                    <div className="w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Screen Content - App Screenshot Display */}
              <div className="relative h-full bg-black">
                {/* Enhanced Status Bar */}
                <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center text-white text-xs p-4 pt-6 bg-gradient-to-b from-black/80 to-transparent">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">
                      {new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {/* Battery */}
                    <div className="w-6 h-3 border border-white rounded-sm relative ml-1">
                      <div className="absolute right-0 top-0.5 w-4 h-2 bg-green-500 rounded-l-sm"></div>
                      <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-white rounded-r-sm"></div>
                    </div>
                  </div>
                </div>

                {/* App Screenshot Container */}
                <div className="absolute inset-0 pt-12 pb-6">
                  {project.screenshot ? (
                    /* Display actual app screenshot */
                    <img
                      src={project.screenshot}
                      alt={`${project.title} app screenshot`}
                      className="w-full h-full object-cover object-top"
                      style={{
                        objectFit: "cover",
                        objectPosition: "top center",
                      }}
                    />
                  ) : (
                    /* Fallback - Enhanced Mock App Interface */
                    <div className="h-full p-4">
                      {/* App Header with Project Branding */}
                      <div
                        className={`relative w-full h-44 bg-gradient-to-br ${project.color} rounded-3xl mb-4 overflow-hidden shadow-xl`}>
                        {/* Glassmorphism overlay */}
                        <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm"></div>

                        {/* Floating elements for depth */}
                        <div className="absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-20 rounded-full blur-xl"></div>
                        <div className="absolute bottom-6 left-6 w-8 h-8 bg-white bg-opacity-15 rounded-full blur-lg"></div>

                        {/* App Title */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                          <div className="w-12 h-12 bg-white bg-opacity-25 rounded-2xl mb-3 flex items-center justify-center backdrop-blur-sm shadow-lg">
                            <span className="text-white text-lg font-bold">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                          <span className="text-white font-bold text-lg drop-shadow-lg">
                            {project.title}
                          </span>
                          <span className="text-white text-xs opacity-80 mt-1">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Preview */}
                      <div className="space-y-4">
                        <div className="bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-2xl p-4 border border-gray-800 shadow-lg">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-white font-semibold text-sm">
                                {project.category}
                              </h3>
                              <p className="text-gray-400 text-xs mt-1">
                                Live Preview
                              </p>
                            </div>
                            <span className="px-3 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                              {project.status}
                            </span>
                          </div>

                          <p className="text-gray-300 text-xs leading-relaxed line-clamp-2 mb-4">
                            {project.description}
                          </p>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <button className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl text-xs font-semibold text-white shadow-lg">
                              View Live Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white opacity-60 rounded-full z-20"></div>
              </div>
            </div>
          </div>

          {/* Physical Button Details */}
          <div className="absolute left-0 top-20 w-1 h-8 bg-gray-600 rounded-r-full shadow-inner"></div>
          <div className="absolute left-0 top-32 w-1 h-12 bg-gray-600 rounded-r-full shadow-inner"></div>
          <div className="absolute left-0 top-48 w-1 h-12 bg-gray-600 rounded-r-full shadow-inner"></div>
          <div className="absolute right-0 top-28 w-1 h-16 bg-gray-600 rounded-l-full shadow-inner"></div>
        </div>

        {/* Enhanced Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-10 rounded-[3.5rem] pointer-events-none"></div>

        {/* Screen Reflection */}
        <div className="absolute top-6 left-6 right-6 h-32 bg-gradient-to-b from-white to-transparent opacity-5 rounded-t-[2.5rem] pointer-events-none"></div>

        {/* Ambient Lighting Effect */}
        {isActive && (
          <>
            <div
              className={`absolute -inset-2 bg-gradient-to-r ${project.color} opacity-5 blur-xl rounded-[4rem] pointer-events-none`}></div>
            <div className="absolute inset-0 shadow-2xl shadow-black/50 rounded-[3.5rem] pointer-events-none"></div>
          </>
        )}
      </div>
    </div>
  );
});

export default PhoneMockup;
