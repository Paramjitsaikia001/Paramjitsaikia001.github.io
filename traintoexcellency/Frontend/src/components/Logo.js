import { useState } from 'react';
import appLogo from '../images/appLogo.png';
import Mainleft from './mainleft';

export default function Logo() {
    return (
        <div  className="border-0 bg-transparent rounded-full h-11 w-auto md:bg-[#cee8ff] py-2 px-4 m-0 flex justify-center items-center gap-1 text-gray-950">
            <img
                className='w-8 h-8 hidden md:block'
                src={appLogo}
            >
            </img>
            <h2 className="block w-auto text-white text-xs md:text-black lg:block lg:text-sm font-bold">Train to EXCELLENCY</h2>
           
        </div>
    )
}