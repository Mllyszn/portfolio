import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import spiegelspelVideo from '../assets/vid/spiegelspel.mp4';
import plaformerImg from '../assets/img/platformer-game.png';
import happyherbivoreVideo from '../assets/vid/happyherbs.mp4'; // Placeholder image for Happy Herbivore


const Projects = () => {
  const projects = [
    {
      id: "project-focus6",
      title: "Focus6 Spiegelspel",
      description: "Een webapplicatie voor het spelen van een spiegelspel, gemaakt met React.",
    },
    {
      id: "project-platformer",
      title: "Platformer Game",
      description: "Een platformer game gemaakt met React + Vite en JavaScript.",
      tag: "Game Dev"
    },
    {
      id: "project-happy-herbivore",
      title: "Happy Herbivore",
      description: "Een website voor Happy Herbivore, een veganistische etenwinkel.",
      tag: "E-commerce"
    }
  ];

  return (
    <section id='Projects' className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projecten</h2>
          <p className="text-gray-300 text-lg">Een aantal van de projecten waar ik aan heb gewerkt</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div key={project.id} id={`project-${project.id}`} className="relative bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-colors duration-200 group border border-slate-700"
            >
              {index === 0 ? (
                <video
                  src={spiegelspelVideo}
                  controls
                  className="w-full h-40 object-cover rounded-lg mb-4"
                >
                  Your browser does not support the video tag.
                </video>
              ) : index === 1 ? (
                <img
                  src={plaformerImg}
                  alt="Platformer game"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              ) : (
                <video
                  src={happyherbivoreVideo}
                  controls
                  className="w-full h-40 object-cover rounded-lg mb-4"
                >
                  Your browser does not support the video tag.
                </video>
              )}



              <span className="absolute top-4 right-4 bg-indigo-500 text-xs px-3 py-1 rounded-full text-white font-medium">
                {project.tag}
              </span>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>
              <div className="flex gap-3">
                <a href="https://vercel.com/mels-projects-a56ebaeb" className="flex items-center gap-2 hover:text-gray-300 transition-colors text-sm">
                  <ExternalLink className="w-4 h-4" />
                  Live website
                </a>
                <a href="https://github.com/Mllyszn" className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors text-sm">
                  <Github className="w-4 h-4" />
                  View Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
