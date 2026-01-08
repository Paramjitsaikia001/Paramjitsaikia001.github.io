import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto font-mono">
      <div className="flex items-center mb-10">
        <div className="w-2 h-10 bg-zinc-600 mr-4"></div>
        <h2 className="text-3xl md:text-4xl font-bold uppercase">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert) => (
          <div key={cert.id} className="bg-cardDark border border-zinc-800 p-8 rounded-2xl hover:border-zinc-600 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
            <p className="text-accent mb-4">{cert.issuer}</p>
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-zinc-800">
               <span className="text-sm text-zinc-500">{cert.date}</span>
               {cert.link && (
                 <a href={cert.link} className="text-sm text-white hover:underline">Verify &rarr;</a>
               )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;