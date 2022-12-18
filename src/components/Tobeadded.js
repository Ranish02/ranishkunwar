import React from 'react';
import Typed from 'react-typed';

const Tobeadded = () => {
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <div className='text-4xl md:text-6xl xl:text-8xl font-bold text-left text-white poppins'>
                <Typed
                    strings={['To be Added', 'Stay Tuned', 'Coming very soon']}
                    typeSpeed={70}
                    startDelay={300}
                    backSpeed={50}
                    backDelay={300}
                    loop
                />
            </div>
        </div>
    );
}

export default Tobeadded;
