import { useState } from 'react'
import Logo from './Logo';

export default function Header() {
    const [showInput, setShowInput] = useState(false);
    const handleSearchClick = () => {
        setShowInput(!showInput);
    };
    return (
        <section className='flex md:justify-between items-center lg:w-[90%] w-[100%]'>
            <div className='md:hidden block'>
                <Logo />
            </div>
            <nav className=" flex h-10 askme w-[100%]  text-white justify-end">
                <div className='flex gap-1 justify-center items-center'>
                    {showInput && (
                        <input
                            className='text-black border-none py-1 px-3 bg-[#ffffff] rounded-md items-center animate-slideLeft'
                            type='search'
                            placeholder='search here....'
                        >
                        </input>)}
                    <div onClick={handleSearchClick} className='flex justify-center items-center cursor-pointer'>
                        <span

                            className="material-symbols-outlined text-3xl">search</span>
                        <span className='text-white'>Search</span>
                    </div>
                </div>
                <button className=" flex flex-col m-1 py-1 px-3 border-transparent  rounded-full items-center align-center hover:font-extrabold">
                    <span class="material-symbols-outlined">
                        settings_voice
                    </span>
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