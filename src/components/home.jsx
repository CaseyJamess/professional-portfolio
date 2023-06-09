import React from "react";
import ProfilePic from "../assets/ProfilePic.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-neutral-950 to-gray-800 text-slate-50 flex flex-col justify-center items-center overflow-y-auto"
    >
      <div className="px-4 mt-10 flex flex-col sm:flex-row items-center sm:items-start justify-center">
        <div className="flex flex-col justify-center items-start max-w-sm lg:max-w-lg mt-10 sm:mt-0">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            I'm a Software Developer!
          </h2>
          <h5 className="italic text-md md:text-base mb-4 text-center">
            but sadly my dog isn't...
          </h5>
          <div className="text-xs md:text-base mx-auto text-justify mb-4">
            I have three years of experience building & designing software.
            Currently, I love to work on web development, utilizing technologies
            such as React & Tailwind CSS.
          </div>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-slate-50 w-fit my-3 py-2 px-4 md:px-6 sm:py-3 sm:my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-200">
                <AiOutlineArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={ProfilePic}
            alt="profile"
            className="flex rounded-2xl w-48 md:w-56 lg:w-72 xl:w-80 mx-10 my-12 md:my-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
