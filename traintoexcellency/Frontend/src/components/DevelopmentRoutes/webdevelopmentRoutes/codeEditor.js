
export default function CodeEditor({ closeEditor, Done }) {
    const Nexthandler = () => {
        Done();
        closeEditor();
    }
    return (
        <section className="fixed right-0 left-[20%] md:left-[60%] top-0 bottom-0 overflow-scroll inset-0 bg-white flex justify-center items-center z-50 m-0 h-[100%] pt-12">
            <div className="bg-white pb-0 px-4  h-[100%]">
                <h2 className="text-2xl mb-4 bg-[#00d9ff] w-[100%] rounded-md p-2">Code Editor</h2>
                <div className="flex flex-col gap-1">
                    <p>A <span className="text-[#09282e] font-bold">Code editor</span> is a software application designed to help developers write, edit, and debug code more efficiently. It provides features like syntax highlighting, auto-completion, and indentation, which make coding faster and easier.
                    </p>
                    <p> For web development, code editors typically support HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.js , everything we need for it. They often come with features like live preview, Git integration, and extensions to debug or enhance functionality.
                    </p>
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">Popular Code Editor for Web development :</p>
                        <div className="flex flex-col gap-4">
                            <div className="vscode my-4 flex flex-col gap-2 ">
                                <h3 className="font-bold text-lg">Visual Studio Code (VS Code)
                                    <span className="text-gray-700">Recommanded</span>:
                                </h3>
                                <a href="https://code.visualstudio.com/" target="_blank">
                                    <span className="text-blue-700"> Download VS Code</span></a>
                                <p>Set Up  Tutorial:</p>
                                <p className="flex gap-3 items-center">
                                    <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                    <a href="https://code.visualstudio.com/docs/editor/vscode-web" target="_blank">
                                        <span className="text-blue-700 underline">Visual Studio Code for the Web</span>
                                    </a>
                                    <span>Original</span>
                                </p>
                                <div className="flex gap-3 items-center">
                                    <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                        play_arrow
                                    </span>
                                    <a href="https://youtu.be/mL1IcxIUd5Y?si=Txtd9dxLCn0CRdYP" target="_blank">
                                        <span className="text-blue-700 underline">Setup VS Code for Web Development by Skillbuild Trainning</span>
                                    </a>
                                </div>
                            </div>


                            <div className="SublimeText my-4 flex flex-col gap-2">
                                <h3>Sublime Text:
                                </h3>
                                <a href="https://www.sublimetext.com/" target="_blank">
                                    <span className="text-blue-700"> Download Sublime Text</span></a>
                                <p>Set Up  Tutorial:</p>
                                <div className="flex gap-3 items-center">
                                    <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                        play_arrow
                                    </span>
                                    <a href="https://youtu.be/J72ZRoQY1mI?si=serrXqlqM39gsa1p" target="_blank">
                                        <span className="text-blue-700 underline">Building a Website in 2023 With Sublime</span>
                                    </a>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                        play_arrow
                                    </span>
                                    <a href="https://youtu.be/sH0-1rQJu3E?si=T8n4oF6eLf-tV_YS" target="_blank">
                                        <span className="text-blue-700 underline">How to Run HTML in Sublime Text | Quick Tutorial</span>
                                    </a>
                                </div>
                            </div>


                            <div className="Atom my-4 flex flex-col gap-2">
                                <h3>Atom:
                                </h3>
                                <a href="https://atom-editor.cc/" target="_blank">
                                    <span className="text-blue-700">Download Atom</span></a>
                                <p>Set Up  Tutorial:</p>
                                <div className="flex gap-3 items-center">
                                    <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                        play_arrow
                                    </span>
                                    <a href="https://youtu.be/WWwBQQOGllo?si=ZsTdCwGTncZS4AqP" target="_blank">
                                        <span className="text-blue-700 underline">Atom Editor Tutorials by Syntax</span>
                                    </a>
                                </div>
                            </div>


                            <div className=" WebStorm my-4 flex flex-col gap-2">
                                <h3>Sublime Text:
                                </h3>
                                <a href="https://www.jetbrains.com/webstorm/" target="_blank">
                                    <span className="text-blue-700"> Download  WebStorm</span></a>
                                <p>Set Up  Tutorial:</p>
                                <div className="flex gap-3 items-center">
                                    <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                        play_arrow
                                    </span>
                                    <a href="https://youtu.be/qMGpLDy_qTM?si=pk5WjY8aKjOrL2Su" target="_blank">
                                        <span className="text-blue-700 underline">How to install & Setup WebStorm For Web Development </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col">
                             <h2>Online Code Editors:</h2>
                             <div className="flex flex-col gap-3">
                                <div className="flex gap-2">
                                    <a href="https://codepen.io/" target="_blank">
                                        <h4 className="text-blue-700 text-lg- font-bold">CodePen:</h4>
                                    </a>
                                    <p>For experimenting with HTML, CSS, and JavaScript in an online playground.</p>
                                </div>
                                <div className="flex gap-2">
                                    <a href="https://jsfiddle.net/" target="_blank">
                                        <h4 className="text-blue-700 text-lg- font-bold">JSFiddle:</h4>
                                    </a>
                                    <p> Ideal for quick prototyping and testing.
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <a href="https://replit.com/" target="_blank">
                                        <h4 className="text-blue-700 text-lg- font-bold">Replit:</h4>
                                    </a>
                                    <p> A collaborative browser-based coding platform.
                                    </p>
                                </div>

                             </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={closeEditor} className=" px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className=" px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
