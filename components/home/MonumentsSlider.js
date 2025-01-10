import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";

const MonumentsSlider = ({ homeSliderData }) => {
  const router = useRouter();
  var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="py-0  ">
        <Slider {...settings} className="overflow-hidden">
          {homeSliderData &&
            homeSliderData.map((item) => (
              <div key={Math.random() * 100} className="cursor-pointer">
                <img src={item.img.url} alt="img"  />
                <h5 className="font-medium h-12 text-black text-sm sm:text-base bg-white text-center bottom-0">
                  {router.locale === "en" ? item.titleInEnglish : item.title}
                </h5>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
};
export default MonumentsSlider;
