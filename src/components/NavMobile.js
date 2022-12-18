import React from 'react';
import { IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
const NavMobile = ({ setNavMobile }) => {
    return (
        <div className='lg:hidden bg-[#251f3f] w-full h-full glass'>
            <div className='mt-4 ml-8'>
                <button onClick={() => setNavMobile(false)} className="border-2 border-[#aaaaaa] " >
                    <IoClose
                        className='text-3xl cursor-pointer text-white' />
                </button>

            </div>
            <div className='mt-6'>
                <ul className='flex flex-col justify-center space-y-4 h-full text-white'>

                    <li className='text-lg border-y-2 w-full border-[#aaaaaa] py-1 my-0 pl-6'><NavLink to="/">Home</NavLink></li>
                    <li className='text-lg border-b-2 w-full border-[#aaaaaa] py-1 my-0 pl-6'><NavLink to="/interest">Interest</NavLink></li>
                    <li className='text-lg border-b-2 w-full border-[#aaaaaa] py-1 my-0 pl-6'><NavLink to="/potatogram">Potatogram</NavLink></li>
                    <li className='text-lg border-b-2 w-full border-[#aaaaaa] py-1 my-0 pl-6'><NavLink to="/skills">Skills</NavLink></li>
                    <li className='text-lg border-b-2 w-full border-[#aaaaaa] py-1 my-0 pl-6'><NavLink to="/about">About me</NavLink></li>
                </ul>
            </div>

        </div>
    );
}

export default NavMobile;
