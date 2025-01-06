import { useState } from 'react'
import Logo from './Logo';
import askmeicon from '../assats/askme.svg'
export default function Header() {
    const [showInput, setShowInput] = useState(false);
    const handleSearchClick = () => {
        setShowInput(!showInput);
    };
    return (
        <section className='flex md:justify-between items-center  w-[100%]'>
            <div className='md:hidden block'>
                <Logo />
            </div>
            <nav className=" flex h-10  items-center askme w-[100%]  text-white justify-end">
                <div className='flex gap-1 justify-center items-center'>
                    {showInput && (
                        <input
                            className='text-[#ffff] border-none py-1 px-3 bg-[#ffffff48] rounded-sm items-center '
                            type='search'
                            placeholder='search here....'
                        >
                        </input>)}
                    <div onClick={handleSearchClick} className='flex justify-center items-center cursor-pointer'>
                        <span

                            className="material-symbols-outlined search font-extralight text-4xl">search</span>
                    </div>
                </div>
                <button className=" flex flex-col m-1 py-1 px-3 border-transparent  rounded-full items-center align-center hover:font-extrabold">
                <img className='fill-white text-white w-10 h-10'  
                src={askmeicon}
                alt="sparkling"/>
                    <span className="text-xs flex flex-col">
                        <span>Ask Me</span>
                    </span>
                </button>
                <button>

                </button>
            </nav>
        </section>
    )
}