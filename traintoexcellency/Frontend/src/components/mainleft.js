import React from 'react';
import appLogo from '../images/appLogo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Mainleft() {
    const location = useLocation();
    return (
        <section className="flex flex-col h-[100vh] sticky top-0 items-center gap-12 w-[20%] p-0 m-0 bg-gray-800 py-2 border-r-2 border-gray-600">
            <section className="flex flex-col items-center w-[100%] gap-12">
                <div className="border-0 rounded-full h-11 w-[90%] bg-[#cee8ff] p-0 m-0 flex justify-center items-center gap-1 text-gray-950">
                    <img
                        className='w-8 h-8'
                        src={appLogo}
                    >
                    </img>
                    <h2 className="hidden lg:block lg:text-sm font-bold">Train to EXCELLENCY</h2>
                </div>
                <nav>
                    <ul className="flex flex-col gap-6 justify-start w-[10rem] text-xl">
                        <Link to="/" >
                            <li className={`text-white ${location.pathname === '/' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-1 flex items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 hover:font-bold`}>
                                <span className="material-symbols-outlined">home</span>
                                <span>Home</span>
                            </li>
                        </Link>
                        <Link to="/development" >
                            <li className={`text-white ${location.pathname === '/development' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-1 flex items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 hover:font-bold`}>
                                <span className="material-symbols-outlined">developer_board</span>
                                <div>Development</div>
                            </li>
                        </Link>
                        <Link to="/language" >
                        <li className={`text-white ${location.pathname === '/language' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-1 flex items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 hover:font-bold`}>
                                <span className="material-symbols-outlined">code_blocks</span>
                                <span>Language</span>
                            </li>
                        </Link>
                        <Link to="/explore" >
                        <li className={`text-white ${location.pathname === '/explore' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-1 flex items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 hover:font-bold`}>
                                <span className="material-symbols-outlined">search</span>
                                <span>Explore</span>
                            </li>
                        </Link>
                        <Link to="/About-us" >
                        <li className={`text-white ${location.pathname === '/About-us' ? 'text-[#00ffea]' : ''} lg:list-none lg:gap-1 flex items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 hover:font-bold`}>
                                <span className="material-symbols-outlined">info</span>
                                <span>About us</span>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </section>
            <section className="your-activity h-auto flex flex-col border-t-2 border-gray-500 w-[100%] p-2 items-center justify-between">
                <div className="border-0 rounded-full h-11 w-[90%] bg-gray-400 p-0 m-0 flex justify-center items-center gap-1">
                    <span className="material-symbols-outlined">sprint</span>
                    <h2>Your Activity</h2>
                </div>
                <div className="flex flex-col">
                    <ul className="flex flex-col gap-4 justify-center"></ul>
                </div>
            </section>
        </section>
    )
}
