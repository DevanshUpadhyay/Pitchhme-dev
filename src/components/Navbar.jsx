import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className="h-[12vh] bg-[#0d1023] sticky top-0 z-50">
        <div className="mx-auto max-w-7xl h-full px-2 sm:px-6 lg:px-8 relative">
          <div className="flex h-full items-center justify-between">
            <div className="w-full flex items-center justify-between lg:hidden p-[20px]">
              <Link
                to={"/"}
                className="w-fit  flex items-center justify-center"
                onClick={() => {
                  setNav(false);
                }}
              >
                <img src="/logo.png" alt="logo" width={90} />
              </Link>
              <div className="w-fit flex gap-[20px]">
                <Link
                  className="w-fit h-fit text-white text-[12px] font-semibold leading-[14px] px-[8px] py-[10px] bg-[#5414F5] rounded"
                  to={"/book"}
                  onClick={() => {
                    setNav(false);
                  }}
                >
                  Book intro call
                </Link>
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => {
                    setNav(!nav);
                  }}
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="hidden col-span-4  lg:flex gap-[32px] sm:col-span-12 sm:justify-center sm:gap-[20px]">
              <Link to={"/work"} className="text-white text-base">
                Work
              </Link>
              <Link to={"/services"} className="text-white text-base">
                Services
              </Link>
              <Link to={"/blogs"} className="text-white text-base">
                Blogs
              </Link>
            </div>

            <Link
              to={"/"}
              className="hidden col-span-3  lg:flex items-center justify-center sm:col-span-12 sm:my-4"
            >
              <img src="/logo.png" alt="logo" />
            </Link>

            <ul className="hidden col-span-4  lg:flex gap-[32px] items-center justify-end sm:col-span-12 sm:justify-center sm:gap-[20px] sm:my-4">
              <Link to={"/about"} className="text-white text-base sm:text-sm">
                About Us
              </Link>
              <Link
                to={"/book"}
                className="text-white text-[15px] p-[12px] bg-[#5414F5] rounded sm:text-[13px] sm:p-[8px]"
              >
                Book intro call  — it's free
              </Link>
            </ul>
          </div>
        </div>

        <div
          className={`lg:hidden w-[300px] h-[88vh] overflow-hidden absolute right-0 top-[12vh] pointer-events-${
            nav ? "auto" : "none"
          }`}
          id="mobile-menu"
        >
          <div
            className={`${
              nav ? "right-0 " : "-right-[300px] "
            } w-[300px] z-40 absolute  transition-all  duration-300 ease-in-out h-full bg-[#0d1023] px-4 pb-3 pt-2 flex flex-col gap-2`}
          >
            <Link
              className="rounded-md px-3 py-2 text-md font-medium text-white"
              to={"/work"}
              onClick={() => {
                setNav(false);
              }}
            >
              Work
            </Link>
            <Link
              className="rounded-md px-3 py-2 text-md font-medium text-white"
              to={"/services"}
              onClick={() => {
                setNav(false);
              }}
            >
              Services
            </Link>

            <Link
              className="rounded-md px-3 py-2 text-md font-medium text-white"
              to={"/blogs"}
              onClick={() => {
                setNav(false);
              }}
            >
              Blogs
            </Link>

            <Link
              className="rounded-md px-3 py-2 text-md font-medium text-white"
              to={"/about"}
              onClick={() => {
                setNav(false);
              }}
            >
              About Us
            </Link>
            <Link
              className="text-white w-fit text-[15px] p-[12px] bg-[#5414F5] rounded sm:text-[13px] sm:p-[8px]"
              to={"/book"}
              onClick={() => {
                setNav(false);
              }}
            >
              Book intro call  — it's free
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
