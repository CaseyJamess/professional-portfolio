import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-scroll";
import classNames from "classnames";
import { useTrail, animated, useSpring } from "react-spring";
import { links } from "../Utility/Techs";

const Home = ({ isVisible }) => {

  const text = " Building Engaging Web Experiences.";
  const fadeInContainer = classNames("fade-in-container", {
    "fade-in": isVisible,
  });

  const trail = useTrail(text.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 1500, friction: 60 },
    delay: 0,
  });

  const [animateAfter, setAnimateAfter] = useState(false);

  const animateAfterStyles = useSpring({
    opacity: animateAfter ? 1 : 0,
    transform: animateAfter ? "translateY(0)" : "translateY(40px)",
    config: { tension: 300, friction: 100 },
    delay: 450,
  });

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setAnimateAfter(true);
      }, 700);
    }
  }, [isVisible]);

  return (
    <div className={fadeInContainer}>
      <div
        name="Home"
        className="min-h-screen w-full bg-hero-pattern bg-cover bg-center text-ice flex flex-col "
      >
        <div className="relative flex flex-col my-auto">
          <div className="my-10 flex flex-col mx-5 max-w-screen-xl xl:mx-auto sm:flex-row items-center justify-center relative">
            <div className="flex flex-col justify-center items-start lg:mr-60 max-w-sm lg:max-w-lg mt-10 sm:mt-0 relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl  font-bold my-3 relative">
                {trail.map((props, index) => (
                  <animated.span key={index} style={props}>
                    {text[index]}
                  </animated.span>
                ))}
              </h2>

              <div id="animate-after" initial="hidden">
                <animated.div
                  initial="hidden"
                  style={animateAfterStyles}
                  className="text-sm md:text-base lg:text-lg mx-auto text-justify relative"
                >
                  <p>Hi I'm Casey, a passionate web developer </p>
                  <p>based in Rawtenstall, England &#x1F4CD;</p>
                </animated.div>
              </div>

              <animated.div style={animateAfterStyles}>
                <Link
                  to="Projects"
                  smooth
                  duration={800}
                  className="group flex items-center text-base xl:text-xl border-ice bg-black text-ice w-fit my-6 md:px-6 sm:py-3 py-2 px-4 rounded-md hover:bg-ice hover:text-charcoal duration-500 cursor-pointer relative"
                >
                  Projects
                  <span className="group-hover:rotate-90 duration-200">
                    <AiOutlineArrowRight size={25} className="ml-1" />
                  </span>
                </Link>
              </animated.div>

              <animated.div
                id="socialLinks"
                style={animateAfterStyles}
                className="flex flex-row my-2 text-ice relative"
              >
                {links.map(({ id, child, href }) => (
                  <a
                    key={id}
                    href={href}
                    className="social-link cursor-pointer mr-3 duration-500 hover:rounded-md hover:bg-ice hover:text-charcoal"
                  >
                    {child}
                  </a>
                ))}
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
