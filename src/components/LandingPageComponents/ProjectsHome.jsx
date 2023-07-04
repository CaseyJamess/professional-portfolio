import React, { useEffect, useRef } from "react";
import theWeatherman from "../../assets/weatherman.svg";
import Wilpshire from "../../assets/wilpshire.svg";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";
import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function ProjectsHome() {
  const proj1 = useRef(null);
  const proj2 = useRef(null);

  const [inViewRefWeath, inViewWeath] = useInView({ triggerOnce: true });
  const [inViewRefWilp, inViewWilp] = useInView({ triggerOnce: true });

  const textWeath = "The Weatherman";
  const textWilp = "Wilpshire Dental Clinic";

  const trailWeath = useTrail(textWeath.length, {
    from: { opacity: 0 },
    to: { opacity: inViewWeath ? 1 : 0 }, // Only animate when in view
    config: { tension: 800, friction: 50 },
    delay: 0,
  });

  const trailWilp = useTrail(textWilp.length, {
    from: { opacity: 0 },
    to: { opacity: inViewWilp ? 1 : 0 }, // Only animate when in view
    config: { tension: 800, friction: 50 },
    delay: 0,
  });

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(proj1.current, {
      origin: "bottom",
      distance: "80px",
      duration: 1000,
      opacity: 0,
      easing: "ease-in-out",
    });

    sr.reveal(proj2.current, {
      origin: "bottom",
      distance: "80px",
      duration: 1000,
      opacity: 0,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      name="Projects"
      className="min-h-screen w-full bg-offBlack text-ice overflow-y-scroll relative"
    >
      <div className="flex flex-col mx-5 xl:mx-auto p-4 my-20 max-w-screen-xl">
        <div className="h-24 text-xl md:text-3xl xl:text-4xl font-medium uppercase tracking-widest">
          <h2>P R O J E C T S</h2>
          <h2>P R O J E C T</h2>
          <h2>P R O J E C</h2>
          <h2>P R O J E</h2>
          <h2>P R O J</h2>
          <h2>P R O</h2>
          <h2>P R</h2>
          <h2>P</h2>
        </div>

        <div className=" mt-32 xl:-mt-10 ">
          <div className="flex flex-col items-center min-h-screen xl:flex-row my-auto">
            <div className="relative xl:w-3/4">
              <Link to="/Projects/TheWeatherman">
                <img
                  src={theWeatherman}
                  alt="weatherman"
                  className=" opacity-80 xl:opacity-60 xl:hover:opacity-100  h-auto duration-1000 cursor-pointer"
                />
              </Link>
              <div className="absolute mt-6 items-center  md:rotate-90 flex flex-row md:top-32 md:right-0 whitespace-nowrap">
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

            <div className=" xl:-ml-16 my-10 md:my-0 xl:my-0 xl:w-1/4">
              <h2
                ref={inViewRefWeath}
                className="text-4xl xl:text-5xl mt-4 md:mt-0 font-bold "
              >
                {trailWeath.map((props, index) => (
                  <animated.span key={index} style={props}>
                    {textWeath[index]}
                  </animated.span>
                ))}
              </h2>
              <div ref={proj1}>
                <h4 className="text-lg text-justify mt-4">
                  A Weather Application built with React & Tailwind to get the
                  Weather from anywhere in the world!
                </h4>
                <Link to="/Projects/TheWeatherman">
                  <h5 className="text-lg mt-2 font-bold text-center text-hLink hover:underline">
                    View Project
                  </h5>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center min-h-screen xl:flex-row-reverse my-auto">
            <div className="relative xl:w-3/4">
              <img
                src={Wilpshire}
                alt="Wilpshire"
                className="opacity-80 xl:opacity-60 xl:hover:opacity-100 h-auto duration-1000 cursor-pointer"
              />

              <div className="absolute mt-6 items-center  md:rotate-90 flex flex-row md:top-28 md:left-0 whitespace-nowrap">
                <h5 className="mr-2 text-center text-xs px-1 bg-midGray text-offBlack">
                  Full Stack
                </h5>
                <h5 className="mr-2 text-center text-xs px-1 bg-midGray text-offBlack">
                  API
                </h5>
                <h5 className="text-center text-xs px-1 bg-midGray text-offBlack">
                  UI/UX
                </h5>
              </div>
            </div>

            <div className="xl:-mr-20 xl:w-1/4 my-10 md:my-0 xl:my-0">
              <h2
                ref={inViewRefWilp}
                className="text-4xl mt-4 md:mt-0 xl:text-5xl font-bold "
              >
                {trailWilp.map((props, index) => (
                  <animated.span key={index} style={props}>
                    {textWilp[index]}
                  </animated.span>
                ))}
              </h2>
              <div ref={proj2}>
                <h4 className="text-lg text-justify mt-4">
                  A website built for a client - utilising clean colors &
                  whitespace for a sense of professionalism
                </h4>
                <div className="text-base italic mt-2">
                  Note - work in progress demo currently unavailable
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsHome;
