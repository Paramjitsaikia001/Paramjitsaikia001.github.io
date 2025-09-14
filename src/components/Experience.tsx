import { Eye } from "lucide-react";
const Experience = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full w-full lg:w-[98%] rounded-xl  gap-4 my-12 bg-gradient-to-b to-[#ffffff00]  from-[#000000] py-12">
      <p
        className="font-semibold font-sans mx-12 bg-[#26ff00] text-[#000] rounded-full py-[0.3rem] px-[3rem] my-4"
      >
        Experience
      </p>
      <div className="achievement w-full flex flex-col items-center">
        <div className="certificates lg:w-[80%] w-[96%] flex flex-col gap-6">


          <div
            className="w-full rounded-xl lg:rounded-2xl h-full lg:h-[45vh] bg-[#f0f0f0] flex justify-center items-start lg:p-4"
          >
            <div className="details flex  w-full py-2 px-2 flex-col gap-2 items-start justify-start h-full">
              <h1 className="lg:text-6xl text-[2.5rem] font-[900] bg-gradient-to-r from-[#000d72] to-blue-500 bg-clip-text text-transparent ">
                DevQuest - Finalist
              </h1>
              <div className="flex flex-col justify-start lg:gap-2">
                <span className="text-xl flex items-center font-[500] gap-1">
                  <span>DevQuest Hackathon 2025</span>
                  <a
                    href="https://www.linkedin.com/in/paramjit-saikia-21615a237/overlay/1741782696023/single-media-viewer/?profileId=ACoAADru1bIBTm1tD7DWyqPznqeAC32GHi9BOaA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" group text-white hover:text-white lg:text-black  flex gap-1  bg-[#0037ff] lg:bg-transparent hover:bg-[#0037ff] rounded-4xl  transition-all duration-300 ease-in-out overflow-hidden items-center py-[0.1rem] px-3"
                  >
                    <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                      View Certificate
                    </p>
                      <p className="text-sm lg:hidden">
                      View Certificate
                    </p>
                    <Eye className="lg:text-[#0037ff] stroke-2  lg:stroke-3 group-hover:stroke-2 rounded-full transition-transform duration-300 ease-in-out group-hover:translate-x-2  group-hover:text-white" />
                  </a>
                </span>
                <span
                  className="text-center bg-black text-white w-fit  text-sm rounded-full py-[0.3rem] px-[0.8rem]"
                  
                >
                  Feb 2025 - Feb 2025
                </span>
              </div>
              <ul
                className="list-disc pl-5 text-sm lg:text-lg font-light py-2"
              >
                <li>
                  Hackathon organized by BVEC CODE CLUB, at TECHYUVA 2025
                  powered by BEAKBALL
                </li>
                <li>
                  Built a smart and user-friendly quiz and assessment platform
                </li>
                <li>Designed responsive UI with React</li>
                <li>Deployed application on Github</li>
              </ul>


              {/* stacks */}
              <p className="text-sm text-gray-600  flex flex-wrap gap-3">
                <span
                  className="rounded-full text-center border-1 text-[#000000] hover:text-white border-[#000000] hover:bg-[#000000] py-1 px-4"
                >
                  React
                </span>
                <span
                  className="rounded-full text-center border-1 text-[#000000] hover:text-white border-[#000000] hover:bg-[#000000] py-1 px-4"
                >
                  TailwindCSS
                </span>
                <span
                  className="rounded-full text-center border-1 text-[#000000] hover:text-white border-[#000000] hover:bg-[#000000] py-1 px-4"
                >
                  Node.js
                </span>
                <span
                  className="rounded-full text-center border-1 text-[#000000] hover:text-white border-[#000000] hover:bg-[#000000] py-1 px-4"
                >
                  Github
                </span>
                <span
                  className="rounded-full text-center border-1 text-[#000000] hover:text-white border-[#000000] hover:bg-[#000000] py-1 px-4"
                >
                  Google Analytics
                </span>
              </p>
            </div>
          </div>




           <div
            className="w-full rounded-2xl lg:h-[45vh] h-full bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] text-white flex justify-center items-start "
          >
           
            <div className="details flex w-full px-4 py-4 flex-col gap-2 items-start justify-start h-full">
              <h1 className="lg:text-6xl text-4xl font-[900] bg-gradient-to-r from-[#ffffff] via-[#00fffb] to-[#000000] bg-clip-text text-transparent">
                Full Stack Developer Intern
              </h1>
              <div className="flex flex-col justify-start gap-2">
                <span className="text-xl flex items-center font-[500] gap-1">
                  <span>Digital Media Notise Lab</span>
                  <a
                    href=""
                    className=" group hover:text-white lg:text-black  flex gap-2 justify-center bg-[#0037ff] lg:bg-transparent text-white  hover:bg-[#0037ff] rounded-4xl  transition-all duration-300 ease-in-out overflow-hidden items-center py-[0.1rem] px-3"
                  >
                    <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                      View Certificate
                    </p>
                      <p className="text-sm lg:hidden">
                      View Certificate
                    </p>
                    <Eye className="stroke-2  lg:stroke-3 group-hover:stroke-2 rounded-full transition-transform duration-300 ease-in-out group-hover:translate-x-2  group-hover:text-white" />
                  </a>
                </span>
                <span
                  className="text-center bg-white text-black w-fit  text-sm rounded-full py-[0.3rem] px-[0.8rem]"
                  
                >
                  Mar 2025 - May 2025
                </span>
              </div>
              <ul
                className="list-disc w-full text-sm pl-4  lg:text-lg font-light py-2"
              >
                <li>
                 Work as a Full Stack Developer Intern and team leader
                </li>
                <li>
                 Work on a secure all-in-one banking web application
                </li>
                <li>	Built features for account management, fund transfers, and transaction tracking.</li>
                <li>Deployed application on vercel(frontend) and render(backend)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2 flex flex-wrap gap-3">
                <span
                  className="rounded-full text-center border-1 text-[#ffffff] hover:text-black border-[#ffffff] hover:bg-[#ffffff] py-[0.3rem] px-[0.8rem]"
                  
                >
                  React
                </span>
                <span
                  className="rounded-full text-center border-1 text-[#ffffff] hover:text-black border-[#ffffff] hover:bg-[#ffffff]  py-[0.3rem] px-[0.8rem]"
                  
                >
                  TailwindCSS
                </span>
                <span
                  className="rounded-full text-center border-1 text-[#ffffff] hover:text-black border-[#ffffff] hover:bg-[#ffffff]  py-[0.3rem] px-[0.8rem]"
                  
                >
                  Github
                </span>
                <span
                  className="rounded-full text-center border-1 text-[#ffffff] hover:text-black border-[#ffffff] hover:bg-[#ffffff]  py-[0.3rem] px-[0.8rem]"
                  
                >
                  Node.js
                </span>
                 <span
                  className="rounded-full text-center border-1 text-[#ffffff] hover:text-black border-[#ffffff] hover:bg-[#ffffff]  py-[0.3rem] px-[0.8rem]"
                  
                >
                  Express.js
                </span>
                  <span
                  className="rounded-full text-center border-1 text-[#ffffff] hover:text-black border-[#ffffff] hover:bg-[#ffffff]  py-[0.3rem] px-[0.8rem]"
                  
                >
                  MongoDB
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
