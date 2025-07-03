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
                src="C:\Users\melvi\OneDrive\Documenten\school folder\progammer folder\module_projects\portfolio\src\assets\img\me.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold">About Me</h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Ik ben een webontwikkelaar gespecialiseerd in front-end en tekstueel plaatsen
              om te e-mailen over het maken van aantrekkelijke en responsieve websites.
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
                <Palette className="w-6 h-6 text-purple-400" />
              </div>
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;