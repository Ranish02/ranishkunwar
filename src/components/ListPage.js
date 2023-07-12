import React, { useState } from "react";
import LanguagesSlider from "./Slider/LanguagesSlider";
import { HiViewList } from "react-icons/hi";
import { MdViewWeek } from "react-icons/md";
import { BiGridHorizontal } from "react-icons/bi";
import LanguageGrid from "./GridView/LanguageGrid";
import SliderBox from "./Slider/SliderBox";

// import { languagesData } from "./data/languagesdata";
import GridsBox from "./GridView/GridsBox";

const ListPage = ({
  title,
  description,
  backgroundColor,
  cardColor,
  textColor,
  headingColor,
  data,
  imageUrl,
}) => {
  // 1363DF
  //B A0E4CB
  // <button className={view == 'slider' ? 'px-2  py-2 mx-1 bg-[#87b7ff]' : 'px-2 mx-1 pt-2 pb-1 bg-[#0a9dff]'} onClick={handleToggle}>
  //                             <MdViewWeek size={20} />
  const [view, setview] = useState("slider");
  const handleToggle = () => {
    console.log(view);
    if (view === "slider") {
      setview("list");
    } else {
      setview("slider");
    }
  };
  return (
    <div className="flex justify-center mt-[50px] languages items-center snap-start">
      <div
        className={`w-full h-screentext-white pt-[50px] md:pl-4 bg-[${backgroundColor}] text-${textColor}`}>
        <div className="w-screen h-screen text-white md:pt-[10px] pt-[50px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center text-center items-center">
              <div className={`xl:ml-16 text-${headingColor}`}>
                <div
                  className={`text-4xl md:text-6xl xl:text-8xl   headings font-semibold md:pt-8`}>
                  {title}
                </div>
                <div className="p-4 text-sm md:text-base">
                  {description}
                  <br />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <img
                  src={imageUrl}
                  alt=""
                  className="rounded-full overflow-hidden cropped"
                />
              </div>
            </div>
          </div>
          <div className="md:pr-8  2xl:mt-20">
            <div
              className={`scale-75 md:scale-100 mt-[-40px] md:mt-0 border-[${cardColor}] border-2`}>
              <div>
                <div className="  pt-0 md:pt-1  flex justify-end ">
                  {/* <button className='px-2 py-2 mx-1 bg-[#e5c5ff]'><HiViewList size={20} /></button> */}
                  <button
                    className={
                      view === "slider"
                        ? `px-2 py-2 mx-1 bg-[${cardColor}]`
                        : `px-2 pt-2 pb-1 mx-1 bg-[${backgroundColor}]`
                    }
                    onClick={handleToggle}>
                    <MdViewWeek size={20} />
                  </button>
                  <button
                    className={
                      view === "slider"
                        ? `px-2 pt-2 pb-1 mx-1 bg-[${backgroundColor}]`
                        : `px-2 py-2 mx-1 bg-[${cardColor}]`
                    }
                    onClick={handleToggle}>
                    <HiViewList size={20} />
                  </button>

                  {/* <button className='px-2 py-2 mx-1 bg-[#D09CFA]' onClick={handleToggle}><MdViewWeek size={20} /></button> */}
                </div>

                <div
                  className={` p-2 md:p-4 text-black  border-[${cardColor}] border-t-2  rounded-l-md rounded-b-md  `}>
                  {view === "slider" ? (
                    <>
                      <SliderBox
                        backGroundColor={backgroundColor}
                        cardColor={cardColor}
                        textColor={textColor}
                        data={data}
                      />
                    </>
                  ) : (
                    <>
                      <GridsBox
                        backGroundColor={backgroundColor}
                        cardColor={cardColor}
                        textColor={textColor}
                        data={data}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* section */}
        </div>
      </div>
    </div>
  );
};

export default ListPage;
