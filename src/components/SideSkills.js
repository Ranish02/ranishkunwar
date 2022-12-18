import React, { useState } from 'react';
import LanguagesSlider from './Slider/LanguagesSlider';
import { HiViewList } from 'react-icons/hi';
import { MdViewWeek } from 'react-icons/md';
import { BiGridHorizontal } from 'react-icons/bi';
import LanguageGrid from './GridView/LanguageGrid';
import SideSkillsSlider from './Slider/SideSkillsSlider';
import SideSkillsGrid from './GridView/SideSkillsGrid';

const SideSkills = () => {
    // 1363DF
    //B A0E4CB
    // <button className={view == 'slider' ? 'px-2  py-2 mx-1 bg-[#87b7ff]' : 'px-2 mx-1 pt-2 pb-1 bg-[#0a9dff]'} onClick={handleToggle}>
    //                             <MdViewWeek size={20} />
    const [view, setview] = useState('slider');
    const handleToggle = () => {
        console.log(view);
        if (view === 'slider') {
            setview('list');
        }
        else {
            setview('slider');
        }
    }
    return (
        <div className='flex justify-center languages items-center snap-start'>
            <div className='w-full h-screen  bg-[#3F0071] text-white pt-[50px] md:pl-4'>
                <div className='w-screen h-screen text-[#fff] md:pt-[50px] px-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex justify-center text-center items-center' >
                            <div className='xl:ml-16'>
                                <div className='text-4xl md:text-6xl xl:text-8xl  headings font-semibold pt-8 text-[#FB2576]'>
                                    Side Skills
                                </div>
                                <div className='p-4 text-sm md:text-base'>
                                    Here are few of the side skills that I have gained over the past few years
                                    <br />
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-center items-center'>
                            <div>
                                <img src="https://cdn.discordapp.com/attachments/979623779477123122/1054025801655402587/FB_IMG_1671369699209.jpg" alt="" className='rounded-full overflow-hidden cropped' />
                            </div>

                        </div>

                    </div>
                    <div className='md:pr-8'>
                        <div className='scale-75 md:scale-100 mt-[-40px] sm:mt-4 border-[#000] border-2'>
                            <div>
                                <div className=' pt-1 flex justify-end '>
                                    {/* <button className='px-2 py-2 mx-1 bg-[#e5c5ff]'><HiViewList size={20} /></button> */}
                                    <button className={view === 'slider' ? 'px-2 py-2 mx-1 bg-[#150050]' : 'px-2 pt-2 pb-1 mx-1 bg-[#271d41]'} onClick={handleToggle}>
                                        <MdViewWeek size={20} />
                                    </button>
                                    <button className={view === 'slider' ? 'px-2 pt-2 pb-1 mx-1 bg-[#271d41]' : 'px-2 py-2 mx-1 bg-[#150050]'} onClick={handleToggle}>
                                        <HiViewList size={20} />
                                    </button>


                                    {/* <button className='px-2 py-2 mx-1 bg-[#D09CFA]' onClick={handleToggle}><MdViewWeek size={20} /></button> */}
                                </div>
                                <div className=' p-2 md:p-4 text-black border-[#000] border-t-2 sm:pr-8 rounded-l-md rounded-b-md'>
                                    {view === 'slider' ? <>
                                        <SideSkillsSlider />
                                    </> :
                                        <>
                                            <SideSkillsGrid />
                                        </>}
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* section */}
                </div>
            </div>
        </div>
    );
}

export default SideSkills;
