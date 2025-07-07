import React from 'react';
import { Code, Monitor } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-gray-300 text-lg">Melvin Lieuw, Web Developer in opleiding</p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Student Grafisch Lyceum Utrecht
              </h1>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Ik studeer in webontwikkeling. Momenteel zit ik in mijn 2e jaar
              van Webontwikkeling op het Grafisch Lyceum Utrecht.
              {/* Ik studeer in webontwikkeling. Ik ben momenteel in mijn 2de jaar
              van Webdevelopment op Grafisch Lyceum Utrecht. */}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#Projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Mijn Projecten</a>
              <a href='#Contact' className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Contact Mij
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-slate-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-6 left-6 w-32 h-24 bg-slate-700 rounded-lg flex items-center justify-center">
                  <div className="space-y-1">
                    <div className="h-1 bg-blue-400 w-8 rounded"></div>
                    <div className="h-1 bg-green-400 w-12 rounded"></div>
                    <div className="h-1 bg-yellow-400 w-6 rounded"></div>
                    <div className="h-1 bg-blue-400 w-10 rounded"></div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>

                <div className="w-24 h-32 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Monitor className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;