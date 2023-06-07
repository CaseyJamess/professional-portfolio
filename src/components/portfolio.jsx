import React from "react";
import theWeatherman from "../assets/the-weatherman.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: theWeatherman,
      href: "https://github.com/CaseyJamess/The-Weatherman",
      href2: "https://the-weatherman.netlify.app/",
    },
  ];

  const handleCodeButtonClick = (href) => {
    window.open(href, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-neutral-950 to-gray-800 w-full text-slate-50 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-10 sm:-mt-20 lg:mt-0">
          <h2 className="text-2xl sm:text-4xl font-bold inline border-b-4">
            Portfolio
          </h2>
          <p className="py-6 text-xl">Check out some of my work right here:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, href2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleCodeButtonClick(href2)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  hover:text-yellow-400"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeButtonClick(href)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-yellow-400"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
