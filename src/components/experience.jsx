import React from "react";

import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import cPlus from "../assets/c++.png";
import node from "../assets/node.png";
import electron from "../assets/electron.png";
import bootstrap from "../assets/bootstrap.png";
import jQuery from "../assets/jquery.png";
import figma from "../assets/figma.png";
import github from "../assets/github.png";

const Experience = () => {
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
      title: "C ++",
      src: cPlus,
      style: "shadow-blue-700",
    },
    {
      id: 6,
      title: "Node JS",
      src: node,
      style: "shadow-green-500",
    },
    {
      id: 7,
      title: "Bootstrap",
      src: bootstrap,
      style: "shadow-purple-500",
    },
    {
      id: 8,
      title: "Electron",
      src: electron,
      style: "shadow-sky-900",
    },
    {
      id: 9,
      title: "Github",
      src: github,
      style: "shadow-slate-50",
    },

    {
      id: 10,
      title: "jQuery",
      src: jQuery,
      style: "shadow-blue-600",
    },

    {
      id: 11,
      title: "Figma",
      src: figma,
      style: "shadow-red-500",
    },
  ];

  return (
    <div
      id="experience"
      className="h-screen w-full bg-gradient-to-b from-neutral-950 to-gray-800 text-slate-50"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="mt-0 sm:mt-4 md:mt-6 ">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 mb-4 border-slate-50">
            Experience
          </p>
        </div>
        <p className="my-4 md:my-4 text-sm md:text-base">
          These are the technologies that I have worked with in my career:
        </p>

        <div className="w-full mt-2 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center px-12 sm:px-0">
          {techs.map(({ id, title, src, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-0 rounded-lg ${style} sm:py-2`}
            >
              <img src={src} alt={title} className="w-8 mx-auto xl:w-19" />
              <p className="mt-4 font-medium text-xs sm:text-base">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
