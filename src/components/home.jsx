import React from "react";
import ProfilePic from "../assets/ProfilePic.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-neutral-950 to-gray-800 text-slate-50 "
    >
      <div className="max-w-screen-lg mx-auto px-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center items-start h-full mt-10 sm:mt-0">
          <h2 className="max-w-md text-4xl lg:text-6xl font-bold">
            I'm a Software Developer!
          </h2>
          <h5 className="italic text-md my-4 md:text-base mb-4 ">
            but sadly my dog isn't...
          </h5>
          <div className="my-2 max-w-md text-xs md:text-base text-justify">
            I have three years of experience building & design software.
            Currently I love to work on web development, utilising technologies
            such as React & Tailwind CSS
          </div>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-slate-50 w-fit my-3 py-2 px-2 sm:px-6 sm:py-3 sm:my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-200">
                <AiOutlineArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={ProfilePic}
            alt="profile"
            className="rounded-2xl w-9/12 sm:w-10/12 mx-auto my-auto mb-10 sm:mb-auto md:mt-20 lg:mt-22"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
