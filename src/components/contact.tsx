import {
  Mail,
  MapPinned,
  Instagram,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            autoClose: 2000,
            // removes the built-in progress bar
            customProgressBar: true,
          });
        },
        () => {
          toast.error("Failed to send message, try again.");
          console.log(
            form.current?.user_name.value,
            form.current?.user_email.value,
            form.current?.user_portfolio.value,
            form.current?.message.value
          );
        }
      );
  };

  return (
    <section
      className="
    w-full h-full lg:w-[85%]  mb-[10rem] lg:my-[10rem]
  "
    >
      <div
        className="flex lg:flex-row flex-col gap-3 justify-between items-end lg:items-center h-full w-full px-1 py-1 "
      >
        <div className="info flex flex-col items-start justify-start lg:justify-start bg-gradient-to-t w-[98%] lg:w-1/2 from-[#006aff] to-[#f0f0f0] rounded-xl lg:rounded-2xl shadow-2xl h-full lg:h-[80%] px-2 py-3 lg:px-8 gap-6">
          <h1 className="lg:text-9xl text-[15vw] font-stretch-90% font-[900] bg-gradient-to-r from-[#000000] via-[#002fff] to-blue-500 bg-clip-text text-transparent ">
            Contact Me
          </h1>
          <div className="details flex flex-col gap-4">
            <h1 className="lg:text-6xl text-blue-900 text-[10vw] font-[800]">PARAMJIT SAIKIA</h1>
            <div className="profile-details flex flex-col gap-1 text-md font-semibold">
              <p className="flex gap-2 font-extralight">
                <Mail />
                <span className="italic">prmjtsai@gmail.com</span>
              </p>
              <p className="flex gap-2 font-extralight">
                <MapPinned />
                <span className="italic">New York, USA</span>
              </p>
            </div>
          </div>
          <div className="social-media flex justify-evenly w-full h-[8rem]">
            <a
              href="https://www.linkedin.com/in/paramjit-saikia-21615a237/"
              target="_blank"
              className=" group hover:text-white text-white lg:text-black justify-center  flex md:gap-2 gap-1 bg-[#0037ff]  hover:bg-[#0037ff] rounded-lg lg:rounded-2xl hover:rounded-4xl  transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer h-fit p-4  lg:px-6"
            >
              <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                LinkedIn
              </p>
              <p className="text-sm text-white hidden md:block lg:hidden">
                LinkedIn
              </p>
              <Linkedin className="lg:text-white stroke-1  lg:stroke-3 group-hover:stroke-2  transition-transform duration-300 ease-in-out group-hover:translate-x-2  group-hover:text-white" />
            </a>

            <a
              href="https://github.com/Paramjitsaikia001"
              target="_blank"
              className=" group hover:text-white text-black  flex md:gap-2 bg-[#ffffff]  hover:bg-[#000000] lg:rounded-2xl hover:rounded-4xl rounded-full transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer h-fit p-4  lg:px-6"
            >
              <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                Github
              </p>
              <p className="text-sm text-black hidden md:block lg:hidden">
                Github
              </p>
              <Github className="text-[#000000] fill-black lg:fill-none stroke-2 lg:stroke-3 group-hover:stroke-2  transition-transform duration-300 ease-in-out group-hover:translate-x-2  group-hover:text-white " />
            </a>

            <a
              href="https://x.com/Paramjit_saikia"
              target="_blank"
              className=" group hover:text-white text-black  flex md:gap-2 bg-black hover:bg-[#000000] rounded-md lg:rounded-xl hover:rounded-4xl  transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer h-fit p-4  lg:px-6"
            >
              <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                Twitter
              </p>
              <p className="text-sm text-white hidden md:block lg:hidden">
                Twitter
              </p>
              <Twitter className=" text-white  stroke-3 group-hover:stroke-2  transition-transform duration-300 ease-in-out group-hover:translate-x-2  group-hover:text-white" />
            </a>

            <a
              href="https://www.instagram.com/paramjit_saikia/"
              target="_blank"
              className=" group hover:text-white text-black  flex md:gap-2 bg-gradient-to-r  hover:bg-gradient-to-r from-[#ff00ee] to-[#ff81f2] rounded-4xl md:rounded-4xl  lg:rounded-2xl hover:rounded-4xl transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer h-fit p-4  lg:px-6"
            >
              <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                Instagram
              </p>
              <p className="text-sm text-white hidden md:block lg:hidden">
                Instagram
              </p>
              <Instagram className=" text-white  stroke-3 group-hover:stroke-2  transition-transform duration-300 ease-in-out group-hover:translate-x-2  group-hover:text-white" />
            </a>
          </div>
        </div>

        <div className="drop-a-message rounded-xl lg:rounded-2xl h-[80%]  bg-[#ffffff6e] border-1 border-[#ffffff81] backdrop-blur-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] text-white flex flex-col justify-start items-start gap-8 p-4 w-[98%]  lg:w-[50%] lg:px-8">
          <h1 className="lg:text-8xl text-[15vw] font-bold">
            Drop a{" "}
            <span className="bg-gradient-to-r from-[#51ff00] to-[#ffffff] bg-clip-text text-transparent">
              Message
            </span>
          </h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-center justify-center w-full gap-4"
          >
            <div className="inputs flex lg:flex-row flex-col gap-2 w-full">
              <div className="input flex flex-col gap-2 lg:w-1/2">
                <input
                  type="text"
                  name="user_name"
                  className="border-2 border-gray-300 text-md text-white rounded-lg focus:outline focus:ring-[#ffffff] focus:border-[#ffffff] block w-full "
                  style={{ padding: "0.5rem 1rem" }}
                  placeholder="Your Nickname"
                />

                <input
                  type="email"
                  name="user_email"
                  className="border-2 border-gray-300 text-md text-white rounded-lg focus:outline focus:ring-[#ffffff] focus:border-[#ffffff] block w-full "
                  style={{ padding: "0.5rem 1rem" }}
                  placeholder="Your Email"
                />

                <input
                  type="text"
                  name="user_portfolio"
                  className="border-2 border-gray-300 text-md text-white rounded-lg focus:outline focus:ring-[#ffffff] focus:border-[#ffffff] block w-full "
                  style={{ padding: "0.5rem 1rem" }}
                  placeholder="Your Portfolio website"
                />
              </div>
              <textarea
                name="message"
                className="border-2 border-gray-300 text-md text-white rounded-lg focus:outline focus:ring-[#ffffff] focus:border-[#ffffff] block lg:w-1/2 "
                style={{ padding: "0.5rem 1rem" }}
                rows={4}
                placeholder="Type something for me...."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 cursor-pointer hover:shadow-[0_4px_6px_#000] text-white rounded-xl "
              style={{ padding: "1rem 1rem" }}
            >
              Send a message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
