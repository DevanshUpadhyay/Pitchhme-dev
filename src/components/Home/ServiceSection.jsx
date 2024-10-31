import React from "react";

const ServiceSection = () => {
  const serviceList = [
    {
      title: "Social Media",
      description:
        "Engage your audience on their favourite platforms to foster meaningful relationships that build trust.",
      list: [
        "Social Media Strategy",
        "Content Ideation",
        "Content Production & Posting",
        "Organic Reporting",
        "Community Engagement",
      ],
    },
    {
      title: "Influencer Marketing",
      description:
        "Boost engagement and sales with strategic influencer advertising campaigns that create a buzz across the web.",
      list: [
        "Influencer Marketing Strategy",
        "Campaign Concept",
        "Branded Content",
        "Measurement",
        "Campaign Activation",
      ],
    },

    {
      title: "Paid Social",
      description:
        "Reach new audiences and increase LTV through the power of expansive targeting criteria and highly targeted ads.",
      list: [
        "Facebook Ads",
        "LinkedIn Ads",
        "Instagrams Ads",
        "Ongoing Campaign Optimization",
        "Campaign Strategy & Measurement",
      ],
    },
    {
      title: "Paid Search",
      description:
        "Maximise ROI on your ad spends and eliminate waste with ads people actually want to see and are targeted appropriately.",
      list: [
        "Google Ads",
        "Youtube Video Ads",
        "Display Ads",
        "Remarketing Strategy",
        "Programmatic Advertising",
      ],
    },
    {
      title: "Community Management",
      description:
        "Create a genuine sense of belonging by building and nurturing a community of loyal customers/users.",
      list: [
        "Community Engagement Strategies",
        "Partnership Building",
        "Community Management",
        "Discussion Moderation",
        "Analytics & Insights",
      ],
    },
    {
      title: "Web Development",
      description:
        "Create experience that immerse consumers in the brand through a combination of utility and creativity.",
      list: [
        "Journey & Mapping Testing",
        "Website & App Design",
        "Interaction Design",
        "SEO & Analytics",
        "CMS Implementation",
      ],
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center py-[60px]">
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

          <div className="w-[calc(100%-4px)] xs:w-[444px] sm:w-[538px] md:w-[712px] lg:w-[657px] xl:w-[753px] mb-[6px] xs:mb-[10px] sm:mb-[8px] md:mb-[8px] lg:mb-[6px] xl:mb-[8px] h-fit flex justify-between px-[8px] xs:px-[0px]">
            <div className="w-[1px] h-auto bg-black bg-opacity-[0.06] rounded-[2px]" />
            <div className="w-full flex flex-col items-center justify-center gap-[12px] lg:gap-[16px] p-[12px] xs:p-[16px] sm:p-[16px] md:p-[20px] lg:p-[20px] xl:p-[24px]">
              <p className="font-normal text-[16px] leading-[24px] text-center text-[#1f2632]">
                Services
              </p>
              <p className="w-full font-bold text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] leading-[40px] md:leading-[36px] lg:leading-[40px] xl:leading-[48px] text-center tracking-[-0.02em] text-[#1f2632]">
                Expertise You Can Trust
              </p>
            </div>

            <div className="w-[1px] h-auto bg-black bg-opacity-[0.06] rounded-[2px]" />
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
        </div>

        <div className="w-full flex flex-col gap-[40px] px-[16px] xs:px-[30px] sm:px-[40px] md:px-[30px] lg:px-[100px] xl:px-[120px] py-[60px]">
          {serviceList.map((item, index) => (
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[30px] md:gap-[24px] lg:gap-[30px] xl:gap-[40px]">
              <div class="w-full md:w-[60%] lg:w-1/2 flex flex-col justify-center items-start p-0 gap-[16px] xs:gap-[18px] sm:gap-[20px] md:gap-[12px] lg:gap-[20px]">
                <div className="w-full flex justify-center items-center gap-[6px] sm:gap-[8px]">
                  <div className="w-full h-[1px] bg-gradient-to-l from-black/[0.06] rounded-[2px]" />

                  <div className="min-w-[16px] sm:min-w-[24px] min-h-[16px] sm:min-h-[24px] bg-white rounded-full border border-black border-opacity-[0.08]" />

                  <div className="w-full h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />

                  <div className="min-w-[16px] sm:min-w-[24px] min-h-[16px] sm:min-h-[24px] bg-white rounded-full border border-black border-opacity-[0.08]" />

                  <div className="w-full h-[1px] bg-black bg-opacity-[0.06] rounded-[2px]" />
                  <div className="min-w-[16px] sm:min-w-[24px] min-h-[16px] sm:min-h-[24px] bg-white rounded-full border border-black border-opacity-[0.08]" />
                </div>
                <div class="flex flex-col items-start p-0 gap-[12px]">
                  <p class="font-inter font-medium text-[14px] leading-[17px] flex items-center text-[#1F2632]">
                    0{index + 1}/
                  </p>

                  <p class="font-inter font-medium text-[28px] leading-[34px] flex items-center tracking-[-0.01em] text-[#1F2632]">
                    {item.title}
                  </p>
                </div>

                <p class="font-inter font-normal text-[16px] leading-[24px] flex items-center text-[#454E5E] opacity-80">
                  {item.description}
                </p>

                <div class="flex flex-row flex-wrap items-center p-0 gap-[10px]">
                  {item.list.map((item, index) => (
                    <p class="w-fit h-[40px] font-normal text-base text-center text-[#1F2632] opacity-90 p-[8px_16px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] border border-[#F3F3F3] shadow-sm backdrop-blur-[3px] rounded-[4px]">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div class="w-full md:w-1/2 h-[250px] xs:h-[300px] sm:h-[350px] md:h-[250px] lg:h-[300px] xl:h-[350px] bg-white/80 shadow-[0px_0px_0px_1px_rgba(14,63,126,0.04),0px_1px_1px_-0.5px_rgba(42,51,69,0.04),0px_3px_3px_-1.5px_rgba(42,51,70,0.04),0px_6px_6px_-3px_rgba(42,51,70,0.04),0px_12px_12px_-6px_rgba(14,63,126,0.04),0px_24px_24px_-12px_rgba(14,63,126,0.04)] rounded-[16px]"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
