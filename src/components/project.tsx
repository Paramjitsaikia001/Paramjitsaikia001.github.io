import { Github, Eye,} from "lucide-react";
const Project = () => {


  return (
    <section className="flex flex-col items-center justify-center h-auto  lg:w-[98%] rounded-t-xl bg-gradient-to-b from-[#0173be] from-5% to-[#f7f7f700] px-2 gap-4 relative overflow-x-hidden my-12">

      <p
        className="font-light font-sans mx-12 bg-[#000000] text-[#fff] rounded-full"
        style={{ padding: "0.3rem 3rem ", margin: "3rem 1rem " }}
      >
        Projects
      </p>
      <div className="projects w-[100%] lg:w-[90%] h-full flex justify-center items-center relative">
 

        <div className="projects-items w-full flex flex-col lg:flex-row gap-5 h-full lg:h-fit">
         
         
          <div className="flex flex-col h-full lg:w-1/2 items-center w-full gap-4">
            
            <div
              className="project-item w-full text-white gap-4  flex lg:flex-row flex-col rounded-lg lg:rounded-lg   bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] py-[1rem] px-4 lg:px-[2rem] z-[11]"
            >
              <div className="details w-full lg:w-[75%]">
                <div className="tittle-date w-full flex gap-2 lg:gap-1 items-end h-auto">
                  <h1 className="lg:text-3xl text-xl font-semibold">Banking-Platform</h1>
                  <span
                    className="align-text-bottom bg-black text-white lg:bg-transparent hover:bg-black hover:text-white lg:text-black text-[0.5rem] md:text-sm rounded-full py-[0.2rem] px-[0.5rem]"
                  >
                    Mar 2025 - July 2025
                  </span>
                </div>
                <p className=" text-md font-extralight ">
                  A secure all-in-one banking web application built with
                  Node.js, Express, MongoDB, and Firebase that enables users to
                  manage accounts, transfer funds, and track transactions.
                  Features include authentication, real-time balance updates,
                  and a user-friendly dashboard.
                </p>
              </div>
              <div className="links flex lg:flex-col items-center justify-start  lg:justify-center gap-2 w-full lg:w-[20%]">
                <a
                  href="https://banking-platform-three.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" group  text-black  flex  gap-1  bg-[#ffff] lg:bg-none hover:bg-[#ffffff] rounded-4xl  transition-all duration-300 ease-in-out overflow-hidden items-center py-2 px-4"
                >
                  <p className="text-md transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                    View Project
                  </p>
                  <p className="text-md lg:hidden">
                    View Project
                  </p>
                  <Eye className="text-black stroke-2 rounded-full transition-transform duration-300 ease-in-out  group-hover:translate-x-2  " />
                </a>
                <a
                  href="https://github.com/Paramjitsaikia001/banking-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" group  text-black  flex bg-[#ffff] lg:bg-none hover:bg-[#ffffff] rounded-4xl gap-1 transition-all duration-300 ease-in-out overflow-hidden items-center py-2 px-3"
                >
                  <p className="text-md transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                    Github
                  </p>
                   <p className="text-md lg:hidden">
                    Github
                  </p>
                  <Github className="text-black stroke-2  rounded-full transition-transform duration-300 ease-in-out group-hover:translate-x-2  " />
                </a>
              </div>
            
            
            </div>
            
            
            
            <div
              className="project-item  bg-[#ffff]  rounded-lg shadow-md  flex flex-col lg:flex-row py-[1rem] px-[1rem] lg:px-[2rem] gap-2"
            >
              <div className="details lg:w-[78%]">
                <div className="tittle-date w-full flex gap-2 lg:gap-1 items-end h-auto">
                  <h1 className="lg:text-4xl text-2xl font-semibold">ExamEase</h1>
                  <span
                    className="align-text-bottom bg-black text-white lg:bg-transparent hover:bg-black hover:text-white lg:text-black text-sm rounded-full py-[0.2rem] px-[0.5rem]"
                  >
                    Feb 2025 - Feb 2025
                  </span>
                </div>
                <p className="">
                  A web platform that helps teachers create MCQ/MSQ question
                  papers with customizable templates, automated evaluation, and
                  secure student access. Features include timed exams, unique
                  access codes, and instant result delivery to teachers via
                  email.
                </p>
              </div>
              <div className="links flex lg:flex-col items-center justify-start lg:justify-center gap-2 lg:w-[20%]">
                <a
                  href="https://paramjitsaikia001.github.io/ExamEase/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" group hover:text-white text-white lg:text-black  flex  bg-[#000] lg:bg-none hover:bg-[#000000] rounded-4xl gap-1 transition-all duration-300 ease-in-out overflow-hidden items-center py-2 px-4"
                >
                  <p className="text-md transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                    View Project
                  </p>
                   <p className="text-md lg:hidden">
                    View Project
                  </p>
                  <Eye className=" stroke-2 lg:text-white rounded-full transition-transform duration-300 ease-in-out group-hover:translate-x-2  group-hover:text-white" />
                </a>
                <a
                  href="https://github.com/Paramjitsaikia001/ExamEase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" group hover:text-white bg-[#000] lg:bg-none text-white lg:text-black  flex  hover:bg-[#000000] rounded-4xl gap-1 transition-all duration-300 ease-in-out overflow-hidden items-center py-2 px-4"
                >
                  <p className="text-md transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                    Github
                  </p>
                   <p className="text-md lg:hidden">
                    Github
                  </p>
                  <Github className=" stroke-2 lg:text-white rounded-full transition-transform duration-300 ease-in-out group-hover:translate-x-2  group-hover:text-white" />
                </a>
              </div>
            </div>

          </div>
         
         
          <div
            className="project-item bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] lg:w-1/2  rounded-lg flex flex-col items-start justify-center gap-2 py-3 px-2 lg:py-4 lg:px-8"
          >
            <div className="tittle-date w-full flex flex-col gap-2">
              <h1 className="text-[12vw] lg:text-6xl font-[800] lg:font-semibold">CoworkAssam</h1>
              <span
                    className=" w-fit align-text-bottom bg-white text-black lg:bg-transparent hover:bg-white hover:text-black lg:text-white text-sm rounded-full py-[0.2rem] px-[0.5rem]"
                  >
                Mar 2025 - May 2025
              </span>
            </div>
            <p className="text-[5vw] lg:text-2xl font-extralight">
              A collaborative platform designed to help teams in Assam manage
              projects, communication, and tasks efficiently. Built with React,
              TailwindCSS, Node.js, Express, and MongoDB, it supports real-time
              collaboration and scalability.
            </p>
            <div className="links flex  items-center justify-center gap-2">
              <a
                href="https://coworkassam.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-black  flex bg-[#ffffff] hover:bg-[#000000] rounded-4xl gap-1"
                style={{ padding: "10px 15px" }}
              >
                <p className=" font-semibold">View Project</p>
                <Eye className=" stroke-2 " />
              </a>
              <a
                href="https://github.com/sum1t-here/coworkassam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-black  flex bg-[#ffffff] hover:bg-[#000000] rounded-4xl gap-3"
                style={{ padding: "10px 15px" }}
              >
                <p className=" font-semibold">Code</p>
                <Github className="stroke-2 " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
