import React, { useState } from 'react';
import Uppermain from './Uppermain';
import images from './images';
import { Link } from 'react-router-dom';

const RandomSec = [
  { name: "random01" },
  { name: "random02" },
  { name: "random03" },
  { name: "random04" },
];

const Main = () => {
  return (
    <section className='flex flex-col w-full h-full overflow-x-hidden bg-[#00e1ff]'>
      <Uppermain />
      <div className="categories bg-[#00e1ff]">
        <div className="categories-header p-b-3 flex items-center justify-center">
          <h2 className='text-[3rem] font-bold'>Categories</h2>
        </div>
        <div className="categories-container flex justify-start items-center gap-4 p-4 overflow-x-auto whitespace-nowrap ">
          <div className="category bg-gray-200 p-1 rounded-xl shadow-md w-[25rem] h-[23rem] flex-shrink-0 snap-center flex flex-col justify-between items-center">
            <img src={images.GK} alt="General Knowledge" className='w-full h-[12rem] object-cover rounded' />
            <h3 className="font-bold text-lg">General Knowledge</h3>
            <p className="text-sm">Test your general knowledge with a variety of questions.</p>
            <Link
              to={`/ExamEase/my-project/build/quiz/General Knowledge`}
              className="block bg-blue-500 text-white p-2 w-[80%] mt-2 text-center hover:bg-blue-600 transition rounded-full ">Start General Knowledge Quiz</Link>
          </div>
          <div className="category bg-gray-200 p-1 rounded-xl shadow-md w-[25rem] h-[23rem] flex-shrink-0 snap-center flex flex-col justify-between items-center">
            <img src={images.ST} alt="Science & Technology" className='w-full h-32 object-cover rounded' />
            <h3 className="font-bold text-lg">Science & Technology</h3>
            <p className="text-sm ">Explore the wonders of science and technology.</p>
            <Link
              to={`/ExamEase/my-project/build/quiz/Science & Technology`} className="block bg-blue-500 text-white p-2 w-[80%] mt-2 text-center hover:bg-blue-600 transition rounded-full ">Start Science & Technology Quiz</Link>
          </div>
          <div className="category bg-gray-200 p-1 rounded-xl shadow-md w-[25rem] h-[23rem] flex-shrink-0 snap-center flex flex-col justify-between items-center">
            <img src={images.Math} alt="Mathematics" className='w-full h-32 object-cover rounded' />
            <h3 className="font-bold text-lg">Mathematics</h3>
            <p className="text-sm">Challenge your math skills with various problems.</p>
            <Link
              to={`/ExamEase/my-project/build/quiz/Mathematics`} className="block bg-blue-500 text-white p-2 w-[80%] mt-2 text-center hover:bg-blue-600 transition rounded-full ">Start Mathematics Quiz</Link>
          </div>
          <div className="category bg-gray-200 p-1 rounded-xl shadow-md w-[25rem] h-[23rem] flex-shrink-0 snap-center flex flex-col justify-between items-center">
            <img src={images.History} alt="History & Geography" className='w-full h-32 object-cover rounded' />
            <h3 className="font-bold text-lg">History & Geography</h3>
            <p className="text-sm">Dive into history and geography with engaging quizzes.</p>
            <Link
              to={`/ExamEase/my-project/build/quiz/History & Geography`} className="block bg-blue-500 text-white p-2 w-[80%] mt-2 text-center hover:bg-blue-600 transition rounded-full ">Start History & Geography Quiz</Link>
          </div>
          <div className="more-categories w[30%] flex justify-center items-center ">
            <Link
              to={`/ExamEase/my-project/build/categories`} className=" text-[#1f1e1e] p-2 w-[8rem] h-[8rem] flex justify-center  rounded-full l border-2 border-[#1f1e1e] items-center text-xl gap-1 hover:bg-[#2668a7]">
              <p className='text=xl font-semibold'>More</p>
              <span className="material-symbols-outlined font-bold">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="random-quiz bg-[#00e1ff] pt-8">
        <div className="random-heade p-b-3 flex items-center justify-center">
        <h2 className='text-[3rem] font-bold'>Random Quiz</h2>
        </div>
      </div>
      <div className="categories-container flex justify-start items-center gap-4 p-4 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
        {RandomSec.map((category, index) => (
          <div key={index} className="category bg-gray-200 p-1 rounded-md shadow-md w-[25rem] h-[20%] flex-shrink-0 snap-center flex flex-col justify-between items-center">
            <h3 className="font-bold text-lg mt-2">{category.name}</h3>
            <Link
              to={`/ExamEase/my-project/build/quiz/${category.name}`}
              className="block bg-blue-500 text-white p-2 w-[80%] mt-2 text-center hover:bg-blue-600 transition rounded-full"
            >
              Start {category.name} Quiz
            </Link>
          </div>
        ))}
             <div className="more-categories w[30%] flex justify-center items-center ">
            <Link
              to={`/ExamEase/my-project/build/Random`} className=" text-[#1f1e1e] p-2 w-[4rem] h-[4rem] flex justify-center  rounded-full l border-2 border-[#1f1e1e] items-center text-xl gap-1 hover:bg-[#2668a7]">
              <span className="material-symbols-outlined font-bold">
                arrow_forward
              </span>
            </Link>
          </div>
      </div>
    </section>
  );
};

export default Main;