import React from "react";
import ProfilePic from "../assets/ProfilePic.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";

const Home = () => {
  const techs = [
    {
      id: 0,
      title: "Javascript",
      src: javascript,
      style: "shadow-yellow-500",
    },
    {
      id: 1,
      title: "HTML",
      src: html,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      title: "CSS",
      src: css,
      style: "shadow-blue-500",
    },
    {
      id: 3,
      title: "React",
      src: reactImage,
      style: "shadow-cyan-500",
    },
    {
      id: 4,
      title: "Tailwind",
      src: tailwind,
      style: "shadow-teal-500",
    },
    {
      id: 5,
      title: "Bootstrap",
      src: bootstrap,
      style: "shadow-purple-500",
    },
  ];

  const links = [
    {
      id: 0,
      child: (
        <>
          <FaLinkedin size={35} />
        </>
      ),
      href: "https://www.linkedin.com/in/casey-mcardle/",
      style: "rounded-tr-md",
    },
    {
      id: 1,
      child: (
        <>
          <FaGithub size={35} />
        </>
      ),
      href: "https://github.com/CaseyJamess",
    },
    {
      id: 2,
      child: (
        <>
          <HiOutlineMail size={35} />
        </>
      ),
      href: "mailto:caseyjamesmcardle@gmail.com",
    },
  ];

  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-neutral-950 to-gray-900 text-slate-50 flex flex-col justify-center items-center overflow-y-auto"
    >
      <div className="px-4 my-10 flex flex-col sm:flex-row items-center sm:items-start justify-center">
        <div className="flex flex-col justify-center items-start max-w-sm lg:max-w-lg mt-10 sm:mt-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            I'm a Front-End Web Developer!
          </h2>
          <h5 className="italic text-md md:text-base lg:text-lg mb-3 text-center">
            but sadly my dog isn't...
          </h5>
          <div className="text-sm md:text-base lg:text-lg mx-auto text-justify">
            Hi I'm Casey, a passionate front-end developer based in
            Rawtenstall, England &#x1F4CD;
          </div>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group flex items-center text-base xl:text-xl text-slate-50 w-fit my-4 md:px-6 sm:py-3 py-2 px-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-200">
                <AiOutlineArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

          <div
            id="socials"
            className="flex flex-row xl:hidden items-center text-slate-50"
          >
            {links.map(({ id, child, href }) => (
              <a id={id} href={href} className="mr-3 cursor-pointer hover:scale-110 my-1">
                {child}
              </a>
            ))}
          </div>

          <div
            id="techStack"
            className="flex flex-row items-center my-2 text-xl md:text-2xl xl:text-3xl xl:mt-10 text-slate-50"
          >
            <span className="mr-2 sm:mr-4">My Stack :</span>
            {techs.map(({ id, src, title }) => (
              <span key={id} className="hover:scale-125 duration-500 ml-2 sm:ml-4">
                <img src={src} alt={title} className="w-5 mx-auto md:w-6 lg:w-7 xl:w-8 "></img>
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={ProfilePic}
            alt="profile"
            className="flex w-52 mt-4 sm:mt-4 md:w-60 lg:w-72 xl:w-80 2xl:w-96 mx-12 xl:mx-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
