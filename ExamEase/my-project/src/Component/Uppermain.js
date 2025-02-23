import React, { useState } from 'react';
import demo_profile from '../assests/demo_profile.jpeg';
import Navbar from './navber.js';
import { Link } from 'react-router-dom';
const Uppermain = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const getTagline = () => {
    switch (window.location.pathname) {
      case '/categories':
        return ['Explore Categories', 'Choose Your Quiz', 'Browse Quizzes'];
      case '/about':
        return ['About Us', 'Learn More About Us', 'Learn More'];
      default:
        return ['Expand Your Knowledge,', 'One Quiz at a Time', 'Start Quiz'];
    }
  };

  const [tagline1, tagline2, buttonText] = getTagline();

  return (
    <main className={`bg-[#6eb5f8] h-[80vh] flex flex-col justify-between items-center p-4 w-full  ${darkMode ? 'bg-black text-white' : 'bg-[#9ff4ff] text-black'}`}>
      <header className='z-0 flex justify-between text-white w-full items-center'>
        <div className="logo mb-4 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-extrabold">ExamEase</h2>
        </div>
        <Navbar darkMode={darkMode} />
        <div className="flex gap-3 justify-center items-center mt-4 md:mt-0">
          <div className="screenmode">
            <button onClick={toggleDarkMode} className=" p-2 rounded">
              {darkMode ? (
                <span className="material-symbols-outlined">light_mode</span>
              ) : (
                <span className="material-symbols-outlined">dark_mode</span>
              )}
            </button>
          </div>
          <img src={demo_profile} alt="demo profile pic" className='w-8 h-8 md:w-10 md:h-10 rounded-full' />
        </div>
      </header>
      <div className="main-taglines flex flex-col items-center justify-center text-center mt-8 md:mt-16">
        <div className='text-[#ffffff] flex flex-col items-center justify-center'>
          <h1 className='font-bold text-3xl md:text-5xl'>{tagline1}</h1>
          <h1 className='font-bold text-3xl md:text-5xl'>{tagline2}</h1>
        </div>
        <p className='font-[400] text-lg md:text-2xl text-[#00fff2] mt-4'>
          Engaging quizzes designed to sharpen your mind and boost your confidence!
        </p>
      </div>
      <div className="start-btn mt-8">
         <Link to="/categories" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
          {buttonText}
        </Link>
      </div>
    </main>
  );
};

export default Uppermain;
