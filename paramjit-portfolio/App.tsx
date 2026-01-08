import React, { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Carousel from "./components/Carousel";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import { PROJECTS, EXPERIENCES } from "./constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Menu from "./components/menu";
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  // Cursor follower effect (optional, adds to the aesthetic)
  const cursorRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);



  return (
    <div className="min-h-screen bg-bgDark text-white relative selection:bg-white selection:text-black overflow-x-hidden">
      {/* Custom Cursor Element (Hidden on touch) */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 border border-white rounded-full pointer-events-none hidden md:block z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      ></div>

      <main className="relative z-10">
        <Menu/>
        <Hero />

        <TechStack />

        <About />

        <Carousel
          title="Projects"
          items={PROJECTS}
          renderItem={(project) => <ProjectCard project={project} />}
        />

        <Carousel
          title="Experiences"
          items={EXPERIENCES}
          renderItem={(exp) => <ExperienceCard experience={exp} />}
        />

        <Certifications />
      </main>

      <Footer />
    </div>
  );
};

export default App;
