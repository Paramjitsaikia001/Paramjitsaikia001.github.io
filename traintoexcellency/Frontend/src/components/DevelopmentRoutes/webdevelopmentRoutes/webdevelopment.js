
import { useState } from "react";
import CodeEditor from "./codeEditor";
import Hyperpage from "./Htmlpage";
import Header from "../../Header";
export default function WebDevelopment() {
    const [showCodeEditor, setCodeEditor] = useState(false);
    const [showHTML, setHTML] = useState(false);
    const [CodeEditorColorLine, setCodeEditorColorLine] = useState("bg-gray-700");
    const codeeditorhandler = () => {
        setCodeEditor(!showCodeEditor);
    };
    const HTMLhandler = () => {
        setHTML(!showHTML);
    }
    const ChangeCodeEditorLineColor = () => {
        setCodeEditorColorLine("bg-blue-700");
    }
    return (
        <section className="relative md:w-[90%] w-[100%] flex flex-col justify-center items-center gap-8 overflow-hidden">

            {showCodeEditor && <CodeEditor closeEditor={() => setCodeEditor(false)} Done={ChangeCodeEditorLineColor} />}
            {showHTML && <Hyperpage closeHTML={() => setHTML(false)} />}

            <Header />
            <div className="flex justify-center text-white text-xl border-b-2 border-white md:w-[90%] w-[100%]">
                <h1>FULL STACK WEB DEVELOPMENT</h1>
            </div>
            <div className="  flex flex-col justify-center items-center md:w-[90%] w-[100%] lg:p-0 p-[20px]">
                <div className=" codeeditor flex w-[100%] gap-2 md:gap-8 justify-center ">
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Code editor
                            A code editor is a software application designed specifically for editing source code. It provides various features to help developers write, edit, and manage code efficiently. Here are some popular code editors: Visual Studio Code (VS Code), Sublime Text, Atom, etc.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-[5rem] bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>A code editor is a software application designed specifically for writing, editing, and managing source code.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <div className={`verticalLine h-[6rem]  w-1 border-none ${CodeEditorColorLine}`}></div>
                        <div onClick={codeeditorhandler} className="h-12 border-4 border-blue-600 rounded-3xl w-40 p-3  items-center flex justify-center bg-blue-600 cursor-pointer">Code Editor</div>
                        <div className={`verticalLine h-[6rem]  w-1 border-none ${CodeEditorColorLine}`}></div>
                    </div>
                </div>
                <div className="horizontalLine flex h-0 w-[100%] items-center justify-center border-none rounded-br-lg rounded-tl-xl">
                    <div className={`hidden md:block h-1 w-[28%]  border-none ${CodeEditorColorLine} rounded-br-lg rounded-tl-xl`}></div>
                    <div className="p-[0.2rem] border-2 border-white flex items-center justify-center w-[100%] md:w-[10%] text-white text-lg"><h4>Front-end</h4></div>
                    <div className={`hidden md:block h-1 w-[28%]  border-none ${CodeEditorColorLine}  rounded-br-lg rounded-tl-xl`}></div>
                </div>
                <div className="HTML flex gap-8 w-[100%] justify-center items-center  mr-0 ">
                    <div className="flex flex-col justify-center items-center">
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600"></div>
                        <div
                            onClick={HTMLhandler}
                            className="h-12 border-none rounded-3xl w-40 p-3 bg-slate-500 items-center flex justify-center hover:bg-yellow-400 cursor-pointer">HTML</div>
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600"></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p >
                            HTML (HyperText Markup Language) is the standard language used to create and design web pages. Whether you're building a simple personal blog or a complex web application, HTML is an essential skill for any web developer.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>HTML (HyperText Markup Language) is the standard markup language used to create and design web pages.
                        </p>
                    </div>
                </div>
                <div className="horizontalLine h-1 w-[70%] bg-gray-600 border-none rounded-bl-lg rounded-tr-xl"></div>

                <div className="CSS flex w-[100%] gap-8 justify-center items-center">
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. It controls the layout, colors, fonts, and overall visual appearance of web pages, allowing developers to create visually appealing and responsive designs.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and design of HTML documents, including layout, colors, and fonts.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-40 p-3 bg-slate-500 items-center flex justify-center hover:bg-green-300 cursor-pointer">CSS</div>
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600 border-none"></div>
                    </div>
                </div>


                <div className="horizontalLine h-1 w-[70%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>

                <div className="JavaScript flex w-[100%] gap-8 justify-center items-center   ">
                    <div className="flex flex-col justify-center items-center">
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600"></div>
                        <div className="h-12 border-none rounded-3xl w-40 p-3 bg-slate-500 items-center flex justify-center cursor-pointer hover:bg-blue-300">JavaScript</div>
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600"></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>
                            JavaScript is a versatile programming language that enables dynamic and interactive web content. It allows developers to create responsive user interfaces, handle events, and manipulate the Document Object Model (DOM) to update the content and structure of web pages in real-time.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>JavaScript (JS) is a programming language used to create dynamic and interactive effects on web pages.
                        </p>
                    </div>
                </div>
                <div className="horizontalLine flex h-0 w-[100%] items-center justify-center border-none rounded-br-lg rounded-tl-xl">
                    <div className={`hidden md:block h-1 w-[28%]  border-none ${CodeEditorColorLine} rounded-br-lg rounded-tl-xl`}></div>
                    <div className=" p-[0.2rem] border-2 border-white flex items-center justify-center md:w-[10%] w-[100%] text-white text-lg"><h4>Back-end</h4></div>
                    <div className={`hidden md:block h-1 w-[28%]  border-none ${CodeEditorColorLine}  rounded-br-lg rounded-tl-xl`}></div>
                </div>
                <div className="PackageManager flex w-[100%]  justify-center items-center">
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Package managers are tools that help developers manage dependencies (libraries, frameworks, or tools) in their projects. They automate the process of installing, updating, and removing packages, ensuring your project has the right versions of required software.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>A package manager is a tool that automates the process of installing, updating, configuring, and managing software packages and dependencies.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center ml-[2%]">
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-40 p-3  items-center flex justify-center bg-[#3c9dca] cursor-pointer">Package manager
                        </div>
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600 border-none"></div>
                    </div>
                </div>
                <div className="horizontalLine h-1 w-[70%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>

                <div className="nodeJS flex w-[100%] gap-8 justify-center items-center ">
                    <div className="flex flex-col justify-center items-center">
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600"></div>
                        <div className="h-12 border-none rounded-3xl w-40 p-3 bg-slate-500 items-center flex justify-center cursor-pointer hover:bg-blue-300">Node.js</div>
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600"></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Node.js is a runtime environment that allows you to execute JavaScript code outside of a web browser. It’s widely used for building server-side applications. Let's break down the key concepts you mentioned:
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>Node.js is a runtime environment that allows you to execute JavaScript code outside of a browser, typically used for building server-side applications.
                        </p>
                    </div>
                </div>
                <div className="horizontalLine h-1 w-[70%] bg-gray-600  border-none rounded-bl-lg rounded-tr-xl"></div>

                <div className="Expressjs w-[100%] flex   justify-center items-center">
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>Express.js is a lightweight web application framework for Node.js. It is designed to build web servers and APIs efficiently and flexibly. Let’s dive deeper into the middleware and structuring large-scale projects, as you requested.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>Express.js is a minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center ml-[2%]">
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-40 p-3 bg-slate-500 items-center flex justify-center hover:bg-green-300 cursor-pointer">Express.js</div>
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600 border-none"></div>
                    </div>
                </div>
                <div className="horizontalLine h-1 w-[70%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>

                <div className="DatabaseManagement w-[100%] flex gap-8 justify-center items-center ">
                    <div className="flex flex-col justify-center items-center">
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600"></div>
                        <div className="h-12 border-none rounded-3xl w-auto py-3 px-5 bg-slate-500 items-center flex justify-center cursor-pointer hover:bg-blue-300">Database Management</div>
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600"></div>
                    </div>
                    <div className="w-[40rem] p-2   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] ">
                        <p>
                            Managing databases effectively is crucial in web development, as it ensures the efficient storage, retrieval, and manipulation of data.
                        </p>
                    </div>
                </div>
                <div className="horizontalLine h-1 w-[70%] bg-gray-600  border-none rounded-bl-lg rounded-tr-xl"></div>
                <div className=" APIs flex w-[100%]  justify-center items-center ">
                    <div className="w-[40rem] p-2   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] ">
                        <p>APIs allow software systems to communicate with each other by exposing functionality or data. In web development, APIs are commonly used for client-server communication.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center ml-[2%]">
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-40 p-3 bg-slate-500 items-center flex justify-center hover:bg-green-300 cursor-pointer">APIs</div>
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600 border-none"></div>
                    </div>
                </div>
                <div className="horizontalLine h-1 w-[70%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>
                <div className="VersionControlSystems flex gap-8 justify-center items-center  w-[100%]">
                    <div className="flex flex-col justify-center items-center">
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600"></div>
                        <div className="h-12 border-none rounded-3xl w-auto py-3 px-5 bg-slate-500 items-center flex justify-center cursor-pointer hover:bg-blue-300">Version Control Systems</div>
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600"></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>
                            Version control systems (VCS) like GitHub and GitLab are critical for managing and collaborating on code. They help track changes, manage multiple contributors, and integrate with automated pipelines for continuous delivery.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>A version control system is a software tool that helps manage changes to source code over time, allowing multiple developers to collaborate and track revisions.
                        </p>
                    </div>
                </div>
                <div className="horizontalLine h-1 w-[70%] bg-gray-600  border-none rounded-bl-lg rounded-tr-xl"></div>
                <div className="ProjectBuild flex w-[100%]  justify-center items-center">
                    <div className="w-[40rem] p-2   h-auto my-[4rem] bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec]">
                        <p>Building a project involves planning, coding, testing, and deploying your application. It requires end-to-end execution, from ideation to production readiness, ensuring a robust and user-friendly product.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center ml-[2%]">
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-40 p-3 bg-slate-500 items-center flex justify-center hover:bg-green-300 cursor-pointer">Project Build</div>
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600 border-none"></div>
                    </div>
                </div>
                <div className="horizontalLine flex h-0 w-[100%] items-center justify-center border-none rounded-br-lg rounded-tl-xl">
                    <div className="hidden md:block h-1 w-[15.5%] bg-gray-600 border-none rounded-br-lg rounded-tl-xl"></div>
                    <div className="p-[0.2rem] border-2 border-white w-[100%] md:w-[38%] flex justify-center items-center text-white text-lg"><h4>Understanding Frameworks and Libraries</h4></div>
                    <div className="hidden md:block h-1 w-[15.5%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>
                </div>
                <div className="Libraryandframework flex gap-8 justify-center items-center  w-[100%]">
                    <div className="flex flex-col justify-center items-center">
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600"></div>
                        <div className="h-12 border-none rounded-3xl w-auto py-3 px-5 bg-slate-500 items-center flex justify-center cursor-pointer hover:bg-blue-300">Library and framework</div>
                        <div className="verticalLine h-[6rem] w-1 bg-gray-600"></div>
                    </div>
                    <div className="w-[40rem] p-2   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec]">
                        <p>Both libraries and frameworks are essential in web development. While they both provide reusable code to speed up development, they differ in their scope and how they are used in your projects.
                        </p>
                    </div>
                </div>
                <div className="horizontalLine flex h-0 w-[100%] items-center justify-center border-none rounded-br-lg rounded-tl-xl">
                    <div className="hidden md:block h-1 w-[20%] bg-gray-600 border-none rounded-br-lg rounded-tl-xl"></div>
                    <div className="w-[100%] md:w-[35%] p-[0.2rem] border-2 border-white flex justify-center items-center text-white text-lg"><h4>Frontend Library/Framework</h4></div>
                    <div className="hidden md:block h-1 w-[20%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>
                </div>
                <div className=" frontendlibraryframework flex w-[100%]  justify-center items-center">
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p> it’s essential to learn a frontend library or framework to build interactive and dynamic web applications. The three most popular ones are React, Angular, and Vue. Each has its strengths, and your choice depends on your needs, but the core principles remain similar across them.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>A frontend library or framework is a collection of tools and code that simplifies the creation of user interfaces and web applications.
                        </p>
                    </div>
                    <div className="flex flex-col  justify-center items-center ml-[2%]">
                        <div className="verticalLine h-[2rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-auto py-3 px-5 bg-slate-500 items-center flex justify-center hover:bg-green-300 cursor-pointer">React (Library)</div>
                        <div className="verticalLine h-[2rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-auto py-3 px-5 bg-slate-500 items-center flex justify-center hover:bg-green-300 cursor-pointer">Angular (Framework)</div>
                        <div className="verticalLine h-[2rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-auto  py-3 px-5 bg-slate-500 items-center flex justify-center hover:bg-green-300 cursor-pointer">Vue(Framework)</div>
                        <div className="verticalLine h-[2rem] w-1 bg-gray-600 border-none"></div>
                    </div>
                </div>
                <div className="horizontalLine flex h-0 w-[100%] items-center justify-center border-none rounded-br-lg rounded-tl-xl">
                    <div className="hidden md:block h-1 w-[20%] bg-gray-600 border-none rounded-br-lg rounded-tl-xl"></div>
                    <div className="p-[0.2rem] border-2 border-white w-[100%] md:w-[30%] flex justify-center items-center text-white text-lg"><h4>Server-Side Rendering (SSR)</h4></div>
                    <div className="hidden md:block h-1 w-[20%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>
                </div>
                <div className="server-siderendering flex gap-8 justify-center items-center  w-[100%]">
                    <div className="flex flex-col justify-center items-center">
                        <div className="verticalLine h-[4rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-auto py-3 px-5 bg-slate-500 items-center flex justify-center hover:bg-green-300 cursor-pointer">Next.js (for React)</div>
                        <div className="verticalLine h-[4rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-auto py-3 px-5 bg-slate-500 items-center flex justify-center hover:bg-green-300 cursor-pointer">Nuxt.js (for Vue)</div>
                        <div className="verticalLine h-[4rem] w-1 bg-gray-600 border-none"></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>To take your web development skills to the next level, it's important to learn Server-Side Rendering (SSR). This technique involves rendering a web page on the server rather than in the browser, which can significantly improve page load times and SEO.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                       
                            <p>A frontend library or framework is a collection of tools and code that simplifies the creation of user interfaces and web applications.
                            </p>
                    </div>
                </div>
                <div className="horizontalLine flex h-0 w-[100%] items-center justify-center border-none rounded-br-lg rounded-tl-xl">
                    <div className="hidden md:block h-1 w-[24.8%] bg-gray-600 border-none rounded-br-lg rounded-tl-xl"></div>
                    <div className="p-[0.2rem] border-2 border-white w-[100%] md:w-[30%] flex justify-center items-center text-white text-lg"><h4>CSS Frameworks</h4></div>
                    <div className="hidden md:block h-1 w-[24.8%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>
                </div>
                <div className="CSSframework flex w-[100%]  justify-center items-center">
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p> CSS frameworks provide pre-designed and reusable code that simplifies the process of styling your web applications. By using these frameworks, you can focus more on the functionality and layout of your app, rather than spending time writing all the CSS from scratch.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>A CSS framework is a library of pre-written CSS code that simplifies creating consistent and responsive web designs.
                        </p>
                    </div>
                    <div className="flex flex-col  justify-center items-center ml-[2%]">
                        <div className="verticalLine h-[2rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-auto py-3 px-5 bg-slate-500 items-center flex justify-center hover:bg-green-300 cursor-pointer">Bootstrap</div>
                        <div className="verticalLine h-[2rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-auto py-3 px-5 bg-slate-500 items-center flex justify-center hover:bg-green-300 cursor-pointer">Tailwind CSS
                        </div>
                        <div className="verticalLine h-[2rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-auto  py-3 px-5 bg-slate-500 items-center flex justify-center hover:bg-green-300 cursor-pointer">Material-UI</div>
                        <div className="verticalLine h-[2rem] w-1 bg-gray-600 border-none"></div>
                    </div>
                </div>
                <div className="horizontalLine flex h-0 w-[100%] items-center justify-center border-none rounded-br-lg rounded-tl-xl">
                    <div className="hidden md:block h-1 w-[24%] bg-gray-600 border-none rounded-br-lg rounded-tl-xl"></div>
                    <div className="p-[0.2rem] border-2 border-white w-[100%] md:w-[30%] flex justify-center items-center text-white text-lg"><h4>State management</h4></div>
                    <div className="hidden md:block h-1 w-[24%] bg-gray-600  border-none rounded-br-lg rounded-tl-xl"></div>
                </div>
                <div className="statemanagement flex gap-8 justify-center items-center  w-[100%]">
                    <div className="flex flex-col justify-center items-center">
                        <div className="verticalLine h-[2rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-auto py-3 px-5 bg-slate-500 items-center flex justify-center hover:bg-green-300 cursor-pointer">React Context API</div>
                        <div className="verticalLine h-[2rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-auto py-3 px-5 bg-slate-500 items-center flex justify-center hover:bg-green-300 cursor-pointer">Redux</div>
                        <div className="verticalLine h-[2rem] w-1 bg-gray-600 border-none"></div>
                        <div className="h-12 border-none rounded-3xl w-auto py-3 px-5 bg-slate-500 items-center flex justify-center hover:bg-green-300 cursor-pointer">Zustand</div>
                        <div className="verticalLine h-[2rem] w-1 bg-gray-600 border-none"></div>
                    </div>
                    <div className="w-[40rem] px-8 py-3   h-auto my-8 bg-gray-700 md:flex items-center justify-center border-2 rounded-md border-white text-lg text-[#eeecec] hidden">
                        <p>State management is a crucial concept in modern web development, especially when dealing with complex applications where various components need to share or update data. Effective state management ensures that your app behaves consistently, is easy to maintain, and scales properly.
                        </p>
                    </div>
                    <div className="w-auto p-2 h-auto  md:h-auto my-8 bg-gray-700 flex items-center justify-center border-2 rounded-md border-white text-sm text-[#eeecec] md:hidden">
                        <p>State management in web development involves efficiently handling and synchronizing the state of an application to ensure a consistent and predictable user experience.
                        </p>
                    </div>
                </div>
                <div className="horizontalLine h-1 w-[70%] bg-gray-600  border-none rounded-bl-lg rounded-tr-xl"></div>
            </div>
        </section>
    );
}
