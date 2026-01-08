import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TECH_STACK } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const TechStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".tech-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 max-w-7xl mx-auto font-mono">
      <div className="flex items-center mb-10">
        <div className="w-2 h-10 bg-white mr-4"></div>
        <h2 className="text-3xl md:text-4xl font-bold uppercase">Tech Stack</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {TECH_STACK.map((tech, index) => (
          <div 
            key={index} 
            className="tech-item bg-cardDark border border-zinc-800 p-6 rounded-xl flex items-center justify-center text-center hover:border-white hover:bg-zinc-800 transition-all duration-300 group"
          >
            <span className="text-zinc-400 font-bold group-hover:text-white group-hover:scale-110 transition-all">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;