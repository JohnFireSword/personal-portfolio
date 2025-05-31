import React from 'react'

const DesktopMockup = React.memo(({ project, isActive }) => {
  return (
    <div
      className={`relative will-change-transform transition-transform duration-500 ${
        isActive ? "scale-105" : "scale-95 opacity-70"
      }`}>
      {/* MacBook Frame */}
      <div className="relative mx-auto w-96 h-64">
        {/* Screen */}
        <div className="relative w-full h-48 bg-gray-900 rounded-t-lg overflow-hidden shadow-xl border border-gray-700">
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 border-b border-gray-700">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300 ml-4 truncate">
              {project.demoUrl}
            </div>
          </div>

          {/* Website Content */}
          <div className="h-full bg-gray-900 p-4">
            {/* Header */}
            <div
              className={`w-full h-12 bg-gradient-to-r ${project.color} rounded-lg mb-3 flex items-center justify-center`}>
              <span className="text-white font-bold text-sm">
                {project.title}
              </span>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="h-8 bg-gray-800 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-700 rounded"></div>
              <div className="h-8 bg-gray-800 rounded animate-pulse"></div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="h-2 bg-gray-700 rounded w-full"></div>
                <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                <div className="h-2 bg-gray-700 rounded w-1/2"></div>
              </div>
              <div
                className={`h-16 bg-gradient-to-r ${project.color} opacity-30 rounded-lg`}></div>
            </div>
          </div>
        </div>

        {/* MacBook Base */}
        <div className="w-full h-4 bg-gray-700 rounded-b-2xl shadow-lg border-t border-gray-600">
          <div className="w-16 h-1 bg-gray-600 rounded-full mx-auto translate-y-1.5"></div>
        </div>

        {/* Optimized Glow Effect */}
        {isActive && (
          <div
            className={`absolute -inset-6 bg-gradient-to-r ${project.color} opacity-10 blur-lg rounded-lg pointer-events-none`}></div>
        )}
      </div>
    </div>
  );
});

export default DesktopMockup