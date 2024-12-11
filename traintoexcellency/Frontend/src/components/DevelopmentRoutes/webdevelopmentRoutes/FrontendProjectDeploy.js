
export default function FrontendProjectDeploymentpage({ closeFrotendProjectDeploy, Done }) {
   const Nexthandler = () => {
      Done();
      closeFrotendProjectDeploy();
   }
   return (
      <section className="fixed right-0 left-[20%] md:left-[60%] top-0 bottom-0 overflow-scroll inset-0 bg-[#0a0e27] flex justify-center items-center z-50 m-0 h-[100%] pt-12">
         <div className="bg-[#0a0e27] text-white pb-0 px-4  h-[100%]">
            <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Frontend project deployment</h2>
            <div className="flex flex-col gap-1">
               <p><span className="text-[#23daff] font-bold">Frontend project deployment(HTML,CSS and JavaScript )</span>  is the process of publishing your web application so users can access it online. It involves hosting the static files (HTML, CSS, JavaScript) on a server and configuring the domain for public access. Modern deployment platforms simplify this process by providing seamless integration with version control systems like GitHub and offering free or paid hosting solutions.


               </p>
               <p>
                  If a website were a human body, deployment would be its public presence, enabling others to see and interact with the final polished version of the project. Deployment ensures your project is available, performant, and accessible on the internet.

               </p>
               <div className="flex flex-col gap-3">
                  <h3 className="font-bold">Steps to Deploy Your HTML and CSS Project:</h3>
                  <ul className=" flex flex-col gap-2 pl-5">
                     <li className="list-decimal flex flex-col gap-2 ">
                        <h4>Prepare Your Files:</h4>
                        <ul className="flex flex-col gap-1 pl-6">
                           <li className="list-disc">
                              Ensure your project folder is well-organized, with all files (HTML, CSS, images, etc.) included and linked correctly.
                           </li>
                           <li className="list-disc">
                              Test your project locally to confirm everything works as expected.
                           </li>
                        </ul>
                     </li>
                     <li className="list-decimal flex flex-col gap-2 ">
                        <h4>Prepare Your Files:</h4>
                        <ul className="flex flex-col gap-1 pl-6">
                           <li className="list-disc">
                              Ensure your project folder is well-organized, with all files (HTML, CSS, images, etc.) included and linked correctly.
                           </li>
                           <li className="list-disc">
                              Test your project locally to confirm everything works as expected.
                           </li>
                        </ul>
                     </li>
                     <li className="list-decimal flex flex-col gap-2 ">
                        <h4>Prepare Your Files:</h4>
                        <ul className="flex flex-col gap-1 pl-6">
                           <li className="list-disc">
                              Ensure your project folder is well-organized, with all files (HTML, CSS, images, etc.) included and linked correctly.
                           </li>
                           <li className="list-disc">
                              Test your project locally to confirm everything works as expected.
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="flex justify-between">
               <button onClick={closeFrotendProjectDeploy} className=" px-4 py-2 bg-blue-600 text-white rounded">Close</button>
               <button onClick={Nexthandler} className=" px-4 py-2 bg-blue-600 text-white rounded">Done</button>
            </div>
         </div>
      </section>
   );
}
