import { Loader } from "lucide-react";
import JS from "../assets/JS.svg";
import C from "../assets/C.svg";
import CPlusPlus from "../assets/C++_Logo.svg";
import Python from "../assets/python.svg";
import ReactJS from "../assets/reactjs.svg";
import NodeJS from "../assets/nodejs.svg";
import MongoDB from "../assets/mongodb.svg";
import Nextjs from "../assets/nextjs.svg";
import git from "../assets/git.svg";
import mysql from "../assets/mysql.svg";
import typescript from "../assets/typescript.svg";
import Figma from "../assets/figma.svg";
import Tailwind from "../assets/tailwindcss.svg";
const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full w-full px-2 gap-4 lg:w-[98%] rounded-xl overflow-x-hidden bg-gradient-to-r from-[#000c26] to-[#004cff] py-12">
      <p
        className="font-semibold font-sans mx-12 bg-[#26ff00] text-[#000] rounded-full py-1 px-4"
      >
        Skills
      </p>
      <div className="Skills w-[100%] h-full  flex lg:flex-row flex-col  justify-center items-center relative overflow-hidden">
        <Loader className="lg:w-[20rem] lg:h-[20rem] h-[16rem] w-[16rem] absolute lg:right-8 right-12 top-[60%] lg:top-0 text-[#004cff] animate-wiggle stroke-3" />

        <div className="Skills-items w-[98%] lg:w-[90%] flex flex-col lg:flex-row h-full lg:gap-2 gap-4">

          <div
            className="Skills-item w-full lg:w-1/2 bg-[#fff] rounded-lg shadow-md gap-6 flex flex-col py-10 px-8 lg:h-fit"
          >
            <h1 className="lg:text-6xl text-[12vw] w-full leading-[3rem] font-[900]">
              <span className="text-[#000c26]"> Programming</span>
              <span className="text-[#6c98ff]"> Language</span>
            </h1>

            <div className="links flex flex-col items-start justify-start gap-4  w-[98%]">
              <div
                className="js py-8 px-3 h-12 w-full flex items-center justify-start gap-2 bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-md "
              >
                <img
                  className="h-12 w-12 rounded-md"
                  src={JS}
                  alt="javascript"
                  srcSet=""
                />
                <p className="text-xl lg:text-3xl font-sans font-extralight ">
                  JavaScript
                </p>
              </div>
              <div
                className="js py-8 px-3 h-12 w-full flex items-center justify-start gap-2 bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-md "
              >
                <img
                  className="h-12 w-12 rounded-md"
                  src={Python}
                  alt="python"
                  srcSet=""
                />
                <p className="text-xl lg:text-3xl font-sans font-extralight ">Python</p>
              </div>
              <div
                className="js py-8 px-3 h-12 w-full flex items-center justify-start gap-2 bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-md "
              >
                <img
                  className="h-12 w-12 rounded-md"
                  src={CPlusPlus}
                  alt="C++"
                  srcSet=""
                />
                <p className="text-xl lg:text-3xl font-sans font-extralight ">C++</p>
              </div>
              <div
                className="js py-8 px-3 h-12 w-full flex items-center justify-start gap-2 bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-md "
              >
                <img className="h-12 w-12 rounded-md" src={C} alt="C" srcSet="" />
                <p className="text-xl lg:text-3xl font-sans font-extralight">
                  C-Programming Language
                </p>
              </div>
            </div>
          </div>

          <div
            className="Skills-item bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] w-full lg:w-1/2 rounded-lg flex flex-col items-start justify-start gap-6 py-12 px-8 lg:h-fit"
          >
           <h1 className="lg:text-7xl text-[16vw]  flex gap-1 leading-[3rem] font-[900]">
              <span className="text-[#ffffff]">Build</span>
              <span className="text-[#5bff48]">Tools</span>
            </h1>

            <div className="links flex flex-wrap items-start justify-start gap-4  w-full">
              <div
                className="js py-8 px-3 h-12  flex items-center justify-start gap-2 bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-md "
              >
                <img
                  className="h-12 w-12 rounded-md"
                  src={ReactJS}
                  alt="reactjs"
                  srcSet=""
                />
                <p className="text-xl lg:text-3xl font-sans font-extralight ">ReactJS</p>
              </div>
              <div
                className="js py-8 px-3 h-12  flex items-center justify-start gap-2 bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-md "
              >
                <img
                  className="h-12 w-12 rounded-md"
                  src={NodeJS}
                  alt="nodejs"
                  srcSet=""
                />
                <p className="text-xl lg:text-3xl font-sans font-extralight ">NodeJS</p>
              </div>
              <div
                className="js py-8 px-3 h-12  flex items-center justify-start gap-2 bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-md "
              >
                <img
                  className="h-12 w-12 rounded-md"
                  src={MongoDB}
                  alt="mongodb"
                  srcSet=""
                />
                <p className="text-xl lg:text-3xl font-sans font-extralight ">MongoDB</p>
              </div>
              <div
                className="js py-8 px-3 h-12  flex items-center justify-start gap-2 bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-md "
              >
                <img
                  className="h-12 w-12 rounded-md"
                  src={Nextjs}
                  alt="nextjs"
                  srcSet=""
                />
                <p className="text-xl lg:text-3xl font-sans font-extralight ">Next.js</p>
              </div>
              <div
                className="js py-8 px-3 h-12  flex items-center justify-start gap-2 bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-md "
              >
                <img className="h-12 w-12 rounded-md" src={git} alt="git" srcSet="" />
                <p className="text-xl lg:text-3xl font-sans font-extralight ">Git</p>
              </div>
              <div
                className="js py-8 px-3 h-12  flex items-center justify-start gap-2 bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-md "
              >
                <img className="h-12 w-12 rounded-md" src={mysql} alt="mysql" srcSet="" />
                <p className="text-xl lg:text-3xl font-sans font-extralight ">MySQL</p>
              </div>
              <div
                className="js py-8 px-3 h-12  flex items-center justify-start gap-2 bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-md "
              >
                <img
                  className="h-12 w-12 rounded-md"
                  src={typescript}
                  alt="typescript"
                  srcSet=""
                />
                <p className="text-xl lg:text-3xl font-sans font-extralight ">
                  TypeScript
                </p>
              </div>
              <div
                className="js py-8 px-3 h-12  flex items-center justify-start gap-2 bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-md "
              >
                <img className="h-12 w-12 rounded-md" src={Figma} alt="figma" srcSet="" />
                <p className="text-xl lg:text-3xl font-sans font-extralight ">Figma</p>
              </div>
              <div
                className="js py-8 px-3 h-12  flex items-center justify-start gap-2 bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-md "
              >
                <img
                  className="h-12 w-12 rounded-md"
                  src={Tailwind}
                  alt="tailwind"
                  srcSet=""
                />
                <p className="text-xl lg:text-3xl font-sans font-extralight ">
                  Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
