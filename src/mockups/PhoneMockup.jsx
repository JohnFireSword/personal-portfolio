import React from 'react'
import projects from '../constants/projects'

const ImageMockup = React.memo(({ project }) => {
    
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="relative">
        <img 
          src={project.mockupImage} 
          alt="Phone Mockup" 
          className="w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] object-contain max-w-full"
        />
        
        {/* Decorative elements - responsive sizing */}
        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full animate-bounce animation-delay-2000"></div>
        <div className="absolute top-1/2 -left-3 sm:-left-6 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full animate-ping animation-delay-3000"></div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  )
})

export default ImageMockup