import { useState, useRef, useEffect } from "react";

const PhoneMockupVideo = ({ project, isActive }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  // Reset states when project changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
    setIsPlaying(false);
  }, [project.id]);

  useEffect(() => {
    if (isActive && videoRef.current && isLoaded && !hasError) {
      // Auto-play when mockup becomes active
      videoRef.current.play();
      setIsPlaying(true);
    } else if (!isActive && videoRef.current) {
      // Pause when not active
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive, isLoaded, hasError, project.id]);

  const handlePlay = () => {
    if (videoRef.current && !hasError) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoLoad = () => {
    console.log(`Video loaded for project: ${project.title}`);
    setIsLoaded(true);
    setHasError(false);
  };

  const handleVideoError = (e) => {
    console.error(`Video failed to load for project: ${project.title}`, e);
    setHasError(true);
    setIsLoaded(false);
  };

  return (
    <div className="relative max-w-xs mx-auto">
      {/* Phone Frame */}
      <div className=" ">
        {/* Screen */}
        <div className="rounded-[2rem] overflow-hidden">
          {/* Video Container */}
          <div className="relative w-full h-full">
            {project.videoUrl && !hasError ? (
              <>
                <video
                  key={`video-${project.id}`}
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  onLoadedData={handleVideoLoad}
                  onError={handleVideoError}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  poster={project.mockupImage}>
                  <source src={project.videoUrl} type="video/mp4" />
                </video>

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center group">
                  <button
                    onClick={handlePlay}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30">
                    {isPlaying ? (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Loading Indicator */}
                {!isLoaded && !hasError && (
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
                    <span className="ml-2 text-white text-sm">
                      Loading {project.title}...
                    </span>
                  </div>
                )}
              </>
            ) : (
              <img
                src={project.mockupImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockupVideo;
