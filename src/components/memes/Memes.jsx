import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";

const Memes = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={1.5}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          const slides = swiper.slides;
          slides.forEach((slide) => {
            slide.style.transform = "scale(0.9)";
          });
          const activeSlide = slides[swiper.activeIndex];
          activeSlide.style.transform = "scale(1)";
        }}
        onSwiper={(swiper) => {
          const slides = swiper.slides;
          slides.forEach((slide, index) => {
            slide.style.transform =
              index === swiper.activeIndex ? "scale(1)" : "scale(0.9)";
          });
        }}
      >
        <SwiperSlide className="w-full h-full relative">
          <img
            src="meme1.png"
            className="w-full h-full absolute brightness-50 rounded-[12px] sm:rounded-[20px]"
            alt=""
            srcset=""
          />
          <div className="w-full h-full flex flex-col gap-[5%] xs:gap-[20px] sm:gap-[20px] md:gap-[24px] lg:gap-[32px] xl:gap-[36px] px-[5%] xs:px-[32px] sm:px-[36px] md:px-[40px] lg:px-[50px] xl:px-[56px] py-[0px] xs:py-[28px] sm:py-[30px] md:py-[36px] lg:py-[40px] xl:py-[48px] items-start justify-center sm:justify-end absolute rounded-[20px] z-10">
            <p className="text-2xl lg:text-3xl text-white font-semibold uppercase">
              Politico
            </p>
            <p className="text-base sm:text-xl lg:text-2xl text-white font-thin w-full lg:w-[80%]">
              "Antimetal removed the burden of compute cost analysis and
              required long term spend commitments,{" "}
              <span className="text-base sm:text-xl lg:text-2xl font-bold">
                unlocking significant cost savings.
              </span>
              "
            </p>
            <div className="flex flex-col">
              <p className="text-lg text-white">Casey Arbaugh</p>
              <p className="text-sm text-white font-light opacity-60">
                Systems Engineering Manager, Politico
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full relative">
          <img
            src="meme1.png"
            className="w-full h-full absolute brightness-50 rounded-[12px] sm:rounded-[20px]"
            alt=""
            srcset=""
          />
          <div className="w-full h-full flex flex-col gap-[5%] xs:gap-[20px] sm:gap-[20px] md:gap-[24px] lg:gap-[32px] xl:gap-[36px] px-[5%] xs:px-[32px] sm:px-[36px] md:px-[40px] lg:px-[50px] xl:px-[56px] py-[0px] xs:py-[28px] sm:py-[30px] md:py-[36px] lg:py-[40px] xl:py-[48px] items-start justify-center sm:justify-end absolute rounded-[20px] z-10">
            <p className="text-2xl lg:text-3xl text-white font-semibold uppercase">
              Politico
            </p>
            <p className="text-base sm:text-xl lg:text-2xl text-white font-thin w-full lg:w-[80%]">
              "Antimetal removed the burden of compute cost analysis and
              required long term spend commitments,{" "}
              <span className="text-base sm:text-xl lg:text-2xl font-bold">
                unlocking significant cost savings.
              </span>
              "
            </p>
            <div className="flex flex-col">
              <p className="text-lg text-white">Casey Arbaugh</p>
              <p className="text-sm text-white font-light opacity-60">
                Systems Engineering Manager, Politico
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full relative">
          <img
            src="meme1.png"
            className="w-full h-full absolute brightness-50 rounded-[12px] sm:rounded-[20px]"
            alt=""
            srcset=""
          />
          <div className="w-full h-full flex flex-col gap-[5%] xs:gap-[20px] sm:gap-[20px] md:gap-[24px] lg:gap-[32px] xl:gap-[36px] px-[5%] xs:px-[32px] sm:px-[36px] md:px-[40px] lg:px-[50px] xl:px-[56px] py-[0px] xs:py-[28px] sm:py-[30px] md:py-[36px] lg:py-[40px] xl:py-[48px] items-start justify-center sm:justify-end absolute rounded-[20px] z-10">
            <p className="text-2xl lg:text-3xl text-white font-semibold uppercase">
              Politico
            </p>
            <p className="text-base sm:text-xl lg:text-2xl text-white font-thin w-full lg:w-[80%]">
              "Antimetal removed the burden of compute cost analysis and
              required long term spend commitments,{" "}
              <span className="text-base sm:text-xl lg:text-2xl font-bold">
                unlocking significant cost savings.
              </span>
              "
            </p>
            <div className="flex flex-col">
              <p className="text-lg text-white">Casey Arbaugh</p>
              <p className="text-sm text-white font-light opacity-60">
                Systems Engineering Manager, Politico
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full relative">
          <img
            src="meme1.png"
            className="w-full h-full absolute brightness-50 rounded-[12px] sm:rounded-[20px]"
            alt=""
            srcset=""
          />
          <div className="w-full h-full flex flex-col gap-[5%] xs:gap-[20px] sm:gap-[20px] md:gap-[24px] lg:gap-[32px] xl:gap-[36px] px-[5%] xs:px-[32px] sm:px-[36px] md:px-[40px] lg:px-[50px] xl:px-[56px] py-[0px] xs:py-[28px] sm:py-[30px] md:py-[36px] lg:py-[40px] xl:py-[48px] items-start justify-center sm:justify-end absolute rounded-[20px] z-10">
            <p className="text-2xl lg:text-3xl text-white font-semibold uppercase">
              Politico
            </p>
            <p className="text-base sm:text-xl lg:text-2xl text-white font-thin w-full lg:w-[80%]">
              "Antimetal removed the burden of compute cost analysis and
              required long term spend commitments,{" "}
              <span className="text-base sm:text-xl lg:text-2xl font-bold">
                unlocking significant cost savings.
              </span>
              "
            </p>
            <div className="flex flex-col">
              <p className="text-lg text-white">Casey Arbaugh</p>
              <p className="text-sm text-white font-light opacity-60">
                Systems Engineering Manager, Politico
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full relative">
          <img
            src="meme1.png"
            className="w-full h-full absolute brightness-50 rounded-[12px] sm:rounded-[20px]"
            alt=""
            srcset=""
          />
          <div className="w-full h-full flex flex-col gap-[5%] xs:gap-[20px] sm:gap-[20px] md:gap-[24px] lg:gap-[32px] xl:gap-[36px] px-[5%] xs:px-[32px] sm:px-[36px] md:px-[40px] lg:px-[50px] xl:px-[56px] py-[0px] xs:py-[28px] sm:py-[30px] md:py-[36px] lg:py-[40px] xl:py-[48px] items-start justify-center sm:justify-end absolute rounded-[20px] z-10">
            <p className="text-2xl lg:text-3xl text-white font-semibold uppercase">
              Politico
            </p>
            <p className="text-base sm:text-xl lg:text-2xl text-white font-thin w-full lg:w-[80%]">
              "Antimetal removed the burden of compute cost analysis and
              required long term spend commitments,{" "}
              <span className="text-base sm:text-xl lg:text-2xl font-bold">
                unlocking significant cost savings.
              </span>
              "
            </p>
            <div className="flex flex-col">
              <p className="text-lg text-white">Casey Arbaugh</p>
              <p className="text-sm text-white font-light opacity-60">
                Systems Engineering Manager, Politico
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Memes;
