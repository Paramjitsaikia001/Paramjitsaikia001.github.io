import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getButtonText = () => {
    switch (location.pathname) {
      case '/ExamEase/my-project/build/':
        return 'Home';
      case '/ExamEase/my-project/build/categories':
        return 'Categories';
      case '/ExamEase/my-project/build/Random':
        return 'Random';
      case '/ExamEase/my-project/build/about':
        return 'About us';
      default:
        return 'Menu';
    }
  };

  return (
    <nav className="w-full md:w-auto z-99 ">
      <div className="flex justify-between items-center md:hidden">
        <button onClick={toggleMenu} className="text-black dark:text-white flex items-center">
          {getButtonText()} <span className="ml-2">&#x25BC;</span>
        </button>
      </div>
      <ul className={`flex flex-col md:flex-row md:w-auto justify-evenly px-12 items-center rounded-full ${darkMode ? 'md:bg-[#3be8ff] text-black' : 'md:bg-[#9ff4ff] text-black'} h-auto md:h-8 ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <Link to="/ExamEase/my-project/build/" onClick={() => setIsOpen(false)}>
          <li className='h-full flex justify-center items-center list-none hover:bg-blue-400 px-5 py-2 md:py-0 rounded-full hover:font-semibold cursor-pointer'>Home</li>
        </Link>
        <Link to="/ExamEase/my-project/build/categories" onClick={() => setIsOpen(false)}>
          <li className='h-full flex justify-center items-center list-none hover:bg-blue-400 px-5 py-2 md:py-0 rounded-full hover:font-semibold cursor-pointer'>Categories</li>
        </Link>
        <Link to="/ExamEase/my-project/build/Random" onClick={() => setIsOpen(false)}>
          <li className='h-full flex justify-center items-center list-none hover:bg-blue-400 px-5 py-2 md:py-0 rounded-full hover:font-semibold cursor-pointer'>Random</li>
        </Link>
        <Link to="/ExamEase/my-project/build/about" onClick={() => setIsOpen(false)}>
          <li className='h-full flex justify-center items-center list-none hover:bg-blue-400 px-5 py-2 md:py-0 rounded-full hover:font-semibold cursor-pointer'>About us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;