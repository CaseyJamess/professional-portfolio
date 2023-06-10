import React from "react";

/*
import javascript from "../dist/assets/javascript-d04a05c4.png";
import html from "../dist/assets/html-d20c9482.png";
import css from "../dist/assets/css-4040bdba.png";
import reactImage from "../dist/assets/react-e00184ba.png";
import tailwind from "../dist/assets/tailwind-47f3710a.png";
import cPlus from "../dist/assets/c__-de1dfa76.png";
import node from "../dist/assets/node-f467a70a.png";
import electron from "../dist/assets/electron-57b47128.png";
import bootstrap from "../dist/assets/bootstrap-e857e3f1.png";
import jQuery from "../dist/assets/jquery-7a65e3a2.png";
import figma from "../dist/assets/figma-8e8a52fb.png";
import github from "../dist/assets/github-e59bf158.png";
*/

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
      className="min-h-screen w-full flex bg-gradient-to-b mx-auto from-neutral-950 to-gray-900 text-slate-50 justify-center items-center overflow-y-scroll "
    >
      <div className="max-w-screen-lg px-4 my-10 flex flex-col justify-center w-full h-full">
        <div className="mb-4">
          <p className="text-2xl sm:text-4xl font-bold  inline border-b-4 border-slate-50">
            Experience
          </p>
        </div>
        <p className="my-2 text-sm md:text-base">
          These are the technologies that I have worked with in my career:
        </p>

        <div className="w-full mt-2 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 text-center items-center px-12 sm:px-0">
          {techs.map(({ id, title, src, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-0 rounded-lg ${style} sm:py-2`}
            >
              <img src={src} alt={title} className="w-10 mx-auto xl:w-19" />
              <p className="mt-1 sm:mt-4 font-medium text-xs sm:text-base">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
