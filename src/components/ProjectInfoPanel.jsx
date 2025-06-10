import React from "react";

// Project Info Panel
const ProjectInfoPanel = React.memo(({ project }) => {
  return (
   <div className="bg-black-100 border border-gray-700 rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 
                mx-auto ml-0  max-w-md sm:max-w-lg md:max-w-2xl xl:max-w-xl">

      <div className="flex items-start justify-between mb-4">
        <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">

            {project.title}
          </h3>
          <span className="px-3 py-1 rounded-full text-sm font-medium text-white bg-blue-600">
            {project.category}
          </span>
        </div>
        <div className="flex gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 bg-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
            <span className="text-green-400">
              <img
                src="/images/svg/projects/play-arrow.svg"
                className="w-8 align-center"
                alt=""
              />
            </span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 bg-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
            <span className="align-center items-center justify-center">
              <img
                className="w-8 align-center text-center bg-white rounded-full"
                src="/images/svg/skills/github.svg"
                alt="Github logo"
              />
            </span>
          </a>
        </div>
      </div>

     <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">  
        {project.longDescription}
      </p>

      {/* Technologies */}
      <div className="mb-6">
        <h4 className="text-pink-500 font-semibold mb-3">🛠️ Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full text-sm sm:text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Collaborators */}
      {project.collaborators && project.collaborators.length > 0 && (
        <div className="mb-6">
          <h4 className="text-pink-500 font-semibold mb-3">🤝 Collaborators</h4>
          <div className="flex flex-wrap gap-2">
            {project.collaborators.map((collaborator, i) => (
              <a
                key={i}
                href={collaborator.link}
                target="_blank"
                rel="noopener noreferrer"
                className="  text-gray-300 hover:text-blue-300 px-3 py-1 rounded-full text-sm transition-colors duration-200 cursor-pointer">
                {`Honors to ${collaborator.name} for contributing to the project alongside me.`}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Features */}
      <div>
        <h4 className="text-pink-500 font-semibold mb-3">✨ Key Features</h4>
      <ul className="space-y-1 text-sm sm:text-base">
          {project.features.map((feature, i) => (
            <li key={i} className="text-gray-300 flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`}></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default ProjectInfoPanel;
