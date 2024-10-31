import React from "react";

const WorkSection = () => {
  const workList = [
    {
      id: 1,
      title: "TVF",
      description: "Branding & Creative, Web Development, Social Media",
    },
    {
      id: 2,
      title: "Netflix",
      description: "SMM, Design, Community Management",
    },
    {
      id: 3,
      title: "TVF",
      description: "Branding & Creative, Web Development, Social Media",
    },
    {
      id: 4,
      title: "Netflix",
      description: "SMM, Design, Community Management",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-[8px] py-[60px]">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="hidden sm:flex sm:w-[538px] md:w-[712px] lg:w-[657px] xl:w-[753px] h-fit sm:justify-center lg:justify-between sm:mb-[8px] lg:mb-[0px]">
            <div className="hidden lg:flex w-[1px] h-[172px] bg-gradient-to-t from-black/[0.06] rounded-[2px]" />
            <div className="w-[1px] sm:h-[132px] md:h-[152px] lg:h-[172px] bg-gradient-to-t from-black/[0.06] rounded-[2px]" />
          </div>

          <div className="w-full flex justify-center items-center gap-[6px] xs:gap-[6px] sm:gap-[8px] md:gap-[8px] lg:gap-[6px] xl:gap-[8px] px-[8px] xs:px-[0px]">
            <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-l from-black/[0.06] rounded-[2px]" />

            <div className="hidden md:flex w-[4px] h-[4px] bg-black bg-opacity-[0.06] rounded-full" />

            <div className="hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] min-h-[4px] bg-black bg-opacity-[0.06] rounded-full" />

            <div className="w-full xs:w-[194px] sm:w-[238px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[16px] xs:w-[24px] min-h-[16px] xs:h-[24px] bg-white rounded-full border border-black border-opacity-[0.08]" />

            <div className="w-full xs:w-[194px] sm:w-[238px] md:w-[148px] lg:w-[138px] xl:w-[158px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[4px] min-h-[4px] bg-black bg-opacity-[0.06] rounded-full" />

            <div className="hidden md:flex md:w-[158px] lg:w-[148px] xl:w-[168px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />

            <div className="hidden md:flex w-[4px] h-[4px] bg-black bg-opacity-[0.06] rounded-full" />

            <div className="hidden lg:flex lg:w-[128px] xl:w-[148px] h-[1px] bg-gradient-to-r from-black/[0.06] rounded-[2px]" />
          </div>

          <div className="w-[calc(100%-4px)] xs:w-[444px] sm:w-[538px] md:w-[712px] lg:w-[657px] xl:w-[753px] mb-[6px] xs:mb-[10px] sm:mb-[8px] md:mb-[8px] lg:mb-[0px] xl:mb-[8px] h-fit flex justify-between px-[8px] xs:px-[0px]">
            <div className="w-[1px] h-auto bg-black bg-opacity-[0.06] rounded-[2px]" />
            <div className="w-full flex flex-col items-center justify-center gap-[12px] lg:gap-[16px] p-[12px] xs:p-[16px] sm:p-[16px] md:p-[20px] lg:p-[20px] xl:p-[24px]">
              <p className="font-normal text-[16px] leading-[24px] text-center text-[#1f2632]">
                Case studies
              </p>
              <p className="w-full font-bold text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] leading-[40px] md:leading-[36px] lg:leading-[40px] xl:leading-[48px] text-center tracking-[-0.02em] text-[#1f2632]">
                Our Work
              </p>
              <p className="font-normal text-[18px] lg:text-[20px] leading-[24px] text-center text-[#1f2632]">
                Pitchhme provides best-in-class marketing services
              </p>
            </div>

            <div className="w-[1px] h-auto bg-black bg-opacity-[0.06] rounded-[2px]" />
          </div>

          <div className="w-full flex justify-center items-center gap-[6px] sm:gap-[8px] px-[8px] xs:px-0">
            <div className="hidden xl:flex xl:w-[160px] h-[1px] bg-gradient-to-l from-black/[0.06] rounded-[2px]" />

            <div className="min-w-[4px] md:w-[24px] min-h-[4px] md:h-[24px] bg-black bg-opacity-[0.06] md:bg-white rounded-full md:border border-black border-opacity-[0.08]" />

            <div className="w-full xs:w-[194px] sm:w-[238px] md:w-[312px] lg:w-[442px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />

            <div className="min-w-[16px] xs:w-[24px] min-h-[16px] xs:h-[24px] bg-white rounded-full border border-black border-opacity-[0.08]" />

            <div className="w-full xs:w-[194px] sm:w-[238px] md:w-[312px] lg:w-[442px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
            <div className="min-w-[4px] md:w-[24px] min-h-[4px] md:h-[24px] bg-black bg-opacity-[0.06] md:bg-white rounded-full md:border border-black border-opacity-[0.08]" />

            <div className="hidden xl:flex xl:w-[160px] h-[1px] bg-gradient-to-r from-black/[0.06] rounded-[2px]" />
          </div>
        </div>
        <div className="w-full flex flex-col md:grid md:grid-cols-12 items-center justify-center gap-[40px] md:gap-0 md:gap-y-[8px] px-[16px] xs:px-[30px] sm:px-[40px] md:px-0">
          {workList.map((item, index) => (
            <>
              <div
                key={item.id}
                className={`w-full md:col-span-6 flex items-center justify-center  ${
                  item.id === 1 || item.id === 3
                    ? "md:justify-end"
                    : "md:justify-start"
                }  md:gap-[20px] lg:gap-[24px]`}
              >
                <div
                  className={`hidden md:flex w-[1px] md:h-[400px] lg:h-[440px] bg-black ${
                    item.id === 1 || item.id === 3
                      ? "bg-opacity-[0.06]"
                      : "bg-opacity-0"
                  } rounded-[2px]`}
                />
                <div className="w-full md:w-[312px] lg:w-[432px] flex flex-col gap-[36px]">
                  <div class="w-full h-[240px] xs:h-[280px] sm:h-[340px] md:h-[220px] lg:h-[300px] bg-white/80 shadow-[0px_0px_0px_1px_rgba(14,63,126,0.04),0px_1px_1px_-0.5px_rgba(42,51,69,0.04),0px_3px_3px_-1.5px_rgba(42,51,70,0.04),0px_6px_6px_-3px_rgba(42,51,70,0.04),0px_12px_12px_-6px_rgba(14,63,126,0.04),0px_24px_24px_-12px_rgba(14,63,126,0.04)] rounded-[16px]" />
                  <div className="w-full flex flex-col justify-center items-start p-0 gap-3">
                    <p className="text-[22px] font-medium leading-[28px] text-[#020816]">
                      {item.title}
                    </p>

                    <p className="text-[16px] font-light leading-[24px] text-[rgba(0,11,33,0.73)]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex w-[1px] md:h-[400px] lg:h-[440px] ml-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
              </div>
              <div
                className={`col-span-12 hidden  md:${
                  item.id === 2 || item.id === 4 ? "flex" : "hidden"
                } justify-center items-center gap-[6px] sm:gap-[8px] px-[8px] xs:px-0`}
              >
                <div
                  className={`hidden xl:${
                    item.id === 4 ? "flex" : "hidden"
                  } xl:w-[160px] h-[1px] bg-gradient-to-l from-black/[0.06] rounded-[2px]`}
                />

                <div className="min-w-[4px] md:w-[24px] min-h-[4px] md:h-[24px] bg-black bg-opacity-[0.06] md:bg-white rounded-full md:border border-black border-opacity-[0.08]" />

                <div className="w-full xs:w-[194px] sm:w-[238px] md:w-[312px] lg:w-[442px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />

                <div className="min-w-[16px] xs:w-[24px] min-h-[16px] xs:h-[24px] bg-white rounded-full border border-black border-opacity-[0.08]" />

                <div className="w-full xs:w-[194px] sm:w-[238px] md:w-[312px] lg:w-[442px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                <div className="min-w-[4px] md:w-[24px] min-h-[4px] md:h-[24px] bg-black bg-opacity-[0.06] md:bg-white rounded-full md:border border-black border-opacity-[0.08]" />

                <div
                  className={`hidden xl:${
                    item.id === 4 ? "flex" : "hidden"
                  } xl:w-[160px] h-[1px] bg-gradient-to-r from-black/[0.06] rounded-[2px]`}
                />
              </div>
            </>
          ))}
        </div>

        <button className="text-[16px] font-medium leading-[24px] text-[#020816] bg-gradient-to-b from-white to-[#F8F8F8] border border-[#DEDEDE] rounded-lg box-border  py-[12px] px-[40px] my-[32px] relative z-0">
          View all work
        </button>
      </div>
    </>
  );
};

export default WorkSection;
