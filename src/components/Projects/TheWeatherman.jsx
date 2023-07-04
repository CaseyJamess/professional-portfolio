import React from "react";
import Contact from "../LandingPageComponents/Contact";
import Navbar from "../Navbar/Navbar";
import theWeatherman from "../../assets/weatherman.svg";
import { useTrail, animated } from "react-spring";
import { PortfolioLinks } from "../Utility/PortfolioLinks";
import { useInView } from "react-intersection-observer";

function TheWeatherman() {
  const [inViewRefWeath, inViewWeath] = useInView({ triggerOnce: true });

  const weath = PortfolioLinks.slice(0, 1);

  const text = "The Weatherman";

  const trailWeath = useTrail(text.length, {
    from: { opacity: 0 },
    to: { opacity: inViewWeath ? 1 : 0 }, // Only animate when in view
    config: { tension: 800, friction: 50 },
    delay: 0,
  });

  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className="min-h-screen w-full text-ice bg-notBlack">
      <Navbar />
      {/* Header */}
      <div className="flex flex-col min-h-screen max-w-screen-xl items-center px-4 mx-5 xl:mx-auto ">
        {/* Body */}
        <div className="flex flex-col text-ice max-w-screen-lg ">
          <div className="flex flex-col container items-center justify-center mt-20 xl:flex-row ">
            <div className="  ">
              <div ref={inViewRefWeath} className="">
                <h2 className="text-4xl md:text-6xl xl:text-7xl w-2/12 font-bold">
                  {trailWeath.map((props, index) => (
                    <animated.span key={index} style={props}>
                      {text[index]}
                    </animated.span>
                  ))}
                </h2>
              </div>
              <div className="relative">
                <img src={theWeatherman} alt="weatherman" className="w-full " />
                <div className="absolute mt-6 items-center md:rotate-90 flex flex-row md:top-32 md:right-0 whitespace-nowrap">
                  <h5 className="mr-2 text-center text-xs px-1 bg-midGray text-offBlack">
                    Front-End
                  </h5>
                  <h5 className="mr-2 text-center text-xs px-1 bg-midGray text-offBlack">
                    REST API
                  </h5>
                  <h5 className="text-center text-xs px-1 bg-midGray text-offBlack">
                    UI/UX
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          {weath.map(({ id, demo, code }) => (
            <div
              key={id}
              className="flex max-w-screen-md my-6 items-center justify-center mx-auto flex-col "
            >
              <h4 className="text-3xl mt-10 lg:text-5xl font-semibold">
                Check it out here:
              </h4>
              <div className="flex flex-row mt-6 justify-around">
                <button
                  onClick={() => openLink(demo)}
                  className="mr-2 px-5 text-hLink hover:underline cursor-pointer text-xl font-bold py-2  "
                >
                  Demo
                </button>
                <button
                  onClick={() => openLink(code)}
                  className="px-5 text-hLink hover:underline cursor-pointer text-xl font-bold py-2"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
          <div className="flex flex-col mt-10 ml-5">
            <h3 className="mb-2 text-2xl font-semibold">Concept:</h3>
            <p className="mb-8">
              The goal of this project was to create a Weather App capable of
              delivering accurate weather data in real time from users all over
              the world.
            </p>

            <h3 className="mb-2 text-2xl font-semibold">Implementation:</h3>
            <p className="mb-3">
              The project started with a vanilla CSS and JavaScript
              implementation and evolved to adopt a modular approach, leveraging
              React components to improve code maintainability and scalability.
              Input validation was improved to ensure reliable data inputs.
            </p>
            <p className="mb-4">
              The final UI/UX concept was designed in Figma and implemented
              using Tailwind CSS and React Icons.
            </p>
            <p className="mb-8">
              Vite JS was selected to build the app and get it production ready
            </p>

            <div className="flex flex-col xl:flex-row max-w-screen-md my-10 justify-between ">
              <div className="flex-col mb-4 xl:mb-0  xl:mr-auto">
                <h3 className="mb-2 text-2xl font-semibold">Features:</h3>
                <ul className="list-disc list-inside mb-4">
                  <li>Accurate and up-to-date weather reports</li>
                  <li>Modular and responsive design</li>
                  <li>Input validation for reliable data</li>
                </ul>
              </div>

              <div className="flex flex-col xl:ml-auto">
                <h3 className="mb-2 text-2xl font-semibold">
                  Technologies Used:
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>React JS</li>
                  <li>Tailwind CSS</li>
                  <li>HTML 5</li>
                  <li>JavaScript</li>
                  <li>Vite JS</li>
                </ul>
              </div>
            </div>

            <h3 className="mb-3 text-2xl font-semibold">
              Disclaimer and Future Versions:
            </h3>
            <p className="mb-3 pb-20">
              Please note that the Weather App operates within the limitations
              of a free API key, such as the inability to access the user's
              current location and the absence of a weekly forecast feature.
              However, future versions may include additional features like
              location-based suggestions in a dropdown menu based on user input.
            </p>
          </div>
        </div>

        {/* Footer */}
      </div>
      <Contact />
    </div>
  );
}

export default TheWeatherman;
