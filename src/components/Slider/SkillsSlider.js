import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
//import required modules
import { Pagination } from "swiper";
//import data
import { skills } from "../data/skillsdata";

const SkillsSlider = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1376: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}>
        {skills.map((slide, index) => {
          const { description, image, name, email } = slide;
          return (
            <SwiperSlide
              className="rounded-lg md:p-4 w-[100px] lg:p-6 max-h-[280px] bg-[#D09CFA] "
              key={index}>
              <div className="flex justify-center">
                <div>
                  <div>
                    <img
                      className="mb-3 md:mb-0  md:h-[50px] lg:h-[100px]"
                      src={image}
                      alt=""
                    />
                  </div>
                  <div className="text-center font-semibold mt-4">{name}</div>
                </div>
              </div>
              <p className="mb-8 min-h-[60px] text-[15px] text-center p-4">
                "{description}"
              </p>

              <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
                <div className="w-14"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SkillsSlider;
