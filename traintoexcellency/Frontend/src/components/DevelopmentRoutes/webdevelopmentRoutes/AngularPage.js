import { useState } from "react";

export default function AngularPage({ closeAngular, Done }) {
    const Nexthandler = () => {
        Done();
        closeAngular();
    }
    const [isFullScreen, setFullScreen] = useState("left-[60%]");
    const fullscrenHandler = () => {
        if (isFullScreen === "left-[60%]") {
            setFullScreen("left-[20%]");
        } else {
            setFullScreen("left-[60%]");
        }
    }
    return (
        <section className={`transition-transform duration-300 ease-in-out fixed right-0 ${isFullScreen} top-0 bottom-0 overflow-y-scroll scrollbar scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack scrollbar-bg-scrollbarBg inset-0 bg-[#0e1542] flex justify-center items-center z-50 m-0 h-[100%] pt-6`} style={{ boxShadow: "0 0 10px 0px #000000" }}>
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    {isFullScreen === "left-[60%]" ? (
                        <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer" onClick={fullscrenHandler}>
                            open_in_full
                        </span>
                    ) : (
                        <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer" onClick={fullscrenHandler}>
                            close_fullscreen
                        </span>
                    )}
                    <span onClick={closeAngular} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Angular.js</h2>
                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Angular.js</span> is a popular JavaScript framework for building dynamic web applications. Developed and maintained by Google, Angular provides a comprehensive solution for building single-page applications with a strong emphasis on performance and maintainability.</p>

                    <p>Angular's component-based architecture and powerful data binding capabilities make it easy to build complex and interactive user interfaces. It also includes a wide range of built-in features, such as dependency injection, routing, and form validation, which help streamline the development process.</p>

                    <p>Learning Angular.js is highly beneficial for web developers due to its widespread adoption in the industry. Many companies, from startups to large enterprises, use Angular for their web applications, making it a valuable skill in the job market.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Resources to become an expert in Angular.js:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://angular.io/docs" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Angular Documentation</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.freecodecamp.org/learn/front-end-libraries/angular/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Angular Course - freeCodeCamp</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/3qBXWUpoPHo" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Angular Crash Course - Traversy Media</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://youtu.be/3qBXWUpoPHo" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Angular Tutorial for Beginners - freeCodeCamp.org</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeAngular} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}