import React from 'react';

const Timeline = ({ experiences, activeIndex, scrollProgress }) => {
  return (
    <div className="relative">
      {/* Background Vertical Line */}
      <div className="absolute left-8 top-0 w-0.5 h-full bg-gray-700 opacity-30"></div>

      {/* Animated Progress Line */}
      <div
        className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-100 to-blue-500 transition-all duration-300 ease-out"
        style={{ height: `${scrollProgress * 100}%` }}
      ></div>

      {/* Timeline Dots */}
      <div className="space-y-8">
        {experiences.map((_, index) => {
          const dotProgress = (index + 1) / experiences.length;
          const isReached = scrollProgress >= dotProgress;

          return (
            <div key={index} className="relative flex items-center">
              <div
                className={`absolute left-6 w-4 h-4 rounded-full transition-all duration-500 ${
                  isReached
                    ? 'bg-pink-500 shadow-lg shadow-pink-500/50 scale-125'
                    : 'bg-gray-600'
                } ${
                  activeIndex === index ? 'ring-2 ring-pink-500/50 ring-offset-2 ring-offset-black' : ''
                }`}
              >
                {isReached && (
                  <div className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-75"></div>
                )}
              </div>
              <div
                className={`ml-16 font-medium transition-all duration-500 ${
                  isReached ? 'text-blue-50' : 'text-gray-500'
                }`}
              >
                {experiences[index].period}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
