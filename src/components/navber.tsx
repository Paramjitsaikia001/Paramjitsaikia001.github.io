import { MoveUpRight, House } from "lucide-react";
import gsap from "gsap";
import { useEffect } from "react";
const Navbar = () => {
 useEffect(() => {
  const navbar = document.querySelector(".navbar");

  const handleScroll = () => {
    if (window.scrollY > 10) {
      gsap.to(navbar, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      gsap.to(navbar, {
        opacity: 0,
        y: -50, // moves navbar up when hidden
       
        duration: 0.6,
        ease: "power3.in",
      });
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <nav className="navbar  border-[#0F172A] backdrop-blur-xl border-1 bg-[#ffffff4c] h-[3.5rem] md:h-[8%]  w-[70%] flex justify-between  md:justify-evenly items-center rounded-full fixed top-6  z-[50] overflow-hidden opacity-0">
      <a href="#home" className="h-full  md:hidden flex items-center ml-6">
        <House className="h-[60%] w-auto stroke-[.06rem]" />
      </a>
      <a
        href="#home"
        className=" w-1/6 hidden md:block text-center cursor-pointer font-sans text-sm font-light"
      >
        HOME
      </a>
      <a
        href="#projects"
        className=" w-1/6 hidden md:block text-center cursor-pointer font-sans text-sm font-light"
      >
        PROJECTS
      </a>
      <a
        href="#skills"
        className=" w-1/6 hidden md:block text-center cursor-pointer font-sans text-sm font-light"
      >
        SKILLS
      </a>
      <a
        href="#experience"
        className=" w-1/6 hidden md:block text-center cursor-pointer font-sans text-sm font-light"
      >
        EXPERIENCE
      </a>
      <a
        href="#contact"
        className=" w-1/6 hidden md:block text-center cursor-pointer font-sans text-sm font-light"
      >
        CONTACT
      </a>
      <a
        href="/PRMJTS/ParamjitSaikia_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full w-fit md:w-1/6 items-center cursor-pointer font-sans text-sm font-light flex justify-center "
      >
        <div className="group  cursor-pointer border-1 border-[#0F172A]  flex items-center overflow-hidden justify-center  gap-2 w-[90%] bg-[#0877ff] rounded-full h-[70%] relative before:absolute before:-translate-y-[-100%]  left-0 before:w-[12rem] before:h-[12rem] before:bg-[#00ff2f] before:rounded-full before:transition-transform before:duration-200 before:z-[1]  hover:before:-translate-y-0 before:content-[''] hover:rounded-0 hover:border-1 hover:border-white px-1">
          <p className="font-bold relative  text-[#0F172A] group-hover:hidden">
            RESUME
          </p>
          <p className="font-bold text-black  group-hover:z-[22] absolute z-[-1] ">
            DOWNLOAD
          </p>
          <MoveUpRight
            color="black"
            strokeWidth={3}
            className="relative group-hover:hidden"
          />
        </div>
      </a>
    </nav>
  );
};

export default Navbar;
