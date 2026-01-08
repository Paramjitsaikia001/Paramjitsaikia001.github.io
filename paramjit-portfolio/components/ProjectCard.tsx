import React from "react";
import { useEffect, useRef, useState } from "react";
import { Project } from "../types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const projectRef = useRef<HTMLDivElement | null>(null);
  const [showdetails, setShowdetails] = useState(false);

  const showdetailsOpen = () => {
    if (showdetails == false) {
      setShowdetails(!showdetails);
    }
  };

  const showdetailsClosed = () => {
    if (showdetails == true) {
      setShowdetails(!showdetails);
    }
  };

  useEffect(() => {
    if (!projectRef.current) return;

    gsap.from(projectRef.current, {
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      ref={projectRef}
      onClick={showdetailsOpen}
      className="projects bg-cardDark rounded-3xl p-8 h-[80vh] md:p-0  flex flex-col md:flex-row items-center gap-8 border border-zinc-800/50 hover:border-zinc-700 h-full transition-colors contain-cover duration-300"
      style={{
        backgroundImage: project.image ? `url(${project.image})` : undefined,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "None",
      }}
    >
      <div
        onClick={showdetailsClosed}
        className={`close ${
          showdetails ? "" : "hidden"
        } absolute top-5 cursor-pointer right-6`}
      >
        close
      </div>

      <div
        className={`close ${
          showdetails ? "hidden" : ""
        }  w-full  h-full   flex items-end justify-center cursor-pointer`}
      >
        <div className="text bg-black/60 px-12 mb-2 animate-bounce flex items-center rounded-full  h-12">

        <p> tap to show details </p>
        </div>
      </div>

      <div
        className={`flex-1 group space-y-4 p-12 rounded-3xl flex flex-col gap-2 justify-end ${
          showdetails
            ? "bg-gradient-to-t from-black via-black/90  to-black/50"
            : "hidden"
        } transition-color duration-500 w-full h-full`}
      >
        <h3 className="text-3xl  text-white md:text-6xl   font-bold leading-tight">
          {project.title.split(" ").map((word, i) => (
            <span key={i} className="border-b-2">
              {word}
            </span>
          ))}
        </h3>
        {project.description && (
          <p className="text-white p-2   rounded-xl bg-blue-700  mt-4 max-w-xl">
            {project.description}
          </p>
        )}
        <div className="pt-6  ">
          <button className="text-sm border-b border-white pb-1 hover:opacity-70 transition-opacity">
            View Case Study
          </button>
        </div>
      </div>

      {/* 
      <div className="flex-1 w-full bg-red-200 h-80 flex justify-center md:justify-end">
        <div className="w-full h-64 md:h-full bg-white rounded-2xl overflow-hidden relative shadow-lg group">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          )}
        </div>
      </div> 
*/}
    </div>
  );
};

export default ProjectCard;
