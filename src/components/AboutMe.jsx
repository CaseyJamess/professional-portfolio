import React, { useEffect, useRef } from "react";
import me from "../assets/MeProfile2.png";
import ScrollReveal from "scrollreveal";
import Resume from "./About/Resume";
import Contact from "./LandingPageComponents/Contact";
import { FaReact, FaHtml5, FaCss3, FaJs, FaNode } from "react-icons/fa";
import { useTrail, animated } from "react-spring";
import myCV from "../assets/CaseyMcArdleCV.pdf";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const [inViewRefMe, inViewMe] = useInView({ triggerOnce: true });

  const textMe = "Here's a bit more about me...";

  const trailMe = useTrail(textMe.length, {
    from: { opacity: 0 },
    to: { opacity: inViewMe ? 1 : 0 }, //Only animate when in view
    config: { tension: 800, friction: 50 },
    delay: 0,
  });

  return (
    <div
      name="AboutMe"
      className="min-h-screen w-full bg-offBlack text-ice overflow-y-scroll"
    >
      <div className="flex flex-col mx-5 xl:mx-auto mt-20 p-4 max-w-screen-xl">
        <div className="mb-4 h-24 text-xl md:text-3xl xl:text-4xl font-medium uppercase tracking-widest">
          <h2>A B O U T M E</h2>
          <h2>A B O U T M</h2>
          <h2>A B O U T</h2>
          <h2>A B O U</h2>
          <h2>A B O</h2>
          <h2>A B</h2>
          <h2>A</h2>
        </div>

        <div className="flex flex-col max-w-screen-lg mt-2 md:-mt-10 lg:mx-auto">
          <div className="flex flex-col max-w-screen-md mt-4 ">
            <div className="flex items-center md:items-end justify-center md:justify-end md:mr-8">
              <img src={me} className="w-40 md:w-52 xl:w-60 mt-2 mb-6" />
            </div>
          </div>

          <div className="flex flex-col text-lg leading-loose ">
            <h2
              ref={inViewRefMe}
              className="mb-5 xl:mb-10 font-bold text-2xl md:text-4xl xl:text-6xl"
            >
              {trailMe.map((props, index) => (
                <animated.span key={index} style={props}>
                  {textMe[index]}
                </animated.span>
              ))}
            </h2>
            <div className=" text-justify text-sm md:text-base">
              <p className="mb-4 ">
                I have a strong background in Electronics Engineering and I'm
                currently seeking a full-time role in web development.
              </p>
              <p className="mb-4 ">
                It was in my role as a Design Engineer where my passion for
                Web-Development ignited - I utilised modern web development
                technologies to build multiple interactive test interfaces for
                use in manufacturing at Protec Fire Detection.
              </p>
              <p className="mb-4">
                My career goal is to become a full-stack engineer, combining my
                keen eye for design with the ability to create inclusive and
                inspiring UI/UX experiences throughout the development process.
              </p>
              <p className="mb-4">
                I strongly believe in the power of simplicity. I strive to make
                things user-friendly, ensuring that they are intuitive and easy
                to navigate. Simultaneously, I focus on building scalable and
                maintainable codebases, enabling efficient development and
                future growth.
              </p>

              <div className="flex flex-col xl:mt-32 items-center text-center my-10 max-w-screen-md mx-auto">
                <p className="mb-4 text-xl md:text-4xl font-bold">
                  Here is my Tech Stack:
                </p>

                <ul className="flex my-4 text-lg md:text-xl flex-col md:flex-row">
                  <li className="flex-row inline-flex justify-center p-2 mx-4">
                    <FaJs className="mr-2 text-hLink text-3xl" />
                    JavaScript
                  </li>
                  <li className="flex-row inline-flex justify-center p-2 mx-4">
                    <FaReact className="mr-2 text-hLink text-3xl" />
                    React.js
                  </li>
                  <li className="flex-row inline-flex justify-center p-2 mx-4">
                    <FaHtml5 className="mr-2 text-hLink text-3xl" />
                    HTML5
                  </li>
                  <li className="flex-row inline-flex justify-center p-2 mx-4">
                    <FaCss3 className="mr-2 text-hLink text-3xl" />
                    CSS3
                  </li>
                  <li className="flex-row inline-flex justify-center p-2 mx-4">
                    <FaNode className="mr-2 text-hLink text-3xl" />
                    Node.js
                  </li>
                </ul>
              </div>

              <p className="mb-4">
                Recently, I returned home after four months of traveling, which
                has further fueled my excitement to embark on this new career
                path.
              </p>
              <p className="mb-4">
                Outside of work I enjoy producing & playing music,
                Philosophising & Skiing, as well as contributing to charitable
                causes.
              </p>
              <p className="mb-4">
                Recognising my privilege in the world, I make a concerted effort
                to try and contribute positively into worthwhile causes. I'm a
                member of the&nbsp;
                <a
                  href="https://www.worldwildlife.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hLink font-extrabold hover:underline"
                >
                  WWF
                </a>
                &nbsp;and the&nbsp;
                <a
                  href="https://www.innocenceproject.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hLink font-extrabold hover:underline"
                >
                  Innocence Project
                </a>
                &nbsp;and try to buy where possible from sustainable businesses.
              </p>

              <p className="mb-4">
                Check below for a digital version of my resume or you can
                download a copy right here:
              </p>
            </div>
            <div className="mb-4 text-sm md:text-base items-center justify-center mx-auto my-10 ">
              <a
                href={myCV}
                download
                className="font-extrabold border text-lg xl:text-xl  border-ice p-2 items-center cursor-pointer bg-offBlack hover:bg-ice  hover:text-offBlack hover:border-ice duration-300  shadow-md"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Resume />
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default AboutMe;
