import React, { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Nicolas Chaillan",
      title:
        "Former U.S. Air Force and Space Force Chief Software Officer (CSO)",
      message:
        "Antimetal optimizes our cloud spend without compromising on security. Their expertise in striking the perfect balance between cost optimization and robust security measures makes them an invaluable asset.",
      imgUrl: "testimonial1.png",
    },
    {
      name: "Jane Smith",
      title: "Former U.S. Air Force and Space Force Chief",
      message:
        "Antimetal delivers exceptional cloud cost savings while ensuring top-tier security protocols are maintained, helping businesses thrive without compromising on data protection.",
      imgUrl: "testimonial1.png",
    },
    {
      name: "Mark Johnson",
      title: "Former U.S. Air Force (CSO)",
      message:
        "With Antimetal, you get the best of both worlds: efficient cloud cost optimization coupled with advanced security, giving you peace of mind as your infrastructure scales.",
      imgUrl: "testimonial1.png",
    },
    {
      name: "John Doe",
      title: "Space Force Chief Software Officer (CSO)",
      message:
        "Antimetal’s smart solutions reduce your cloud expenses while fortifying security, empowering your business to grow sustainably and safely in the cloud environment.",
      imgUrl: "testimonial1.png",
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextTestimonial = () => {
    if (current < length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevTestimonial = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-[8px] py-[60px]">
        <div className="w-full flex justify-center items-center gap-[6px] sm:gap-[8px] px-[8px] xs:px-0">
          <div className="hidden xl:flex xl:w-[160px] h-[1px] bg-gradient-to-l from-black/[0.06] rounded-[2px]" />

          <div className="min-w-[4px] md:w-[24px] min-h-[4px] md:h-[24px] bg-black bg-opacity-[0.06] md:bg-white rounded-full md:border border-black border-opacity-[0.08]" />

          <div className="w-full xs:w-[194px] sm:w-[238px] md:w-[312px] lg:w-[442px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />

          <div className="min-w-[16px] xs:w-[24px] min-h-[16px] xs:h-[24px] bg-white rounded-full border border-black border-opacity-[0.08]" />

          <div className="w-full xs:w-[194px] sm:w-[238px] md:w-[312px] lg:w-[442px] h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
          <div className="min-w-[4px] md:w-[24px] min-h-[4px] md:h-[24px] bg-black bg-opacity-[0.06] md:bg-white rounded-full md:border border-black border-opacity-[0.08]" />

          <div className="hidden xl:flex xl:w-[160px] h-[1px] bg-gradient-to-r from-black/[0.06] rounded-[2px]" />
        </div>
        <div className="w-full xs:w-[442px] sm:w-[538px] md:w-[706px] lg:w-[968px] flex items-center justify-center bg-[radial-gradient(49.93%_49.93%_at_50%_50.07%,_#D8ECFB_2.17%,_#F9FAFB_100%)] border-y-0 border-x-[1px] border-black border-opacity-[0.06] rounded-[2px]">
          <div
            className="w-full h-full flex flex-col items-start justify-center gap-[30px] bg-cover bg-no-repeat bg-center sm:bg-center md:bg-left-top"
            style={{
              backgroundImage: `url('/clouds.png')`,
            }}
          >
            <p className="w-fit h-[180px] lg:h-[140px] xl:h-[180px] font-semibold text-lg sm:text-xl md:text-2xl xl:text-3xl flex items-center tracking-[-0.3px] text-[rgba(2,8,22,0.88)] mx-[16px] xs:mx-[24px] sm:mx-[30px] md:mx-[48px] lg:mx-[80px] xl:mx-[90px]">
              “{testimonials[current].message}”
            </p>
            <div className="w-fit flex flex-row items-center gap-4 mx-[16px] xs:mx-[24px] sm:mx-[30px] md:mx-[48px] lg:mx-[80px] xl:mx-[90px]">
              <div className="w-[52px] h-[72px] flex items-center justify-center box-border border border-[rgba(14,63,126,0.06)] rounded-full">
                <img
                  src={`/${testimonials[current].imgUrl}`}
                  alt=""
                  className="w-[44px] h-[64px] rounded-full"
                />
              </div>

              <div className="w-3/4 sm:w-1/2 flex flex-col items-start justify-center gap-0.5">
                <p className="text-[17.4375px] font-normal leading-[28px] text-[rgba(2,8,22,0.88)]">
                  {testimonials[current].name}
                </p>
                <p className="text-[14px] font-light leading-5 tracking-[0.14px] text-[rgba(0,14,45,0.58)]">
                  {testimonials[current].title}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-row gap-[12px] lg:gap-[14px] xl:gap-[16px] justify-center lg:justify-end  pb-[28px] pr-[28px]">
              {current !== 0 ? (
                <button
                  className="flex flex-row items-center justify-center w-[36px] md:w-[40px] xl:w-[44px] h-[36px] md:h-[40px] xl:h-[44px] 
                     bg-white border border-[rgba(14,63,126,0.12)] rounded-[6px]"
                  onClick={prevTestimonial}
                >
                  <HiOutlineArrowLeft className="text-xl" />
                </button>
              ) : (
                <button
                  className="flex flex-row items-center justify-center w-[36px] md:w-[40px] xl:w-[44px] h-[36px] md:h-[40px] xl:h-[44px] 
                     bg-white bg-opacity-40 border border-[rgba(14,63,126,0.12)] rounded-[6px] cursor-default"
                >
                  <HiOutlineArrowLeft className="text-xl opacity-40" />
                </button>
              )}
              {current !== length - 1 ? (
                <button
                  className="flex flex-row items-center justify-center w-[36px] md:w-[40px] xl:w-[44px] h-[36px] md:h-[40px] xl:h-[44px] 
                     bg-white border border-[rgba(14,63,126,0.12)] rounded-[6px]"
                  onClick={nextTestimonial}
                >
                  <HiOutlineArrowRight className="text-xl" />
                </button>
              ) : (
                <button
                  className="flex flex-row items-center justify-center w-[36px] md:w-[40px] xl:w-[44px] h-[36px] md:h-[40px] xl:h-[44px] 
                     bg-white bg-opacity-40 border border-[rgba(14,63,126,0.12)] rounded-[6px] cursor-default"
                >
                  <HiOutlineArrowRight className="text-xl opacity-40" />
                </button>
              )}
            </div>
          </div>
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
    </>
  );
};

export default TestimonialSection;
