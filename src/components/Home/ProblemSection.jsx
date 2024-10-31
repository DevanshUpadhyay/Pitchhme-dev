import React from "react";

const ProblemSection = () => {
  const problemList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center bg-[#090B16] py-[60px]">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="hidden sm:flex sm:w-[538px] md:w-[712px] lg:w-[657px] xl:w-[753px] h-fit sm:justify-center lg:justify-between sm:mb-[8px] lg:mb-[0px]">
            <div className="hidden lg:flex w-[1px] h-[172px] bg-gradient-to-t from-white/[0.06] rounded-[2px]" />
            <div className="w-[1px] sm:h-[132px] md:h-[152px] lg:h-[172px] bg-gradient-to-t from-white/[0.06] rounded-[2px]" />
          </div>

          <div className="w-full flex justify-center items-center gap-[6px] xs:gap-[6px] sm:gap-[8px] md:gap-[8px] lg:gap-[6px] xl:gap-[8px] px-[8px] xs:px-[0px]">
            <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-l from-white/[0.06]  to-[#090B16] rounded-[2px]" />

            <div className="hidden md:flex w-[4px] h-[4px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

            <div className="hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

            <div className="w-full xs:w-[194px] sm:w-[238px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[16px] xs:w-[24px] min-h-[16px] xs:h-[24px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

            <div className="w-full xs:w-[194px] sm:w-[238px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

            <div className="hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="hidden md:flex w-[4px] h-[4px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

            <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-r from-white/[0.06] rounded-[2px]" />
          </div>

          <div className="w-[calc(100%-4px)] xs:w-[444px] sm:w-[538px] md:w-[712px] lg:w-[657px] xl:w-[753px] mb-[6px] xs:mb-[10px] sm:mb-[8px] md:mb-[8px] lg:mb-[6px] xl:mb-[8px] h-fit flex justify-between px-[8px] xs:px-[0px]">
            <div className="w-[1px] h-auto bg-white bg-opacity-[0.06] rounded-[2px]" />
            <div className="w-full flex flex-col items-center justify-center gap-[12px] lg:gap-[16px] p-[12px] xs:p-[16px] sm:p-[16px] md:p-[20px] lg:p-[20px] xl:p-[24px]">
              <p className="font-normal text-[16px] leading-[24px] text-center text-[#9CA5B4]">
                Problems
              </p>
              <p className="w-full font-bold text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] leading-[40px] md:leading-[36px] lg:leading-[40px] xl:leading-[48px] text-center tracking-[-0.02em] text-white">
                Do any of these sound familiar?
              </p>
            </div>

            <div className="w-[1px] h-auto bg-white bg-opacity-[0.06] rounded-[2px]" />
          </div>

          <div className="w-full flex justify-center items-center mb-[6px] xs:mb-[6px] sm:mb-[0px] gap-[6px] xs:gap-[6px] sm:gap-[8px] md:gap-[8px] lg:gap-[6px] xl:gap-[8px] px-[8px] xs:px-[0px]">
            <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-l from-white/[0.06] rounded-[2px]" />

            <div className="hidden xs:flex xs:w-[4px] sm:w-[24px] xs:h-[4px] sm:h-[24px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

            <div className="hidden xs:flex xs:w-[128px] sm:w-[148px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

            <div className="w-full xs:hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] xs:w-[138px] sm:w-[158px] md:w-[4px] h-[4px] xs:h-[1px] sm:h-[1px] md:h-[4px] bg-white bg-opacity-[0.08] rounded-full sm:rounded-[2px] md:rounded-full md:border border-white border-opacity-[0.08]" />

            <div className="w-full xs:hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

            <div className="hidden xs:flex xs:w-[128px] sm:w-[148px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

            <div className="hidden xs:flex xs:w-[4px] sm:w-[24px] xs:h-[4px] sm:h-[24px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

            <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-r from-white/[0.06] rounded-[2px]" />
          </div>
        </div>

        <>
          <div className="w-full hidden lg:flex justify-center items-center lg:gap-[6px] xl:gap-[8px]">
            {problemList.slice(0, 6).map((item, index) => (
              <>
                <div class="lg:w-[148px] xl:w-[168px] lg:h-[148px] xl:h-[168px] flex flex-col justify-center items-center lg:gap-[16px] xl:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] lg:p-[12px] xl:p-[16px]">
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
                {index <= 4 && (
                  <div
                    className={`w-[1px] mx-[1.5px] lg:h-[${
                      index === 0 || index === 4 ? 138 : 148
                    }px] xl:h-[${
                      index === 0 || index === 4 ? 158 : 168
                    }px] bg-white bg-opacity-[0.06] rounded-[2px]`}
                  />
                )}
              </>
            ))}
          </div>
          <div className="w-full hidden md:flex lg:hidden justify-center items-center gap-[8px]">
            <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] md:p-[24px]">
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
            <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] md:p-[24px]">
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
            <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] md:p-[24px]">
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
            <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] md:p-[24px]">
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
            <div class="xs:w-[138px] sm:w-[158px] xs:h-[138px] sm:h-[158px] flex flex-col justify-center items-center xs:gap-[12px] sm:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] xs:p-[12px] sm:p-[24px]">
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
            <div class="xs:w-[138px] sm:w-[158px] xs:h-[138px] sm:h-[158px] flex flex-col justify-center items-center xs:gap-[12px] sm:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] xs:p-[12px] sm:p-[24px]">
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
            <div class="xs:w-[138px] sm:w-[158px] xs:h-[138px] sm:h-[158px] flex flex-col justify-center items-center xs:gap-[12px] sm:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] xs:p-[12px] sm:p-[24px]">
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
            <div class="w-full min-h-[138px] flex flex-col justify-center items-center gap-[8px] bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] p-[16px]">
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
            <div class="w-full min-h-[138px] flex flex-col justify-center items-center gap-[8px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] p-[16px]">
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

        <div className="w-full flex justify-center items-center  py-[6px] sm:py-[0px]  gap-[6px] xs:gap-[6px] sm:gap-[8px] md:gap-[8px] lg:gap-[6px] xl:gap-[8px] px-[8px] xs:px-[0px]">
          <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-l from-white/[0.06] rounded-[2px]" />

          <div className="hidden xs:flex xs:w-[4px] sm:w-[24px] xs:h-[4px] sm:h-[24px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

          <div className="hidden xs:flex xs:w-[128px] sm:w-[148px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

          <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

          <div className="w-full xs:hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

          <div className="min-w-[4px] xs:w-[138px] sm:w-[158px] md:w-[4px] h-[4px] xs:h-[1px] sm:h-[1px] md:h-[4px] bg-white bg-opacity-[0.08] rounded-full sm:rounded-[2px] md:rounded-full md:border border-white border-opacity-[0.08]" />

          <div className="w-full xs:hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

          <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

          <div className="hidden xs:flex xs:w-[128px] sm:w-[148px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

          <div className="hidden xs:flex xs:w-[4px] sm:w-[24px] xs:h-[4px] sm:h-[24px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

          <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-r from-white/[0.06] rounded-[2px]" />
        </div>
        <>
          <div className="w-full hidden lg:flex justify-center items-center lg:gap-[6px] xl:gap-[8px]">
            {problemList.slice(0, 6).map((item, index) => (
              <>
                <div class="lg:w-[148px] xl:w-[168px] lg:h-[148px] xl:h-[168px] flex flex-col justify-center items-center lg:gap-[16px] xl:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] lg:p-[12px] xl:p-[16px]">
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
                {index <= 4 && (
                  <div
                    className={`w-[1px] mx-[1.5px] lg:h-[${
                      index === 0 || index === 4 ? 138 : 148
                    }px] xl:h-[${
                      index === 0 || index === 4 ? 158 : 168
                    }px] bg-white bg-opacity-[0.06] rounded-[2px]`}
                  />
                )}
              </>
            ))}
          </div>
          <div className="w-full hidden md:flex lg:hidden justify-center items-center gap-[8px]">
            <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] md:p-[24px]">
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
            <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] md:p-[24px]">
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
            <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] md:p-[24px]">
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
            <div class="md:w-[158px] md:h-[158px] flex flex-col justify-center items-center gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] md:p-[24px]">
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
            <div class="xs:w-[138px] sm:w-[158px] xs:h-[138px] sm:h-[158px] flex flex-col justify-center items-center xs:gap-[12px] sm:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] xs:p-[12px] sm:p-[24px]">
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
            <div class="xs:w-[138px] sm:w-[158px] xs:h-[138px] sm:h-[158px] flex flex-col justify-center items-center xs:gap-[12px] sm:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] xs:p-[12px] sm:p-[24px]">
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
            <div class="xs:w-[138px] sm:w-[158px] xs:h-[138px] sm:h-[158px] flex flex-col justify-center items-center xs:gap-[12px] sm:gap-[18px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] xs:p-[12px] sm:p-[24px]">
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
            <div class="w-full min-h-[138px] flex flex-col justify-center items-center gap-[8px] bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] p-[16px]">
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
            <div class="w-full min-h-[138px] flex flex-col justify-center items-center gap-[8px]  bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white border-opacity-[0.06] rounded-[16px] p-[16px]">
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

        <div className="w-full flex justify-center items-center pt-[6px] sm:pt-[0px] mb-[6px] xs:mb-[6px] sm:mb-[0px] gap-[6px] xs:gap-[6px] sm:gap-[8px] md:gap-[8px] lg:gap-[6px] xl:gap-[8px] px-[8px] xs:px-[0px]">
          <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-l from-white/[0.06] rounded-[2px]" />

          <div className="hidden xs:flex xs:w-[4px] sm:w-[24px] xs:h-[4px] sm:h-[24px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

          <div className="hidden xs:flex xs:w-[128px] sm:w-[148px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

          <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

          <div className="w-full xs:hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

          <div className="min-w-[4px] xs:w-[138px] sm:w-[158px] md:w-[4px] h-[4px] xs:h-[1px] sm:h-[1px] md:h-[4px] bg-white bg-opacity-[0.08] rounded-full sm:rounded-[2px] md:rounded-full md:border border-white border-opacity-[0.08]" />

          <div className="w-full xs:hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

          <div className="min-w-[4px] min-h-[4px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

          <div className="hidden xs:flex xs:w-[128px] sm:w-[148px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

          <div className="hidden xs:flex xs:w-[4px] sm:w-[24px] xs:h-[4px] sm:h-[24px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

          <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-r from-white/[0.06] rounded-[2px]" />
        </div>

        <div className="hidden md:flex md:w-[712px] lg:w-[657px] xl:w-[753px] h-fit items-end sm:justify-center lg:justify-between">
          <div className="hidden lg:flex w-[1px] md:h-[152px] lg:h-[172px] bg-gradient-to-b from-white/[0.06] rounded-[2px]" />
          <div className="w-[1px] md:h-[152px] lg:h-[180px] bg-gradient-to-b from-white/[0.06] rounded-[2px]" />
          <div className="hidden lg:flex w-[1px] md:h-[152px] lg:h-[172px] bg-gradient-to-b from-white/[0.06] rounded-[2px]" />
        </div>
      </div>
    </>
  );
};

export default ProblemSection;
