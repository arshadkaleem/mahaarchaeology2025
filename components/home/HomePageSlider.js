import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Scrollbar, A11y, EffectFade, Autoplay } from "swiper";

import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const HomePageSlider = ({ coverData }) => {
  return (
    <div className="relative">
      <div className="-z-50  ">
        <Swiper
          modules={[Autoplay, Scrollbar, A11y, EffectFade]}
          slidesPerView={1}
          effect={"fade"}
          speed={1200}
          loop
          // arrows=true
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {coverData &&
            coverData.map((item) => (
              <SwiperSlide key={Math.random() * 100}>
                <div className="h-full w-full relative">
                  <div className="">
                    <img
                      src={item.img.url}
                      alt=""
                      className="w-full sm:h-[600px] xl:h-[800] 2xl:h-[900px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

          {/* <SwiperSlide>
          <div className="h-full w-full relative">
            <div className="">
              <img
                src="/slider/image-2.jpg"
                alt=""
                className="w-full sm:h-[600px] xl:h-[750] 2xl:h-[900px]"
              />
            </div>
          </div>
        </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePageSlider;
