import React from 'react';
import { Coffee, Code2, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section className="bg-slate-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="w-64 h-64 rounded-full overflow-hidden bg-slate-700">
              <img
                src="\src\assets\img\me.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Over Mij</h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Ik ben een webontwikkelaar gespecialiseerd in front-end en page-design en het maken van aantrekkelijke user-friendly responsieve websites.
            </p>

            <div className="flex gap-6">
              {/* <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                <Coffee className="w-6 h-6 text-blue-400" />
              </div> */}
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                <a href="https://github.com/Mllyszn">
                  <Code2 className="w-6 h-6 text-green-400" />
                </a>
              </div>
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                <a href="https://www.linkedin.com/in/melvin-lieuw-3a6827373/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
              </div>
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                <a href="cv_school.2025.pdf" download>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-paperclip-icon lucide-paperclip"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" /></svg>                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;