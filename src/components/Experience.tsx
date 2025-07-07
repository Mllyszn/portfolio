import React from 'react';
import { Building, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Christelijk College Zeist",
      period: "2021 - 2023",
      description: "Gestudeerd in dienstverlening & producten op het Christelijk College Zeist.",
      tech: "Leren over hoe je media kunt gebruiken en hoe je het kan toepassen in de praktijk."
    },
    {
      company: "Grafisch Lyceum Utrecht",
      period: "2023 - Present",
      description: "Studeren aan het Grafisch Lyceum Utrecht in de richting van software/webdevelopment.",
      tech: "Geleerd om om te gaan met  HTML, CSS, JavaScript en React."
    }
  ];

  return (
    <section id='Contact' className="bg-slate-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Loopbaan</h2>
            <p className="text-gray-300 text-lg mb-12">Mijn loopbaan van scholen & studie</p>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                  
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="w-5 h-5 text-blue-400" />
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-2">{exp.description}</p>
                  <p className="text-blue-400 text-sm font-medium">+ {exp.tech}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-8">Neem contact met mij op!</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Naam</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Uw naam"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="jouw.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Bericht</label>
                <textarea 
                  id="message"
                  rows={5}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="typ hier uw bericht....."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Verstuur
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div className="text-center text-gray-400 mt-12">
          <p>&copy; {new Date().getFullYear()} Melvin Lieuw. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </section>
  );
};

export default Experience;