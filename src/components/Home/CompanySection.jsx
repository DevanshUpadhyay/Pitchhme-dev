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

const CompanySection = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full xs:w-[444px] sm:w-[538px] md:w-[712px] lg:w-[657px] xl:w-[753px] flex flex-col items-center justify-center gap-[12px] lg:gap-[16px] py-[100px] px-[16px]">
          <p className="font-normal text-[16px] leading-[24px] text-center text-[#1f2632]">
            Wall of love
          </p>
          <p className="w-full font-bold text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] leading-[40px] md:leading-[36px] lg:leading-[40px] xl:leading-[48px] text-center tracking-[-0.02em] text-[#1f2632]">
            Why People love Pitchhme
          </p>
          <p className="font-normal text-[18px] lg:text-[20px] leading-[24px] text-center text-[#1f2632]">
            Join thousands of companies who are streamlining and automating
            their cloud with Pitchhme
          </p>
        </div>
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
        <div className="w-full flex items-center justify-center gap-[10%] xs:gap-[30px] sm:gap-[80px] py-[100px] px-[16px]">
          <img
            src="/customer1.png"
            className="w-[82px] h-auto xs:w-auto xs:scale-90 sm:scale-100"
            alt=""
          />
          <img
            src="/customer2.png"
            className="w-[82px] h-auto xs:w-auto xs:scale-90 sm:scale-100"
            alt=""
          />
          <img
            src="/customer3.png"
            className="w-[82px] h-auto xs:w-auto xs:scale-90 sm:scale-100"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default CompanySection;
