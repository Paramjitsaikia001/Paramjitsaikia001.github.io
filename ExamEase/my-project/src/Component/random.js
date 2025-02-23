import React from "react";
import { Link } from "react-router-dom";
import images from "./images";
import Uppermain from './Uppermain.js'

const RandomsSEC = [
  { name: "random01"},
  { name: "random02"},
  { name: "random03"},
  { name: "random04"},
  { name: "random05"},
  { name: "random06"},
  { name: "random07"},
  { name: "random08"},
  { name: "random09"},
];

const Random= () => {
   return (
      <div className="random bg-[#00e1ff] w-full overflow-x-hidden">
         {/* Header */}<Uppermain/>
         <div className="categories-header pb-3 flex items-center justify-center rounded-sm">
            <h2 className="text-[3rem] font-bold text-black text-center">Random Quiz </h2>
         </div>

         {/* RandomList - Horizontal Scroll */}
         <div className="categories-container flex gap-4 flex-wrap px-4 justify-center items-center">
            {RandomsSEC.map((category, index) => (
               <div key={index} className="category bg-gray-200 p-1 rounded-md shadow-md w-full sm:w-[45%] md:w-[30%] lg:w-[20%] h-auto flex-shrink-0 snap-center flex flex-col justify-between items-center">
                  <h3 className="font-bold text-lg mt-2 text-center">{category.name}</h3>
                  <Link
                     to={`/ExamEase/my-project/build/quiz/${category.name}`}
                     className="block bg-blue-500 text-white p-2 w-[80%] mt-2 text-center hover:bg-blue-600 transition rounded-full"
                  >
                     Start {category.name} Quiz
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Random;