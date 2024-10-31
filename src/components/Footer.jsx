import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full lg:h-[90vh] flex flex-col gap-[64px] justify-center items-center bg-[#090b16] px-[16px] py-[16px] xs:px-[40px] xs:py-[40px] sm:px-[60px] sm:py-[60px] md:px-[60px] md:py-[60px] lg:px-[100px] lg:py-[90px] xl:px-[140px] xl:py-[120px]">
        <div className="w-full grid grid-cols-12 gap-[24px] gap-y-[30px] xs:gap-[30px] xs:gap-y-[40px] sm:gap-[30px] sm:gap-y-[60px] md:gap-[8px] lg:gap-[24px] xl:gap-[30px]">
          <div
            className="col-span-12 xs:col-span-4 sm:col-span-4 md:col-span-4 flex flex-col justify-start items-start"
            // style={{ border: "2px solid red" }}
          >
            <div className="w-fit flex flex-col justify-start items-start gap-[32px]">
              <Link to={"/"}>
                <img src="/logo.png" alt="" />
              </Link>
              <p className="text-[13px]  text-white leading-[20px] font-light tracking-[0.14px]">
                205 W 28th St <br /> New York, NY 10001
              </p>
            </div>
          </div>
          <div
            className="col-span-6 xs:col-span-8 sm:col-span-4 md:col-span-2 flex flex-col justify-start items-start md:items-center"
            // style={{ border: "2px solid red" }}
          >
            <div className="w-fit flex flex-col justify-start items-start gap-[20px]">
              <p className="text-sm font-light text-gray-400">Services</p>
              <div className="flex flex-col items-start p-0 gap-4">
                <p className="text-sm font-normal text-white">Paid Social</p>
                <p className="text-sm font-normal text-white">Paid Search</p>
                <p className="text-sm font-normal text-white">Social Media</p>
                <p className="text-sm font-normal text-white">
                  Web Development
                </p>
                <p className="text-sm font-normal text-white">
                  Influencer Marketing
                </p>
                <p className="text-sm font-normal text-white">
                  Community Management
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-span-6 xs:col-span-4 sm:col-span-4 md:col-span-2 flex flex-col justify-start items-start md:items-center"
            // style={{ border: "2px solid red" }}
          >
            <div className="w-fit flex flex-col items-start justify-start gap-[20px]">
              <p className="text-sm font-light text-gray-400">Others</p>
              <div className="flex flex-col items-start p-0 gap-4">
                <p className="text-sm font-normal text-white">Work</p>
                <p className="text-sm font-normal text-white">Blogs</p>
              </div>
            </div>
          </div>
          <div
            className="col-span-6 xs:col-span-4 sm:col-span-4 md:col-span-2 flex flex-col justify-start items-start md:items-center"
            // style={{ border: "2px solid red" }}
          >
            <div className="w-fit flex flex-col items-start justify-start gap-[20px]">
              <p className="text-sm font-light text-gray-400">Company</p>
              <div className="flex flex-col items-start p-0 gap-4">
                <p className="text-sm font-normal text-white">Contact</p>
                <p className="text-sm font-normal text-white">Careers</p>
                <p className="text-sm font-normal text-white">Partners</p>
                <p className="text-sm font-normal text-white">About Us</p>
              </div>
            </div>
          </div>
          <div
            className="col-span-6 xs:col-span-4 sm:col-span-4 md:col-span-2 flex flex-col justify-start items-start md:items-end"
            // style={{ border: "2px solid red" }}
          >
            <div className="w-fit flex flex-col items-start justify-start gap-[20px]">
              <p className="text-sm font-light text-gray-400">Social</p>
              <div className="flex flex-row items-start p-0 gap-4">
                <img src="/linkedIn.png" alt="" width={20} height={20} />
                <img src="/x.png" alt="" width={20} height={20} />
                <img src="/github.png" alt="" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>

        <div class="w-full h-0 border-t-[1.5px] border-dashed border-white border-opacity-25" />

        <div class="w-full flex flex-col md:flex-row gap-[20px] justify-between items-start md:items-center">
          <div class="flex items-center p-[4px] px-[8px] gap-[4px] border border-white border-opacity-15 rounded-full box-border">
            <div className="w-[14px] h-[14px] bg-[#13292f] rounded-full flex justify-center items-center">
              <div className="w-[6px] h-[6px] bg-[#2a8674] rounded-full"></div>
            </div>
            <p class="text-white text-[12px] leading-[16px] font-normal text-opacity-90">
              All systems operational
            </p>
          </div>

          <div class="flex flex-col xs:flex-row items-start xs:items-center gap-[24px]">
            <div class="text-white text-[12px] leading-[16px] font-normal text-opacity-80">
              © 2024 Pitchhme Inc.
            </div>

            <div class="text-white text-[12px] leading-[16px] font-normal text-opacity-80">
              Privacy Policy
            </div>

            <div class="text-white text-[12px] leading-[16px] font-normal text-opacity-80">
              Terms of Service
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
