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
      className="min-h-screen w-full flex justify-center items-center bg-gradient-to-b from-neutral-950 to-gray-800 text-slate-50"
    >
      <div className="max-w-screen-lg w-full p-4 mx-auto">
        <div className="pb-8 mt-10 sm:-mt-20">
          <h2 className="text-2xl sm:text-4xl font-bold inline border-b-4">
            Portfolio
          </h2>
          <p className="py-6 text-xl">Check out some of my work right here:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-0">
          {portfolios.map(({ id, src, href, href2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md w-full mx-auto duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center text-base">
                <button
                  onClick={() => handleCodeButtonClick(href2)}
                  className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 hover:text-yellow-400"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeButtonClick(href)}
                  className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 hover:text-yellow-400"
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
