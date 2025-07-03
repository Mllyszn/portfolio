import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Hendrik Hogendijk",
      description: "een website voor Hendrik Hogendijk, een Hovenier.",
      codeLines: [
        { color: "bg-blue-400", width: "w-8" },
        { color: "bg-green-400", width: "w-12" },
        { color: "bg-yellow-400", width: "w-6" },
        { color: "bg-blue-400", width: "w-10" },
        { color: "bg-purple-400", width: "w-8" }
      ]
    },
    {
      title: "Platformer Game",
      description: "Een platformer game gemaakt met React + Vite en JavaScript.",
      codeLines: [
        { color: "bg-green-400", width: "w-10" },
        { color: "bg-blue-400", width: "w-8" },
        { color: "bg-yellow-400", width: "w-12" },
        { color: "bg-purple-400", width: "w-6" },
        { color: "bg-green-400", width: "w-9" }
      ]
    },
    {
      title: "Happy Herbivore",
      description: "Een website voor Happy Herbivore, een veganistische etenwinkel.",
      codeLines: [
        { color: "bg-purple-400", width: "w-9" },
        { color: "bg-yellow-400", width: "w-7" },
        { color: "bg-blue-400", width: "w-11" },
        { color: "bg-green-400", width: "w-8" },
        { color: "bg-purple-400", width: "w-10" }
      ]
    }
  ];

  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-300 text-lg">Some of the projects I have worked on</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-colors duration-200 group">
              <div className="mb-6">
                <div className="w-full h-32 bg-slate-700 rounded-lg flex flex-col justify-center items-center space-y-2 group-hover:bg-slate-600 transition-colors">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-1 w-16">
                    {project.codeLines.map((line, i) => (
                      <div key={i} className={`h-1 ${line.color} ${line.width} rounded`}></div>
                    ))}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>
              
              <div className="flex gap-3">
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  <ExternalLink className="w-4 h-4" />
                  Live website
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors text-sm">
                  <Github className="w-4 h-4" />
                  View code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;