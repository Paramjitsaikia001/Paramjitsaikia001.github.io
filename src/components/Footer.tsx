
const Footer = () => {
  return (
    <section className="footer bg-linear-120 from-[#001062] via-[#002aff] to-[#9ebdff] text-white  fixed w-full h-screen z-[1] flex flex-col justify-between pt-48">
      <div className="middle px-12 gap-8 lg:px-[12rem] flex lg:flex-row flex-col justify-between w-full">
        <div className="profile-details flex flex-col gap-1 text-md font-semibold">
          <div className="flex flex-col gap-2 font-extralight">
           <p className="text-xl lg:text-2xl font-semibold text-[#00d5ff]">Want to create your dream website?</p>
           <p className="text-lg text-[#8b95ff] italic border-b-1 border-[#8b95ff] w-fit">Contact me in this Email:</p>
            <span className="">prmjtsai@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-1">
        <p>Full Stack Web Developer</p>
        <h1 className="lg:text-[12rem] text-[13vw] font-stretch-80% tracking-tight leading-none font-[900] flex text-black justify-center items-center text-center border-b-2 border-black pb-1 ">
          PARAMJIT SAIKIA
        </h1>
        <div className="mb-8 text-sm flex justify-evenly w-full">
          <p>Created by Paramjit Saikia</p>
          <p>© 2024 All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
