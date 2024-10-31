import React from "react";
import ProblemCard from "./ProblemCard";
import {
  CircleLargeWhite,
  CircleLargeBlack,
  CircleSmallBlack,
  CircleSmallWhite,
  CircleLargeExtraWhite,
} from "./Elements";
import Testimonial from "./testimonials/Testimonials";
import Memes from "./memes/Memes";
const FullCode = () => {
  return (
    <>
      <div className="w-full bg-[#FBFBFC]">
        {/* Section 1 */}

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

        {/* Section 2 */}
        <div
          className="w-full flex flex-col items-center justify-center bg-[#090B16] pt-[60px] pb-[100px]"
          style={{ border: "2px solid red" }}
        >
          <div className="hidden sm:flex sm:w-[538px] md:w-[712px] lg:w-[657px] xl:w-[753px] h-fit sm:justify-center lg:justify-between sm:mb-[8px] lg:mb-[0px]">
            <div className="hidden lg:flex w-[1px] h-[172px] bg-gradient-to-t from-white/[0.06] rounded-[2px]" />
            <div className="w-[1px] sm:h-[132px] md:h-[152px] lg:h-[172px] bg-gradient-to-t from-white/[0.06] rounded-[2px]" />
          </div>

          <div className="w-full flex justify-center items-center gap-[6px] xs:gap-[6px] sm:gap-[8px] md:gap-[8px] lg:gap-[6px] xl:gap-[8px] px-[8px] xs:px-[0px]">
            <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-l from-white/[0.06]  to-[#090B16] rounded-[2px]" />

            <div className="hidden md:flex w-[4px] h-[4px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="w-full xs:w-[194px] sm:w-[238px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[16px] xs:w-[24px] min-h-[16px] xs:h-[24px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="w-full xs:w-[194px] sm:w-[238px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="hidden md:flex w-[4px] h-[4px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-r from-white/[0.06] rounded-[2px]" />
          </div>

          <div className="w-[calc(100%-4px)] xs:w-[444px] sm:w-[538px] md:w-[712px] lg:w-[657px] xl:w-[753px] mb-[6px] xs:mb-[10px] sm:mb-[8px] md:mb-[8px] lg:mb-[6px] xl:mb-[8px] h-fit flex justify-between px-[8px] xs:px-[0px]">
            <div className="w-[1px] h-[172px] bg-white bg-opacity-[0.06] rounded-[2px]" />
            {/* <div className="w-fit flex flex-col items-center justify-center gap-[16px]">
              <p className="font-normal text-[16px] leading-[24px] text-center text-[#9CA5B4]">
                Problems
              </p>
              <p className="w-[298px] xs:w-[418px] sm:w-[558px] md:w-[698px] lg:w-[618px] xl:w-[758] font-bold text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] leading-[40px]  md:leading-[36px] lg:leading-[40px] xl:leading-[48px] text-center tracking-[-0.02em] text-white">
                Do any of these sound familiar?
              </p>
            </div> */}

            <div className="w-[1px] h-[172px] bg-white bg-opacity-[0.06] rounded-[2px]" />
          </div>

          <div className="w-full flex justify-center items-center mb-[6px] xs:mb-[6px] sm:mb-[0px] gap-[6px] xs:gap-[6px] sm:gap-[8px] md:gap-[8px] lg:gap-[6px] xl:gap-[8px] px-[8px] xs:px-[0px]">
            <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-l from-white/[0.06] rounded-[2px]" />

            <div className="hidden xs:flex xs:w-[4px] sm:w-[24px] xs:h-[4px] sm:h-[24px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="hidden xs:flex xs:w-[128px] sm:w-[148px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="w-full xs:hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] xs:w-[138px] sm:w-[158px] md:w-[4px] h-[4px] xs:h-[1px] sm:h-[1px] md:h-[4px] bg-white bg-opacity-[0.08] rounded-full sm:rounded-[2px] md:rounded-full" />

            <div className="w-full xs:hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="hidden xs:flex xs:w-[128px] sm:w-[148px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="hidden xs:flex xs:w-[4px] sm:w-[24px] xs:h-[4px] sm:h-[24px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-r from-white/[0.06] rounded-[2px]" />
          </div>
          <>
            <div className="w-full hidden lg:flex justify-center items-center lg:gap-[6px] xl:gap-[8px]">
              <div class="lg:w-[148px] xl:w-[168px] lg:h-[148px] xl:h-[168px] flex flex-col justify-center items-center lg:gap-[16px] xl:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] lg:p-[12px] xl:p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] lg:h-[138px] xl:h-[158px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="lg:w-[148px] xl:w-[168px] lg:h-[148px] xl:h-[168px] flex flex-col justify-center items-center lg:gap-[16px] xl:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] lg:p-[12px] xl:p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] lg:h-[148px] xl:h-[168px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="lg:w-[148px] xl:w-[168px] lg:h-[148px] xl:h-[168px] flex flex-col justify-center items-center lg:gap-[16px] xl:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] lg:p-[12px] xl:p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] lg:h-[148px] xl:h-[168px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="lg:w-[148px] xl:w-[168px] lg:h-[148px] xl:h-[168px] flex flex-col justify-center items-center lg:gap-[16px] xl:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] lg:p-[12px] xl:p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] lg:h-[148px] xl:h-[168px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="lg:w-[148px] xl:w-[168px] lg:h-[148px] xl:h-[168px] flex flex-col justify-center items-center lg:gap-[16px] xl:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] lg:p-[12px] xl:p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] lg:h-[138px] xl:h-[158px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="lg:w-[148px] xl:w-[168px] lg:h-[148px] xl:h-[168px] flex flex-col justify-center items-center lg:gap-[16px] xl:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] lg:p-[12px] xl:p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
            </div>
            <div className="w-full hidden md:flex lg:hidden justify-center items-center gap-[8px]">
              <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] md:p-[24px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] md:h-[158px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] md:p-[24px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] md:h-[158px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] md:p-[24px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] md:h-[158px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] md:p-[24px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
            </div>
            <div className="w-full hidden xs:flex md:hidden justify-center items-center xs:gap-[6px] sm:gap-[8px]">
              <div class="xs:w-[138px] sm:w-[158px] xs:h-[138px] sm:h-[158px] flex flex-col justify-center items-center xs:gap-[12px] sm:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] xs:p-[12px] sm:p-[24px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] xs:h-[128px] sm:h-[158px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="xs:w-[138px] sm:w-[158px] xs:h-[138px] sm:h-[158px] flex flex-col justify-center items-center xs:gap-[12px] sm:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] xs:p-[12px] sm:p-[24px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] xs:h-[128px] sm:h-[158px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="xs:w-[138px] sm:w-[158px] xs:h-[138px] sm:h-[158px] flex flex-col justify-center items-center xs:gap-[12px] sm:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] xs:p-[12px] sm:p-[24px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
            </div>
            <div className="w-full flex xs:hidden justify-center items-center gap-[4px] px-[8px]">
              <div className="w-[1px] mx-[1.5px] h-[138px]  bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="w-full min-h-[138px] flex flex-col justify-center items-center gap-[8px] bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] h-[138px]  bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="w-full min-h-[138px] flex flex-col justify-center items-center gap-[8px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] h-[138px]  bg-white bg-opacity-[0.06] rounded-[2px]" />
            </div>
          </>

          <div className="w-full flex justify-center items-center mb-[6px] xs:mb-[6px] sm:mb-[0px] gap-[6px] xs:gap-[6px] sm:gap-[8px] md:gap-[8px] lg:gap-[6px] xl:gap-[8px] px-[8px] xs:px-[0px]">
            <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-l from-white/[0.06] rounded-[2px]" />

            <div className="hidden xs:flex xs:w-[4px] sm:w-[24px] xs:h-[4px] sm:h-[24px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="hidden xs:flex xs:w-[128px] sm:w-[148px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="w-full xs:hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] xs:w-[138px] sm:w-[158px] md:w-[4px] h-[4px] xs:h-[1px] sm:h-[1px] md:h-[4px] bg-white bg-opacity-[0.08] rounded-full sm:rounded-[2px] md:rounded-full" />

            <div className="w-full xs:hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="hidden xs:flex xs:w-[128px] sm:w-[148px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="hidden xs:flex xs:w-[4px] sm:w-[24px] xs:h-[4px] sm:h-[24px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-r from-white/[0.06] rounded-[2px]" />
          </div>
          <>
            <div className="w-full hidden lg:flex justify-center items-center lg:gap-[6px] xl:gap-[8px]">
              <div class="lg:w-[148px] xl:w-[168px] lg:h-[148px] xl:h-[168px] flex flex-col justify-center items-center lg:gap-[16px] xl:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] lg:p-[12px] xl:p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] lg:h-[138px] xl:h-[158px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="lg:w-[148px] xl:w-[168px] lg:h-[148px] xl:h-[168px] flex flex-col justify-center items-center lg:gap-[16px] xl:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] lg:p-[12px] xl:p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] lg:h-[148px] xl:h-[168px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="lg:w-[148px] xl:w-[168px] lg:h-[148px] xl:h-[168px] flex flex-col justify-center items-center lg:gap-[16px] xl:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] lg:p-[12px] xl:p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] lg:h-[148px] xl:h-[168px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="lg:w-[148px] xl:w-[168px] lg:h-[148px] xl:h-[168px] flex flex-col justify-center items-center lg:gap-[16px] xl:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] lg:p-[12px] xl:p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] lg:h-[148px] xl:h-[168px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="lg:w-[148px] xl:w-[168px] lg:h-[148px] xl:h-[168px] flex flex-col justify-center items-center lg:gap-[16px] xl:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] lg:p-[12px] xl:p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] lg:h-[138px] xl:h-[158px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="lg:w-[148px] xl:w-[168px] lg:h-[148px] xl:h-[168px] flex flex-col justify-center items-center lg:gap-[16px] xl:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] lg:p-[12px] xl:p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
            </div>
            <div className="w-full hidden md:flex lg:hidden justify-center items-center gap-[8px]">
              <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] md:p-[24px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] md:h-[158px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] md:p-[24px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] md:h-[158px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] md:p-[24px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] md:h-[158px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] md:p-[24px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
            </div>
            <div className="w-full hidden xs:flex md:hidden justify-center items-center xs:gap-[6px] sm:gap-[8px]">
              <div class="xs:w-[138px] sm:w-[158px] xs:h-[138px] sm:h-[158px] flex flex-col justify-center items-center xs:gap-[12px] sm:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] xs:p-[12px] sm:p-[24px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] xs:h-[128px] sm:h-[158px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="xs:w-[138px] sm:w-[158px] xs:h-[138px] sm:h-[158px] flex flex-col justify-center items-center xs:gap-[12px] sm:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] xs:p-[12px] sm:p-[24px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] xs:h-[128px] sm:h-[158px] bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="xs:w-[138px] sm:w-[158px] xs:h-[138px] sm:h-[158px] flex flex-col justify-center items-center xs:gap-[12px] sm:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] xs:p-[12px] sm:p-[24px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
            </div>
            <div className="w-full flex xs:hidden justify-center items-center gap-[4px] px-[8px]">
              <div className="w-[1px] mx-[1.5px] h-[138px]  bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="w-full min-h-[138px] flex flex-col justify-center items-center gap-[8px] bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] h-[138px]  bg-white bg-opacity-[0.06] rounded-[2px]" />
              <div class="w-full min-h-[138px] flex flex-col justify-center items-center gap-[8px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-[16px] p-[16px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon1.png"
                  alt=""
                  srcset=""
                />
                <div class="font-inter font-medium text-[14px] leading-[20px] flex items-center text-center text-[#D7D9DD]">
                  Good marketers are hard to find, never stick long
                </div>
              </div>
              <div className="w-[1px] mx-[1.5px] h-[138px]  bg-white bg-opacity-[0.06] rounded-[2px]" />
            </div>
          </>

          <div className="w-full flex justify-center items-center mb-[6px] xs:mb-[6px] sm:mb-[0px] gap-[6px] xs:gap-[6px] sm:gap-[8px] md:gap-[8px] lg:gap-[6px] xl:gap-[8px] px-[8px] xs:px-[0px]">
            <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-l from-white/[0.06] rounded-[2px]" />

            <div className="hidden xs:flex xs:w-[4px] sm:w-[24px] xs:h-[4px] sm:h-[24px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="hidden xs:flex xs:w-[128px] sm:w-[148px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="w-full xs:hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] xs:w-[138px] sm:w-[158px] md:w-[4px] h-[4px] xs:h-[1px] sm:h-[1px] md:h-[4px] bg-white bg-opacity-[0.08] rounded-full sm:rounded-[2px] md:rounded-full" />

            <div className="w-full xs:hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="hidden xs:flex xs:w-[128px] sm:w-[148px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="hidden xs:flex xs:w-[4px] sm:w-[24px] xs:h-[4px] sm:h-[24px] bg-white bg-opacity-[0.08] rounded-full" />

            <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-r from-white/[0.06] rounded-[2px]" />
          </div>

          <div
            className="hidden sm:flex sm:w-[538px] md:w-[712px] lg:w-[657px] xl:w-[753px] h-fit sm:justify-center lg:justify-between"
            style={{ border: "2px solid red" }}
          >
            <div className="hidden lg:flex w-[1px] sm:h-[132px] md:h-[152px] lg:h-[172px] bg-gradient-to-b from-white/[0.06] rounded-[2px]" />
            <div className="w-[1px] sm:h-[132px] md:h-[152px] lg:h-[172px] bg-gradient-to-b from-white/[0.06] rounded-[2px]" />
            <div className="hidden lg:flex w-[1px] sm:h-[132px] md:h-[152px] lg:h-[172px] bg-gradient-to-b from-white/[0.06] rounded-[2px]" />
          </div>
        </div>

        {/* Section 3 */}

        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-[766px] h-[120px] border-y-0 border-x-[1px] border-black border-opacity-[0.06] rounded-[2px]" />
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
          <div className="w-[766px] flex flex-col items-center justify-center py-[32px] gap-[16px] border-y-0 border-x-[1px] border-black border-opacity-[0.06] rounded-[2px]">
            <div className="font-inter font-normal text-[16px] leading-[24px] flex items-center text-center text-[#1F2632]">
              Solutions
            </div>

            <div className="font-satoshi font-bold text-[48px] leading-[56px] flex items-center text-center tracking-[-0.02em] text-[#1F2632]">
              If they resonate… you're not alone. We can help.
            </div>
            <div className="font-inter font-normal text-[20px] leading-[32px] text-center text-[#454E5E] opacity-80 my-[12px]">
              Led by <span className="text-[#5414F5]">Arpit Pandey</span> and
              <span className="text-[#5414F5]"> Chirag Bum</span>, our studio
              delivers the quality of a big, expensive agency with the pace and
              agility of a dedicated team.
            </div>
          </div>

          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
          <div className="relative">
            <img src="/solutions.png" alt="" srcset="" />
            <div class="absolute right-[25%] top-[36%] font-inter font-medium text-[16px] leading-[19px] flex items-center text-[#5414F5]">
              Our Vision
            </div>
            <div class="absolute left-[24%] bottom-[31%] font-inter font-medium text-[16px] leading-[19px] flex items-center text-[#5414F5]">
              Our Mission
            </div>
          </div>
        </div>

        {/* Section 4 */}

        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-[766px] h-[120px] border-y-0 border-x-[1px] border-black border-opacity-[0.06] rounded-[2px]" />
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
          <div className="w-[766px] flex flex-col items-center justify-center py-[32px] gap-[16px] border-y-0 border-x-[1px] border-black border-opacity-[0.06] rounded-[2px]">
            <div className="font-inter font-normal text-[16px] leading-[24px] flex items-center text-center text-[#1F2632]">
              Performance
            </div>

            <div className="font-satoshi font-bold text-[48px] leading-[56px] flex items-center text-center tracking-[-0.02em] text-[#1F2632]">
              Our Results
            </div>
            <div className="font-inter font-normal text-[20px] leading-[32px] text-center text-[#454E5E] opacity-80 my-[12px]">
              For our clients we have helped them gained the traction on their
              channels and get conversion for their business
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[112px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[200px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[200px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[200px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[200px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[112px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
          <div class="flex flex-row items-center p-0 my-[7.5px] w-[960px] h-[200px]">
            <div class="relative w-[240px] h-[200px] border-y-0 border-l-[1px] border-black border-opacity-[0.06] rounded-[2px]">
              <div class="absolute w-[132px] h-[48px] left-[25px] top-[34px] text-[40px] leading-[48px] font-medium text-[#11B3BB] flex items-center">
                120M+
              </div>
              <div class="absolute w-[200px] h-[56px] left-[20px] top-[110px] text-[16px] leading-[28px] text-[rgba(2,8,22,0.88)] flex items-center">
                Total Views on Social Media on all platforms
              </div>
            </div>

            <div class="relative w-[240px] h-[200px] border-y-0 border-l-[1px] border-black border-opacity-[0.06] rounded-[2px]">
              <div class="absolute w-[124px] h-[48px] left-[25px] top-[34px] text-[40px] leading-[48px] font-medium text-[#FF3F4C] flex items-center">
                >1000
              </div>
              <div class="absolute w-[200px] h-[56px] left-[20px] top-[110px] text-[16px] leading-[28px] text-[rgba(2,8,22,0.88)] flex items-center">
                Paid Search Campaigns Launched
              </div>
            </div>

            <div class="relative w-[240px] h-[200px] border-y-0 border-x-[1px] border-black border-opacity-[0.06] rounded-[2px]">
              <div class="absolute w-[76px] h-[48px] left-[25px] top-[34px] text-[40px] leading-[48px] font-medium text-[#01C93A] flex items-center">
                25+
              </div>
              <div class="absolute w-[200px] h-[56px] left-[20px] top-[110px] text-[16px] leading-[28px] text-[rgba(2,8,22,0.88)] flex items-center">
                GEOs covered in performance marketing
              </div>
            </div>

            <div class="relative w-[240px] h-[200px] border-y-0 border-r-[1px] border-black border-opacity-[0.06] rounded-[2px]">
              <div class="absolute w-[115px] h-[48px] left-[25px] top-[34px] text-[40px] leading-[48px] font-medium text-[#5414F5] flex items-center">
                15.5M
              </div>
              <div class="absolute w-[200px] h-[56px] left-[20px] top-[110px] text-[16px] leading-[28px] text-[rgba(2,8,22,0.88)] flex items-center">
                Engagement we provided for our clients' business
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[112px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[200px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[200px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[200px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[200px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[112px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
        </div>

        {/* Section 5 */}

        <div className="w-full flex flex-col items-center justify-center">
          <div class="font-inter font-normal text-[20px] leading-[32px] my-[64px] flex items-center text-[#454E5E] opacity-80">
            And we've spent 3 years doing it with great teams at
          </div>
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
          <div className="w-full flex items-center px-[200px] justify-between">
            <img src="/client1.png" alt="" srcset="" />
            <img src="/client2.png" alt="" srcset="" />
            <img src="/client3.png" alt="" srcset="" />
            <img src="/client4.png" alt="" srcset="" />
            <img src="/client5.png" alt="" srcset="" />
            <img src="/client6.png" alt="" srcset="" />
          </div>
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
          <div className="w-full flex items-center px-[200px] justify-between">
            <img src="/client1.png" alt="" srcset="" />
            <img src="/client2.png" alt="" srcset="" />
            <img src="/client3.png" alt="" srcset="" />
            <img src="/client4.png" alt="" srcset="" />
            <img src="/client5.png" alt="" srcset="" />
            <img src="/client6.png" alt="" srcset="" />
          </div>

          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
        </div>

        {/* Section 6 */}

        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-[766px] h-[120px] border-y-0 border-x-[1px] border-black border-opacity-[0.06] rounded-[2px]" />
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>

          <div className="w-[766px] flex flex-col items-center justify-center py-[32px] gap-[16px] border-y-0 border-x-[1px] border-black border-opacity-[0.06] rounded-[2px]">
            <p className="font-inter font-normal text-[16px] leading-[24px] flex items-center text-center text-[#1F2632]">
              Services
            </p>

            <p className="font-satoshi font-bold text-[48px] leading-[56px] flex items-center text-center tracking-[-0.02em] text-[#1F2632]">
              Expertise You Can Trust
            </p>
          </div>
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[112px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeBlack />
            <div className="w-[200px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeBlack />
            <div className="w-[200px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeBlack />
            <div className="w-[200px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeBlack />
            <div className="w-[200px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeBlack />
            <div className="w-[112px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
          <div className="w-full flex flex-col gap-[40px] px-[120px]">
            <div className="w-full grid grid-cols-12 items-center justify-center gap-[40px] ">
              <div class="col-span-7 flex flex-col justify-center items-start p-0 gap-[20px]">
                <div className="w-full flex items-center justify-center gap-[7.5px] mb-[20px]">
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                </div>
                <div class="flex flex-col items-start p-0 gap-[12px]">
                  <p class="font-inter font-medium text-[14px] leading-[17px] flex items-center text-[#1F2632]">
                    01/
                  </p>

                  <p class="font-inter font-medium text-[28px] leading-[34px] flex items-center tracking-[-0.01em] text-[#1F2632]">
                    Social Media
                  </p>
                </div>

                <p class="font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#454E5E] opacity-80">
                  Engage your audience on their favourite platforms to foster
                  meaningful relationships that build trust.
                </p>

                <div class="flex flex-row flex-wrap items-center p-0 gap-[10px]">
                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Social Media Strategy
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Content Ideation
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Content Production & Posting
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Organic Reporting
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Community Engagement
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 flex justify-center items-center">
                <div class="w-[496px] h-[354px] bg-white/80 shadow-[0px_0px_0px_1px_rgba(14,63,126,0.04),0px_1px_1px_-0.5px_rgba(42,51,69,0.04),0px_3px_3px_-1.5px_rgba(42,51,70,0.04),0px_6px_6px_-3px_rgba(42,51,70,0.04),0px_12px_12px_-6px_rgba(14,63,126,0.04),0px_24px_24px_-12px_rgba(14,63,126,0.04)] rounded-[16px]"></div>
              </div>
            </div>
            <div className="w-full grid grid-cols-12 items-center justify-center gap-[40px]">
              <div class="col-span-7 flex flex-col justify-center items-start p-0 gap-[20px]">
                <div className="w-full flex items-center justify-center gap-[7.5px] mb-[20px]">
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />

                  <CircleLargeExtraWhite />
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                </div>
                <div class="flex flex-col items-start p-0 gap-[12px]">
                  <p class="font-inter font-medium text-[14px] leading-[17px] flex items-center text-[#1F2632]">
                    01/
                  </p>

                  <p class="font-inter font-medium text-[28px] leading-[34px] flex items-center tracking-[-0.01em] text-[#1F2632]">
                    Influencer Marketing
                  </p>
                </div>

                <p class="font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#454E5E] opacity-80">
                  Boost engagement and sales with strategic influencer
                  advertising campaigns that create a buzz across the web.
                </p>

                <div class="flex flex-row flex-wrap items-center p-0 gap-[10px]">
                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Influencer Marketing Strategy
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Campaign Concept
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Branded Content
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Measurement
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Campaign Activation
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 flex justify-center items-center">
                <div class="w-[496px] h-[354px] bg-white/80 shadow-[0px_0px_0px_1px_rgba(14,63,126,0.04),0px_1px_1px_-0.5px_rgba(42,51,69,0.04),0px_3px_3px_-1.5px_rgba(42,51,70,0.04),0px_6px_6px_-3px_rgba(42,51,70,0.04),0px_12px_12px_-6px_rgba(14,63,126,0.04),0px_24px_24px_-12px_rgba(14,63,126,0.04)] rounded-[16px]"></div>
              </div>
            </div>
            <div className="w-full grid grid-cols-12 items-center justify-center gap-[40px]">
              <div class="col-span-7 flex flex-col justify-center items-start p-0 gap-[20px]">
                <div className="w-full flex items-center justify-center gap-[7.5px] mb-[20px]">
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                </div>
                <div class="flex flex-col items-start p-0 gap-[12px]">
                  <p class="font-inter font-medium text-[14px] leading-[17px] flex items-center text-[#1F2632]">
                    02/
                  </p>

                  <p class="font-inter font-medium text-[28px] leading-[34px] flex items-center tracking-[-0.01em] text-[#1F2632]">
                    Social Media
                  </p>
                </div>

                <p class="font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#454E5E] opacity-80">
                  Engage your audience on their favourite platforms to foster
                  meaningful relationships that build trust.
                </p>

                <div class="flex flex-row flex-wrap items-center p-0 gap-[10px]">
                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Social Media Strategy
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Content Ideation
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Content Production & Posting
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Organic Reporting
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Community Engagement
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 flex justify-center items-center">
                <div class="w-[496px] h-[354px] bg-white/80 shadow-[0px_0px_0px_1px_rgba(14,63,126,0.04),0px_1px_1px_-0.5px_rgba(42,51,69,0.04),0px_3px_3px_-1.5px_rgba(42,51,70,0.04),0px_6px_6px_-3px_rgba(42,51,70,0.04),0px_12px_12px_-6px_rgba(14,63,126,0.04),0px_24px_24px_-12px_rgba(14,63,126,0.04)] rounded-[16px]"></div>
              </div>
            </div>
            <div className="w-full grid grid-cols-12 items-center justify-center gap-[40px]">
              <div class="col-span-7 flex flex-col justify-center items-start p-0 gap-[20px]">
                <div className="w-full flex items-center justify-center gap-[7.5px] mb-[20px]">
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                </div>
                <div class="flex flex-col items-start p-0 gap-[12px]">
                  <p class="font-inter font-medium text-[14px] leading-[17px] flex items-center text-[#1F2632]">
                    03/
                  </p>

                  <p class="font-inter font-medium text-[28px] leading-[34px] flex items-center tracking-[-0.01em] text-[#1F2632]">
                    Paid Social
                  </p>
                </div>

                <p class="font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#454E5E] opacity-80">
                  Reach new audiences and increase LTV through the power of
                  expansive targeting criteria and highly targeted ads.
                </p>

                <div class="flex flex-row flex-wrap items-center p-0 gap-[10px]">
                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Facebook Ads
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      LinkedIn Ads
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Instagrams Ads
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Ongoing Campaign Optimization
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Campaign Strategy & Measurement
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 flex justify-center items-center">
                <div class="w-[496px] h-[354px] bg-white/80 shadow-[0px_0px_0px_1px_rgba(14,63,126,0.04),0px_1px_1px_-0.5px_rgba(42,51,69,0.04),0px_3px_3px_-1.5px_rgba(42,51,70,0.04),0px_6px_6px_-3px_rgba(42,51,70,0.04),0px_12px_12px_-6px_rgba(14,63,126,0.04),0px_24px_24px_-12px_rgba(14,63,126,0.04)] rounded-[16px]"></div>
              </div>
            </div>
            <div className="w-full grid grid-cols-12 items-center justify-center gap-[40px]">
              <div class="col-span-7 flex flex-col justify-center items-start p-0 gap-[20px]">
                <div className="w-full flex items-center justify-center gap-[7.5px] mb-[20px]">
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                </div>
                <div class="flex flex-col items-start p-0 gap-[12px]">
                  <p class="font-inter font-medium text-[14px] leading-[17px] flex items-center text-[#1F2632]">
                    04/
                  </p>

                  <p class="font-inter font-medium text-[28px] leading-[34px] flex items-center tracking-[-0.01em] text-[#1F2632]">
                    Paid Search
                  </p>
                </div>

                <p class="font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#454E5E] opacity-80">
                  Maximise ROI on your ad spends and eliminate waste with ads
                  people actually want to see and are targeted appropriately.
                </p>

                <div class="flex flex-row flex-wrap items-center p-0 gap-[10px]">
                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Google Ads
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Youtube Video Ads
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Display Ads
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Remarketing Strategy
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Programmatic Advertising
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 flex justify-center items-center">
                <div class="w-[496px] h-[354px] bg-white/80 shadow-[0px_0px_0px_1px_rgba(14,63,126,0.04),0px_1px_1px_-0.5px_rgba(42,51,69,0.04),0px_3px_3px_-1.5px_rgba(42,51,70,0.04),0px_6px_6px_-3px_rgba(42,51,70,0.04),0px_12px_12px_-6px_rgba(14,63,126,0.04),0px_24px_24px_-12px_rgba(14,63,126,0.04)] rounded-[16px]"></div>
              </div>
            </div>
            <div className="w-full grid grid-cols-12 items-center justify-center gap-[40px]">
              <div class="col-span-7 flex flex-col justify-center items-start p-0 gap-[20px]">
                <div className="w-full flex items-center justify-center gap-[7.5px] mb-[20px]">
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                </div>
                <div class="flex flex-col items-start p-0 gap-[12px]">
                  <p class="font-inter font-medium text-[14px] leading-[17px] flex items-center text-[#1F2632]">
                    05/
                  </p>

                  <p class="font-inter font-medium text-[28px] leading-[34px] flex items-center tracking-[-0.01em] text-[#1F2632]">
                    Community Management
                  </p>
                </div>

                <p class="font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#454E5E] opacity-80">
                  Create a genuine sense of belonging by building and nurturing
                  a community of loyal customers/users.
                </p>

                <div class="flex flex-row flex-wrap items-center p-0 gap-[10px]">
                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Community Engagement Strategies
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Partnership Building
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Community Management
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Discussion Moderation
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Analytics & Insights
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 flex justify-center items-center">
                <div class="w-[496px] h-[354px] bg-white/80 shadow-[0px_0px_0px_1px_rgba(14,63,126,0.04),0px_1px_1px_-0.5px_rgba(42,51,69,0.04),0px_3px_3px_-1.5px_rgba(42,51,70,0.04),0px_6px_6px_-3px_rgba(42,51,70,0.04),0px_12px_12px_-6px_rgba(14,63,126,0.04),0px_24px_24px_-12px_rgba(14,63,126,0.04)] rounded-[16px]"></div>
              </div>
            </div>
            <div className="w-full grid grid-cols-12 items-center justify-center gap-[40px]">
              <div class="col-span-7 flex flex-col justify-center items-start p-0 gap-[20px]">
                <div className="w-full flex items-center justify-center gap-[7.5px] mb-[20px]">
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                  <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <CircleLargeExtraWhite />
                </div>
                <div class="flex flex-col items-start p-0 gap-[12px]">
                  <p class="font-inter font-medium text-[14px] leading-[17px] flex items-center text-[#1F2632]">
                    06/
                  </p>

                  <p class="font-inter font-medium text-[28px] leading-[34px] flex items-center tracking-[-0.01em] text-[#1F2632]">
                    Web Development
                  </p>
                </div>

                <p class="font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#454E5E] opacity-80">
                  Create experience that immerse consumers in the brand through
                  a combination of utility and creativity.
                </p>

                <div class="flex flex-row flex-wrap items-center p-0 gap-[10px]">
                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Journey & Mapping Testing
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Website & App Design
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      Interaction Design
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      SEO & Analytics
                    </p>
                  </div>

                  <div class="flex flex-row justify-center items-center p-[8px_16px] w-fit h-[40px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                    <p class="w-fit h-[24px] font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#1F2632] opacity-90">
                      CMS Implementation
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 flex justify-center items-center">
                <div class="w-[496px] h-[354px] bg-white/80 shadow-[0px_0px_0px_1px_rgba(14,63,126,0.04),0px_1px_1px_-0.5px_rgba(42,51,69,0.04),0px_3px_3px_-1.5px_rgba(42,51,70,0.04),0px_6px_6px_-3px_rgba(42,51,70,0.04),0px_12px_12px_-6px_rgba(14,63,126,0.04),0px_24px_24px_-12px_rgba(14,63,126,0.04)] rounded-[16px]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7 */}

        <div className="w-full flex flex-col items-center justify-center gap-[40px]">
          <div class="font-inter font-normal text-[20px] leading-[32px] flex items-center text-[#454E5E] opacity-80">
            We work with these industries
          </div>
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
          <div className="w-full grid grid-cols-12 items-center justify-between px-[200px]">
            <p className="col-span-2 h-[18px] flex items-center justify-center text-[14px] font-normal leading-[18px] tracking-[0.06em] text-[#1F2632] opacity-80">
              HEALTH TECH
            </p>

            <p className="col-span-2 h-[18px] flex items-center justify-center text-[14px] font-normal leading-[18px] tracking-[0.06em] text-[#1F2632] opacity-80">
              FINTECH
            </p>

            <p className="col-span-2 h-[18px] flex items-center justify-center text-[14px] font-normal leading-[18px] tracking-[0.06em] text-[#1F2632] opacity-80">
              CRYPTO
            </p>

            <p className="col-span-2 h-[18px] flex items-center justify-center text-[14px] font-normal leading-[18px] tracking-[0.06em] text-[#1F2632] opacity-80">
              E-COMMERCE
            </p>

            <p className="col-span-2 h-[18px] flex items-center justify-center text-[14px] font-normal leading-[18px] tracking-[0.06em] text-[#1F2632] opacity-80">
              RETAIL
            </p>

            <p className="col-span-2 h-[18px] flex items-center justify-center text-[14px] font-normal leading-[18px] tracking-[0.06em] text-[#1F2632] opacity-80">
              NGOs
            </p>
          </div>
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
          <div className="w-full grid grid-cols-12 items-center justify-between px-[200px]">
            <p className="col-span-2 h-[18px] flex items-center justify-center text-[14px] font-normal leading-[18px] tracking-[0.06em] text-[#1F2632] opacity-80">
              SAAS
            </p>

            <p className="col-span-2 h-[18px] flex items-center justify-center text-[14px] font-normal leading-[18px] tracking-[0.06em] text-[#1F2632] opacity-80">
              PUBLIC SERVICE
            </p>

            <p className="col-span-2 h-[18px] flex items-center justify-center text-[14px] font-normal leading-[18px] tracking-[0.06em] text-[#1F2632] opacity-80">
              TRAVEL
            </p>

            <p className="col-span-2 h-[18px] flex items-center justify-center text-[14px] font-normal leading-[18px] tracking-[0.06em] text-[#1F2632] opacity-80">
              HOSPITALITY
            </p>

            <p className="col-span-2 h-[18px] flex items-center justify-center text-[14px] font-normal leading-[18px] tracking-[0.06em] text-[#1F2632] opacity-80">
              NON - PROFIT
            </p>

            <p className="col-span-2 h-[18px] flex items-center justify-center text-[14px] font-normal leading-[18px] tracking-[0.06em] text-[#1F2632] opacity-80">
              ENTERTAINMENT
            </p>
          </div>
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
        </div>

        {/* Section 8 */}

        <div className="w-full flex flex-col items-center justify-center gap-[7.5px]">
          <div className="w-[766px] h-[120px] border-y-0 border-x-[1px] border-black border-opacity-[0.06] rounded-[2px]" />
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeBlack />
            <div className="w-[162px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleSmallBlack />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
          <div className="w-[766px] flex flex-col items-center justify-center py-[32px] gap-[16px] border-y-0 border-x-[1px] border-black border-opacity-[0.06] rounded-[2px]">
            <div className="font-inter font-normal text-[16px] leading-[24px] flex items-center text-center text-[#1F2632]">
              Case studies
            </div>

            <div className="font-satoshi font-bold text-[48px] leading-[56px] flex items-center text-center tracking-[-0.02em] text-[#1F2632]">
              Our Work
            </div>
            <div className="font-inter font-normal text-[20px] leading-[32px] text-center text-[#454E5E] opacity-80 my-[12px]">
              Pitchhme provides best-in-class marketing services
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[440px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[440px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
          <div className="w-full flex items-center justify-center gap-[24px]">
            <div className="w-[1px] h-[440px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <div className="flex flex-col gap-[36px]">
              <div class="w-[432px] h-[300px] bg-white/80 shadow-[0px_0px_0px_1px_rgba(14,63,126,0.04),0px_1px_1px_-0.5px_rgba(42,51,69,0.04),0px_3px_3px_-1.5px_rgba(42,51,70,0.04),0px_6px_6px_-3px_rgba(42,51,70,0.04),0px_12px_12px_-6px_rgba(14,63,126,0.04),0px_24px_24px_-12px_rgba(14,63,126,0.04)] rounded-[16px]" />
              <div className="flex flex-col justify-center items-start p-0 gap-3 w-[432px] h-[64px]">
                <p className="w-[432px] h-[28px] flex items-center text-[22px] font-medium leading-[28px] text-[#020816]">
                  TVF
                </p>

                <p className="w-[432px] h-[24px] flex items-center text-[16px] font-light leading-[24px] text-[rgba(0,11,33,0.73)]">
                  Branding & Creative, Web Development, Social Media
                </p>
              </div>
            </div>

            <div className="w-[1px] h-[440px] bg-black bg-opacity-[0.06] rounded-[2px]" />

            <div className="flex flex-col gap-[36px]">
              <div class="w-[432px] h-[300px] bg-white/80 shadow-[0px_0px_0px_1px_rgba(14,63,126,0.04),0px_1px_1px_-0.5px_rgba(42,51,69,0.04),0px_3px_3px_-1.5px_rgba(42,51,70,0.04),0px_6px_6px_-3px_rgba(42,51,70,0.04),0px_12px_12px_-6px_rgba(14,63,126,0.04),0px_24px_24px_-12px_rgba(14,63,126,0.04)] rounded-[16px]" />
              <div className="flex flex-col justify-center items-start p-0 gap-3 w-[432px] h-[64px]">
                <p className="w-[432px] h-[28px] flex items-center text-[22px] font-medium leading-[28px] text-[#020816]">
                  Netflix
                </p>

                <p className="w-[432px] h-[24px] flex items-center text-[16px] font-light leading-[24px] text-[rgba(0,11,33,0.73)]">
                  SMM, Design, Community Management
                </p>
              </div>
            </div>

            <div className="w-[1px] h-[440px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <CircleLargeExtraWhite />
            <div className="w-[440px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[440px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
          </div>
          <div className="w-full flex items-center justify-center gap-[24px]">
            <div className="w-[1px] h-[440px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <div className="flex flex-col gap-[36px]">
              <div class="w-[432px] h-[300px] bg-white/80 shadow-[0px_0px_0px_1px_rgba(14,63,126,0.04),0px_1px_1px_-0.5px_rgba(42,51,69,0.04),0px_3px_3px_-1.5px_rgba(42,51,70,0.04),0px_6px_6px_-3px_rgba(42,51,70,0.04),0px_12px_12px_-6px_rgba(14,63,126,0.04),0px_24px_24px_-12px_rgba(14,63,126,0.04)] rounded-[16px]" />
              <div className="flex flex-col justify-center items-start p-0 gap-3 w-[432px] h-[64px]">
                <p className="w-[432px] h-[28px] flex items-center text-[22px] font-medium leading-[28px] text-[#020816]">
                  TVF
                </p>

                <p className="w-[432px] h-[24px] flex items-center text-[16px] font-light leading-[24px] text-[rgba(0,11,33,0.73)]">
                  Branding & Creative, Web Development, Social Media
                </p>
              </div>
            </div>

            <div className="w-[1px] h-[440px] bg-black bg-opacity-[0.06] rounded-[2px]" />

            <div className="flex flex-col gap-[36px]">
              <div class="w-[432px] h-[300px] bg-white/80 shadow-[0px_0px_0px_1px_rgba(14,63,126,0.04),0px_1px_1px_-0.5px_rgba(42,51,69,0.04),0px_3px_3px_-1.5px_rgba(42,51,70,0.04),0px_6px_6px_-3px_rgba(42,51,70,0.04),0px_12px_12px_-6px_rgba(14,63,126,0.04),0px_24px_24px_-12px_rgba(14,63,126,0.04)] rounded-[16px]" />
              <div className="flex flex-col justify-center items-start p-0 gap-3 w-[432px] h-[64px]">
                <p className="w-[432px] h-[28px] flex items-center text-[22px] font-medium leading-[28px] text-[#020816]">
                  Netflix
                </p>

                <p className="w-[432px] h-[24px] flex items-center text-[16px] font-light leading-[24px] text-[rgba(0,11,33,0.73)]">
                  SMM, Design, Community Management
                </p>
              </div>
            </div>

            <div className="w-[1px] h-[440px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[440px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[440px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
          <div className="box-border flex flex-row justify-center items-center my-[32px] p-3 px-10 gap-2 w-[181px] h-[48px] bg-gradient-to-b from-white to-[#F8F8F8] border border-[#DEDEDE] rounded-lg">
            <p className="w-[101px] h-[24px] flex items-center text-[16px] font-medium leading-[24px] text-[#020816]">
              View all work
            </p>
          </div>
        </div>

        {/* Section 9 */}

        <div className="w-full flex flex-col justify-center items-center gap-[7.5px]">
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[440px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[440px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
          <Testimonial />
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[440px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[440px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <CircleLargeExtraWhite />
            <div className="w-[172px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>
        </div>

        {/* Section 10 */}

        <div className="flex flex-col items-center justify-center gap-[7.5px] bg-[#090B16] mx-[8px] rounded-[16px] py-[100px]">
          <div className="w-[958px] h-[75px] border-y-0 border-x-[1px] border-white border-opacity-[0.06] rounded-[2px]" />
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-gradient-to-l from-white/[0.06] to-[#090B16] rounded-[2px]" />
            <div className="w-[24px] h-[24px] bg-[linear-gradient(180deg,rgba(9,11,22,0.08),rgba(255,255,255,0.08))] shadow-[0px_0px_0px_1px_rgba(14,63,126,0.06),0px_1px_1px_-0.5px_rgba(42,51,70,0.08),0px_2px_2px_-1px_rgba(42,51,70,0.08)] rounded-full border border-white border-opacity-[0.06]" />
            <div className="w-[440px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />
            <div className="w-[24px] h-[24px] bg-[linear-gradient(180deg,rgba(9,11,22,0.08),rgba(255,255,255,0.08))] shadow-[0px_0px_0px_1px_rgba(14,63,126,0.06),0px_1px_1px_-0.5px_rgba(42,51,70,0.08),0px_2px_2px_-1px_rgba(42,51,70,0.08)] rounded-full border border-white border-opacity-[0.06]" />
            <div className="w-[440px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />
            <div className="w-[24px] h-[24px] bg-[linear-gradient(180deg,rgba(9,11,22,0.08),rgba(255,255,255,0.08))] shadow-[0px_0px_0px_1px_rgba(14,63,126,0.06),0px_1px_1px_-0.5px_rgba(42,51,70,0.08),0px_2px_2px_-1px_rgba(42,51,70,0.08)] rounded-full border border-white border-opacity-[0.06]" />
            <div className="w-[172px] h-[1px] bg-gradient-to-r from-white/[0.06]  to-[#090B16] rounded-[2px]" />
          </div>
          <div className="w-[958px] flex flex-col items-center justify-center py-[32px] gap-[16px] border-y-0 border-x-[1px] border-white border-opacity-[0.06] rounded-[2px]">
            <div className="w-[840px] flex flex-col justify-center items-center relative mt-[40px]">
              <div class="w-[48px] h-[48px] bg-[#0d0f1a] rounded-full border border-white border-opacity-[0.06] absolute -top-[24px] left-[396px]" />
              <div class="w-[840px] h-[240px] overflow-hidden">
                <div class="w-[840px] h-[420px] flex flex-col justify-start items-center bg-[#0d0f1a] rounded-t-full border border-white border-opacity-[0.06] gap-[32px]">
                  <div className="flex justify-center items-center gap-[8px] mt-[40px]">
                    <img
                      src="/avatar2.png"
                      alt=""
                      className="w-[56px] h-[56px] rounded-full"
                    />
                    <img
                      src="/avatar3.png"
                      alt=""
                      className="w-[56px] h-[56px] rounded-full"
                    />
                    <img
                      src="/avatar4.png"
                      alt=""
                      className="w-[56px] h-[56px] rounded-full"
                    />
                  </div>
                  <div className="w-full flex flex-col justify-center items-center gap-[12px] relative">
                    <div className="w-full flex justify-center gap-[80px] absolute -top-[20px]">
                      <div className="w-full flex justify-end gap-[16px]">
                        <div class="w-[48px] h-[48px] bg-[#0d0f1a] rounded-full border border-b-0 border-white border-opacity-[0.06]" />
                        <div class="w-[48px] h-[48px] bg-[#0d0f1a] rounded-full border border-b-0 border-white border-opacity-[0.06]" />
                      </div>
                      <div className="w-full flex justify-start gap-[16px]">
                        <div class="w-[48px] h-[48px] bg-[#0d0f1a] rounded-full border border-b-0 border-white border-opacity-[0.06]" />
                        <div class="w-[48px] h-[48px] bg-[#0d0f1a] rounded-full border border-b-0 border-white border-opacity-[0.06]" />
                      </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-[12px] relative z-10">
                      <h3 className="w-[414px] h-[40px] font-inter font-semibold text-[38.2812px] leading-[40px] text-center tracking-[-0.8px] text-[#FBFBFC]">
                        Start Saving Same-Day
                      </h3>
                      <p className="w-[340px] h-[28px] font-inter font-light text-[16.875px] leading-[28px] text-center tracking-[0.18px] text-[#9CA5B4]">
                        Book a demo with one of our AWS experts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full h-[44px] text-white text-[15px] p-[12px] bg-[#5414F5] rounded-[4px]">
                Book intro call  — it's free
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-[7.5px]">
            <div className="w-[172px] h-[1px] bg-gradient-to-l from-white/[0.06]  to-[#090B16] rounded-[2px]" />
            <div className="w-[24px] h-[24px] bg-[linear-gradient(180deg,rgba(9,11,22,0.08),rgba(255,255,255,0.08))] shadow-[0px_0px_0px_1px_rgba(14,63,126,0.06),0px_1px_1px_-0.5px_rgba(42,51,70,0.08),0px_2px_2px_-1px_rgba(42,51,70,0.08)] rounded-full border border-white border-opacity-[0.06]" />
            <div className="w-[440px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />
            <div className="w-[24px] h-[24px] bg-[linear-gradient(180deg,rgba(9,11,22,0.08),rgba(255,255,255,0.08))] shadow-[0px_0px_0px_1px_rgba(14,63,126,0.06),0px_1px_1px_-0.5px_rgba(42,51,70,0.08),0px_2px_2px_-1px_rgba(42,51,70,0.08)] rounded-full border border-white border-opacity-[0.06]" />
            <div className="w-[440px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />
            <div className="w-[24px] h-[24px] bg-[linear-gradient(180deg,rgba(9,11,22,0.08),rgba(255,255,255,0.08))] shadow-[0px_0px_0px_1px_rgba(14,63,126,0.06),0px_1px_1px_-0.5px_rgba(42,51,70,0.08),0px_2px_2px_-1px_rgba(42,51,70,0.08)] rounded-full border border-white border-opacity-[0.06]" />
            <div className="w-[172px] h-[1px] bg-gradient-to-r from-white/[0.06]  to-[#090B16] rounded-[2px]" />
          </div>
          <div className="w-[958px] h-[75px] border-y-0 border-x-[1px] border-white border-opacity-[0.06] rounded-[2px]" />
        </div>

        {/* Section 11 */}

        <div className="w-full flex flex-col items-center justify-center py-[32px] gap-[16px] border-y-0 border-x-[1px] border-black border-opacity-[0.06] rounded-[2px] mt-[120px]">
          <p className="font-inter font-normal text-[16px] leading-[24px] flex items-center text-center text-[#1F2632]">
            Wall of love
          </p>

          <p className="font-satoshi font-bold text-[48px] leading-[56px] flex items-center text-center tracking-[-0.02em] text-[#1F2632]">
            Why People love Pitchhme
          </p>
          <p className="w-2/5 font-inter font-normal text-[20px] leading-[32px] text-center text-[#454E5E] opacity-80 my-[12px]">
            Join thousands of companies who are streamlining and automating
            their cloud with Pitchhme
          </p>
        </div>

        {/* Section 12 */}

        <div className="flex items-center justify-center">
          <Memes />
        </div>

        {/* Section 13 */}

        <div className="flex items-center justify-center gap-[80px] py-[100px]">
          <img src="/customer1.png" alt="" />
          <img src="/customer2.png" alt="" />
          <img src="/customer3.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default FullCode;
