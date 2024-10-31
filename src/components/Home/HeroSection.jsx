import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="w-full bg-[#0d1023] px-[16px] pb-[36px] xs:px-[20px] xs:pb-[40px] sm:px-[24px] sm:pb-[40px] md:px-[40px] md:pb-[60px] lg:px-[80px] lg:pb-[80px] xl:px-[100px] xl:pb-[100px]">
        <div className="w-full h-[88vh]"></div>
        <div className="flex flex-col gap-[12px] xs:gap-[14px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px] xl:gap-[28px] bg-[#0d1023]">
          <p className="w-fit h-fit px-[8px] py-[6px] font-inter font-normal text-[12px] sm:text-[16px] bg-[#050407] rounded-[4px] flex items-center text-center text-white">
            Marketing Agency Studio
          </p>

          <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] xl:gap-[32px]">
            <p className="font-satoshi font-bold text-[32px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[70px] leading-[32px] sm:leading-[36px] md:leading-[48px] lg:leading-[60px] xl:leading-[70px] flex items-center tracking-[-0.02em] text-white">
              Don't let marketing be the reason your business fails.
            </p>

            <p className="w-[100%] xs:w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] xl:w-[50%] font-inter font-normal text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-[#9CA5B4]">
              Startups, SMEs, and large enterprises come to Pitchhme to market
              themselves better and faster.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
