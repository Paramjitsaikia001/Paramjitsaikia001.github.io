
export default function APIpage({ closeAPI, Done }) {
   const Nexthandler = () => {
       Done();
       closeAPI();
   }
   return (
       <section className="fixed right-0 left-[20%] md:left-[60%] top-0 bottom-0 overflow-scroll inset-0 bg-[#0a0e27] flex justify-center items-center z-50 m-0 h-[100%] pt-12">
           <div className="bg-[#0a0e27] text-white pb-0 px-4  h-[100%]">
               <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">JavaScript</h2>
               <div className="flex flex-col gap-1">
                   <p> An<span className="text-[#23daff] font-bold">API (Application Programming Interface)</span>  is a set of rules and protocols that allows different software applications to communicate and exchange data. APIs act as intermediaries, enabling developers to integrate third-party services, build scalable systems, and provide seamless interactions between client and server.
                   </p>
                   <p>In web development, APIs are crucial for tasks like fetching data from a database, interacting with external services (e.g., payment gateways, weather data), or enabling real-time features in applications. Common types of APIs include REST (Representational State Transfer), GraphQL, and WebSocket APIs.
                   </p>
                   <p>
                   If a website were a human body, an API would be its voice and hands, facilitating communication and interaction with the outside world. It empowers applications to "speak" and "exchange" data with other systems, enhancing functionality and user experience.
                   </p>
                   <div className="flex flex-col my-5 gap-4">
                       <p className="font-bold">Resource to become a expert in JavaScript:</p>
                       <div className="flex flex-col gap-4">
                           <div className="flex gap-3">
                               <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                               <a href="https://www.w3schools.com/Js/" target="_blank" rel="noopener noreferrer">
                                   <span className="text-[#28ffd4] underline">JavaScript Tutorial - W3Schools</span>
                               </a>
                           </div>
                           <div className="flex gap-3">
                               <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                               <a href="https://www.geeksforgeeks.org/javascript/" target="_blank" rel="noopener noreferrer">
                                   <span className="text-[#28ffd4] underline">JavaScript Tutorial - GeeksforGeeks</span>
                               </a>
                           </div>
                           <div className="flex gap-3">
                               <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                               <a href="https://www.javatpoint.com/javascript-tutorial" target="_blank" rel="noopener noreferrer">
                                   <span className="text-[#28ffd4] underline">Learn JavaScript Tutorial - Javatpoint</span>
                               </a>
                           </div>
                           <div className="flex gap-3 items-center">
                               <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                   play_arrow
                               </span>
                               <a href="https://youtu.be/VlPiVmYuoqw?si=jmPMwTpRDN4Ya7kl" target="_blank" rel="noopener noreferrer">
                                   <span className="text-[#28ffd4] underline">JavaScript Tutorial (2024) for Beginners to Pro (with Notes, Projects & Practice Questions)</span>
                               </a>
                           </div>
                           <div className="flex gap-3 items-center">
                               <span class="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                   play_arrow
                               </span>
                               <a href="https://youtu.be/EerdGm-ehJQ?si=GJay7iD_VVkCyq0R" target="_blank" rel="noopener noreferrer">
                                   <span className="text-[#28ffd4] underline">JavaScript Tutorial full Course-Beginner to Pro (2024) By SuperSimpleDev</span>
                               </a>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="flex justify-between">
                   <button onClick={closeAPI} className=" px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                   <button onClick={Nexthandler} className=" px-4 py-2 bg-blue-600 text-white rounded">Done</button>
               </div>
           </div>
       </section>
   );
}
