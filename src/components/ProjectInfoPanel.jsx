import React from 'react'




// Project Info Panel
const ProjectInfoPanel = React.memo(({ project }) => {
  return (
    <div className="bg-black-100 border border-gray-700 rounded-2xl ml-6 p-6 h-full">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
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
            className="p-1 bg-gray-400 hover:bg-gray-700 rounded-lg transition-colors"
            >
            <span className="text-blue-400"><img src="/images/svg/skills/link.svg" className='w-8 align-center' alt="" /></span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 bg-gray-400 hover:bg-gray-700 rounded-lg transition-colors"
            >
            <span className="align-center items-center justify-center"><img className='w-8 align-center text-center bg-white rounded-full' src="/images/svg/skills/github.svg" alt="Github logo" /></span>
          </a>
        </div>
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed">
        {project.longDescription}
      </p>

      {/* Technologies */}
      <div className="mb-6">
        <h4 className="text-pink-500 font-semibold mb-3">🛠️ Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h4 className="text-pink-500 font-semibold mb-3">✨ Key Features</h4>
        <ul className="space-y-2">
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

export default ProjectInfoPanel