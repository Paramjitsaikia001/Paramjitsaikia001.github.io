import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROFILE } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card Appearance
      gsap.fromTo(cardRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          }
        }
      );

      // Circle Pulse/Rotate
      gsap.to(circleRef.current, {
        rotation: 360,
        scale: 1.1,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "linear"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-6 max-w-7xl mx-auto font-mono">
      <div 
        ref={cardRef}
        className="bg-cardDark rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* Left Content */}
          <div ref={contentRef}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 leading-none">
              ABOUT<br />ME
            </h2>
            <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>{PROFILE.description}</p>
              <p>{PROFILE.subDescription}</p>
              <p className="opacity-70 italic">
                Beyond coding, I’m constantly learning and exploring new tools to stay ahead in the fast-evolving tech landscape.
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex items-center justify-center relative min-h-[300px]">
            <div 
              ref={circleRef}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-zinc-300 opacity-90 blur-sm relative z-10"
            ></div>
            {/* Decorative background element */}
            <div className="absolute w-32 h-32 md:w-40 md:h-40 right-10 top-10 bg-zinc-700/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;