import Navbar from "./components/navber";
import PortfolioModel from "./assets/portfolio-model.png";
import Project from "./components/project";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./App.css";
import { useEffect, useRef } from "react";
import Skills from "./components/skills";
import Achievement from "./components/Experience";
import Contact from "./components/contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import { Twitter, Github, Instagram, Linkedin } from "lucide-react";
function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".components", {
      top: "30%",
      duration: 1,
      scrollTrigger: {
        trigger: ".components",
        start: "top 98%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
  }, []);

  const boundingRef = useRef<DOMRect | null>(null);

  return (
    <section
      id="home"
      className="bg-[var(--color-primary)] min-h-screen w-full flex flex-col items-center overflow-hidden"
    >
      <Navbar />
      <ToastContainer className=" z-[9999]" position="top-right" />
      <div className="hero-section h-[100vh] w-[100vw] bg-radial from-[#FFFFFF] from-0% via-[#7d9dfe] via-0% to-[#0020C2] to-100%  items-center flex flex-col sticky z-2">
        <div className=" w-full lg:w-[98%] h-full flex flex-col md:flex-row justify-start items-center">
          
          
          
          <div className="flex  justify-center items-center h-1/2  md:h-full w-full md:w-1/2">
            <div className="flex flex-col gap-4 lg:gap-0 justify-center items-center w-full lg:w-[90%] h-[60%]">
              <div className="intro flex flex-col w-full md:w-full  items-center  h-auto justify-start">
                <h2 className="font-mono  ">
                  HELLO!
                  <span className="animate-hello">👋</span>
                </h2>
                <div className="flex flex-col  w-[100%]">
                  <div className="flex w-full justify-center gap-2 text-end items-end  sm:bg-none text-[12vw] sm:text-[15vw]  md:text-[8vw] font-stretch-56% font-extrabold leading-none">
                    <h1 className="flex flex-col items-start h-full space-y-0 leading-none">
                      <span className="font-serif font-extralight text-[1rem] md:text-[2rem] text-[#2dcdf1] leading-none">
                        I'm
                      </span>
                      <span className="tracking-tight leading-none bg-gradient-to-br from-[#ffffff] to-[#00e1ff] bg-clip-text text-transparent">
                        PARAMJIT
                      </span>
                    </h1>
                    <h1 className="text-[#ffffff]">SAIKIA</h1>
                  </div>
                </div>
              </div>

              <div className=" font-extralight h-full text-center items-center flex flex-col justify-center lg:text-start">
                <h2 className="font-semibold text-[6vw] md:text-3xl text-[#fff] w-full">About me</h2>
                <p className=" text-[3vw] md:text-lg font-light text-[#ffffff] w-[90%] md:w-full">
                  I'm a passionate developer with a knack for creating dynamic
                  and responsive web applications. My journey in tech has been
                  fueled by curiosity and a desire to solve real-world problems.
                </p>
              </div>

              <div className="font-mono  w-full lg:items-start items-center justify-center">
                <div className="social-media flex  md:flex-row lg:justify-start justify-center gap-8 md:gap-2 w-full md:h-full h-[3rem] text-[1rem] items-end">
                  <a
                    href="https://www.linkedin.com/in/paramjit-saikia-21615a237/"
                    target="_blank"
                    className="font-sans group hover:text-white text-black  flex md:gap-1 bg-[#0037ff]  md:bg-transparent hover:bg-[#ffffff] h-full lg:h-fit lg:w-fit rounded-4xl hover:rounded-4xl transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer lg:px-6 p-4"
                  >
                    <p className="text-md transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden group-hover:text-[#0037ff]">
                      LinkedIn
                    </p>
                    <Linkedin className="text-[#ffffff] group-hover:text-[#0037ff] md:w-8 md:h-8 w-4 h-4 stroke-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                  </a>

                  <a
                    href="https://github.com/Paramjitsaikia001"
                    target="_blank"
                    className="font-sans group hover:text-white text-black  flex md:gap-1 bg-black  md:bg-transparent hover:bg-[#000000] h-full lg:h-fit lg:w-fit rounded-4xl hover:rounded-4xl transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer lg:px-6 p-4"
                  >
                    <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                      Github
                    </p>
                    <Github className="text-white md:w-8 md:h-8 w-4 h-4 stroke-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-white" />
                  </a>

                  <a
                    href="https://x.com/Paramjit_saikia"
                    target="_blank"
                    className="font-sans group hover:text-white text-black  flex md:gap-1 bg-black md:bg-transparent hover:bg-[#000000] h-full lg:h-fit lg:w-fit rounded-4xl hover:rounded-4xl transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer lg:px-6 p-4"
                  >
                    <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                      Twitter
                    </p>
                    <Twitter className="text-white md:w-8 md:h-8 w-4 h-4 stroke-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-white" />
                  </a>

                  <a
                    href="https://www.instagram.com/paramjit_saikia/"
                    target="_blank"
                    className="font-sans group hover:text-white text-black  flex md:gap-1 bg-gradient-to-r  md:bg-none hover:bg-gradient-to-r from-[#ff00ee] to-[#ff81f2]  h-full lg:h-fit lg:w-fit rounded-4xl hover:rounded-4xl transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer lg:px-6 p-4"
                  >
                    <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                      Instagram
                    </p>
                    <Instagram className="text-white md:w-8 md:h-8 w-4 h-4 stroke-2  transition-transform duration-300 ease-in-out group-hover:translate-x-2  group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="second-intro flex flex-col md:flex-row items-center justify-between md:justify-center lg:items-end h-1/2 md:h-full lg:w-1/2 w-[90%] p-0 m-0  ">
            <div
              onMouseLeave={() => (boundingRef.current = null)}
              onMouseEnter={(ev) => {
                boundingRef.current = ev.currentTarget.getBoundingClientRect();
              }}
              onMouseMove={(ev) => {
                if (!boundingRef.current) return;
                const x = ev.clientX - boundingRef.current.left;
                const y = ev.clientY - boundingRef.current.top;
                const xPercentage = x / boundingRef.current.width;
                const yPercentage = y / boundingRef.current.height;
                const xRotation = (xPercentage - 0.5) * 30;
                const yRotation = (0.5 - yPercentage) * 30;

                ev.currentTarget.style.setProperty(
                  "--x-rotation",
                  `${yRotation}deg`
                );
                ev.currentTarget.style.setProperty(
                  "--y-rotation",
                  `${xRotation}deg`
                );
                ev.currentTarget.style.setProperty(
                  "--x",
                  `${xPercentage * 100}%`
                );
                ev.currentTarget.style.setProperty(
                  "--y",
                  `${yPercentage * 100}%`
                );
              }}
              className="   w-[99%]  sm:w-[70%] h-fit md:w-fit bg-gradient-to-b  from-[#00fffb] via-[#fbffed]  to-[#ffffff]  flex items-end rounded-xl md:rounded-2xl lg:rounded-4xl hover:shadow-2xl transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))] lg:mb-12"
            >
              <img
                className="w-[100%]  h-full  top-0 lg:h-[70%] "
                src={PortfolioModel}
                alt="profile"
              />
            </div>
          </div>


        </div>
      </div>
      <div className="components bg-[#011e6300] top-[100vh] h-full absolute  w-full  z-[10] ">
        <div className="components-items bg-[#011b5d]   w-full flex flex-col gap-[4rem] z-[11]">
          <section id="projects" className=" h-full lg:h-screen  flex justify-center">
            <Project />
          </section>

          <section id="skills" className=" h-full lg:h-screen  flex justify-center">
            <Skills />
          </section>

          <section id="experience" className=" h-full   flex justify-center">
            <Achievement />
          </section>

          <section
            id="contact"
            className="contactclass h-full lg:h-screen  flex items-center justify-center"
          >
            <Contact />
          </section>
        </div>
        <section className="h-screen w-full bg-transparent"></section>
      </div>

      <Footer />
    </section>
  );
}

export default App;
