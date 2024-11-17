import React from 'react';
import { Link } from 'react-router-dom';
import githublogo from '../Components/Images/githublogo.png'


const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 h-[100vh] flex flex-col w-[30%] justify-around border-r-2 border-r-gray-600 items-center">
      <div className='bg-gray-700 px-16 py-3  border-0 rounded-full text-[1.5rem] font-bold'>
        <h2>My Portfolio</h2>
      </div>
      <div>
        <ul className="text-white flex flex-col gap-2">
          <Link to="/">
            <li className="flex items-center gap-2 text-xl font-bold border-2 border-transparent hover:border-transparent rounded-full hover:bg-gray-700 px-3 py-2">
              <span className="material-symbols-outlined">person</span>
              <span>Porfile</span>
            </li>
          </Link>
          <Link to="/education">
            <li className="flex items-center gap-2 text-xl font-bold border-2 border-transparent hover:border-transparent rounded-full hover:bg-gray-700 px-3 py-2">
              <span className="material-symbols-outlined">school</span>
              <span>Education</span>
            </li>
          </Link>
          <Link to="/skill">
          <li className="flex items-center gap-2 text-xl font-bold border-2 border-transparent hover:border-transparent rounded-full hover:bg-gray-700 px-3 py-2">
            <span className="material-symbols-outlined">code</span>
           <span>Skills</span>
          </li>
          </Link>

          <li className="flex items-center gap-2 text-xl font-bold border-2 border-transparent hover:border-transparent rounded-full hover:bg-gray-700 px-3 py-2">
            <span className="material-symbols-outlined">work</span>
            <Link to="/Projects">Project</Link>
          </li>

          <li className="flex items-center gap-2 text-xl font-bold border-2 border-transparent hover:border-transparent rounded-full hover:bg-gray-700 px-3 py-2">
            <img src={githublogo} alt="Example" className="w-6 h-6" />
            <Link to="/Github">Github</Link>
          </li>

          <li className="flex items-center gap-2 text-xl font-bold border-2 border-transparent hover:border-transparent rounded-full hover:bg-gray-700 px-3 py-2">
            <span className="material-symbols-outlined">call</span>
            <Link to="/Contact">Contact ME</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
