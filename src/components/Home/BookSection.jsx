import React from "react";

const BookSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:gap-[8px] bg-[#090B16] sm:mx-[8px] sm:rounded-[16px] py-[60px] my-[60px] px-[20px] xs:px-0">
        <div className="w-full hidden md:flex md:w-[690px] lg:w-[958px] h-fit justify-between">
          <div className="w-[1px] md:h-[112px] lg:h-[132px] bg-gradient-to-t from-white/[0.06] rounded-[2px]" />
          <div className="w-[1px] md:h-[112px] lg:h-[132px] bg-gradient-to-t from-white/[0.06] rounded-[2px]" />
          <div className="w-[1px] md:h-[112px] lg:h-[132px] bg-gradient-to-t from-white/[0.06] rounded-[2px]" />
        </div>
        <div className="w-full flex justify-center items-center gap-[6px] sm:gap-[8px]">
          <div className="hidden xl:flex xl:w-[160px] h-[1px] bg-gradient-to-l from-white/[0.06] rounded-[2px]" />

          <div className="hidden sm:flex min-w-[4px] md:w-[24px] min-h-[4px] md:h-[24px] bg-opacity-[0.06] bg-white md:bg-opacity-[0.08] rounded-full md:border border-white border-opacity-[0.08]" />

          <div className="w-full xs:w-[190px] sm:w-[248px] md:w-[302px] lg:w-[438px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

          <div className="min-w-[16px] xs:w-[24px] min-h-[16px] xs:h-[24px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

          <div className="w-full xs:w-[190px] sm:w-[248px] md:w-[302px] lg:w-[438px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />
          <div className="hidden sm:flex min-w-[4px] md:w-[24px] min-h-[4px] md:h-[24px] bg-opacity-[0.06] bg-white md:bg-opacity-[0.08] rounded-full md:border border-white border-opacity-[0.08]" />

          <div className="hidden xl:flex xl:w-[160px] h-[1px] bg-gradient-to-r from-white/[0.06] rounded-[2px]" />
        </div>
        <div className="w-full xs:w-[432px] sm:w-[558px] md:w-[690px] lg:w-[958px] flex flex-col items-center justify-center py-[12px] sm:py-[24px] md:py-[32px] gap-[16px] border-y-0 sm:border-x-[1px] border-white border-opacity-[0.06] rounded-[2px]">
          <div className="w-full xs:w-[400px] sm:w-[500px] md:w-[660px] lg:w-[840px] flex flex-col justify-center items-center relative sm:mt-[24px] md:mt-[30px]">
            <div class="hidden sm:flex sm:w-[40px] lg:w-[48px] sm:h-[40px] lg:h-[48px] bg-[#0d0f1a] rounded-full border border-white border-opacity-[0.06] absolute z-10 -top-[24px] left-[calc(50%-20px)] lg:left-[calc(50%-24px)]" />
            <div class="w-full xs:w-[360px] sm:w-[440px] md:w-[620px] lg:w-[840px] h-[180px] xs:h-[140px] sm:h-[160px] md:h-[190px] lg:h-[240px] xs:overflow-hidden">
              <div class="w-full xs:w-[360px] sm:w-[440px] md:w-[620px] lg:w-[840px] h-[180px] xs:h-[180px] sm:h-[220px] md:h-[310px] lg:h-[420px] flex flex-col justify-between xs:justify-start items-center bg-[#0d0f1a] rounded-t-full border border-x-0 xs:border-x border-b-0 border-white border-opacity-[0.06] gap-[20px] md:gap-[30px] lg:gap-[40px] relative">
                <div className="flex justify-center items-center gap-[8px] sm:mt-[24px] md:mt-[30px] lg:mt-[40px]">
                  <img
                    src="/avatar2.png"
                    alt=""
                    className="w-[60px] xs:w-[48px] lg:w-[56px] h-[60px] xs:h-[48px] lg:h-[56px] rounded-full"
                  />
                  <img
                    src="/avatar3.png"
                    alt=""
                    className="w-[60px] xs:w-[48px] lg:w-[56px] h-[60px] xs:h-[48px] lg:h-[56px] rounded-full"
                  />
                  <img
                    src="/avatar4.png"
                    alt=""
                    className="w-[60px] xs:w-[48px] lg:w-[56px] h-[60px] xs:h-[48px] lg:h-[56px] rounded-full"
                  />
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-[12px] relative">
                  <div className="w-full flex justify-center gap-[80px] absolute sm:-top-[10px] lg:-top-[20px]">
                    <div className="w-full flex justify-end gap-[16px]">
                      <div class="sm:w-[40px] lg:w-[48px] sm:h-[40px] lg:h-[48px] bg-[#0d0f1a] rounded-full border border-b-0 border-white border-opacity-[0.06]" />
                      <div class="sm:w-[40px] lg:w-[48px] sm:h-[40px] lg:h-[48px] bg-[#0d0f1a] rounded-full border border-b-0 border-white border-opacity-[0.06]" />
                    </div>
                    <div className="w-full flex justify-start gap-[16px]">
                      <div class="sm:w-[40px] lg:w-[48px] sm:h-[40px] lg:h-[48px] bg-[#0d0f1a] rounded-full border border-b-0 border-white border-opacity-[0.06]" />
                      <div class="sm:w-[40px] lg:w-[48px] sm:h-[40px] lg:h-[48px] bg-[#0d0f1a] rounded-full border border-b-0 border-white border-opacity-[0.06]" />
                    </div>
                  </div>
                  <div className="w-full flex flex-col justify-center items-center gap-[2px] relative">
                    <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center tracking-[-0.8px] text-[#FBFBFC] mb-[4px]">
                      Start Saving Same-Day
                    </h3>
                    <div className="w-full flex xs:hidden justify-center items-center gap-[6px] absolute -bottom-[8px]">
                      <div className="w-full flex xs:hidden h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

                      <div className="min-w-[16px] xs:w-[24px] min-h-[16px] xs:h-[24px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

                      <div className="w-full flex xs:hidden h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />
                    </div>
                    <p className="hidden xs:flex font-light text-base text-center tracking-[0.18px] text-[#9CA5B4]">
                      Book a demo with one of our AWS experts
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="flex xs:hidden font-light text-base text-center tracking-[0.18px] text-[#9CA5B4] mt-[12px] xs:mt-0 mb-[32px] xs:mb-0">
              Book a demo with one of our AWS experts
            </p>

            <button className="w-full h-[44px] text-white text-[15px] p-[12px] bg-[#5414F5] rounded-[4px]">
              Book intro call  — it's free
            </button>
          </div>
        </div>
        <div className="w-full hidden xs:flex justify-center items-center gap-[6px] sm:gap-[8px]">
          <div className="hidden xl:flex xl:w-[160px] h-[1px] bg-gradient-to-l from-white/[0.06] rounded-[2px]" />

          <div className="hidden sm:flex min-w-[4px] md:w-[24px] min-h-[4px] md:h-[24px] bg-opacity-[0.06] bg-white md:bg-opacity-[0.08] rounded-full md:border border-white border-opacity-[0.08]" />

          <div className="w-full xs:w-[190px] sm:w-[248px] md:w-[302px] lg:w-[438px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />

          <div className="min-w-[16px] xs:w-[24px] min-h-[16px] xs:h-[24px] bg-white bg-opacity-[0.08] rounded-full border border-white border-opacity-[0.08]" />

          <div className="w-full xs:w-[190px] sm:w-[248px] md:w-[302px] lg:w-[438px] h-[1px] bg-white bg-opacity-[0.06] rounded-[2px]" />
          <div className="hidden sm:flex min-w-[4px] md:w-[24px] min-h-[4px] md:h-[24px] bg-opacity-[0.06] bg-white md:bg-opacity-[0.08] rounded-full md:border border-white border-opacity-[0.08]" />

          <div className="hidden xl:flex xl:w-[160px] h-[1px] bg-gradient-to-r from-white/[0.06] rounded-[2px]" />
        </div>
        <div className="w-full hidden md:flex md:w-[690px] lg:w-[958px] h-fit justify-between">
          <div className="w-[1px] md:h-[112px] lg:h-[132px] bg-gradient-to-b from-white/[0.06] rounded-[2px]" />
          <div className="w-[1px] md:h-[112px] lg:h-[132px] bg-gradient-to-b from-white/[0.06] rounded-[2px]" />
          <div className="w-[1px] md:h-[112px] lg:h-[132px] bg-gradient-to-b from-white/[0.06] rounded-[2px]" />
        </div>
      </div>
    </>
  );
};

export default BookSection;
