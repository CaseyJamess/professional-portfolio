import React, { useEffect, useRef } from "react";
import me from "../../assets/MeProfile2.png";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

const About = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(imgRef.current, {
      origin: "left",
      distance: "50px",
      duration: 500,
      delay: 200,
      opacity: 0,
      easing: "ease-in-out",
    });

    sr.reveal(textRef.current, {
      origin: "bottom",
      distance: "50px",
      duration: 700,
      delay: 300,
      opacity: 0,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      name="About"
      className="min-h-screen w-full bg-offBlack text-ice overflow-y-scroll relative"
    >
      <div className="flex flex-col mx-5 xl:mx-auto mt-20 p-4 max-w-screen-xl">
        <div className="mb-4 h-24 text-xl md:text-3xl xl:text-4xl font-medium uppercase tracking-widest">
          <h2 ref={textRef}>A B O U T M E</h2>
          <h2>A B O U T M</h2>
          <h2>A B O U T</h2>
          <h2>A B O U</h2>
          <h2>A B O</h2>
          <h2>A B</h2>
          <h2>A</h2>
        </div>
      </div>

      <div className="flex flex-col max-w-screen-md  mt-2 md:-mt-10 mx-5 px-4 lg:mx-auto">
        <div className="flex flex-col">
          <div
            ref={imgRef}
            className="flex items-center md:items-end justify-center md:justify-end mr-0 md:mr-32 "
          >
            <Link to="/AboutMe">
            <img
              src={me}
              className="w-40 xl:opacity-70 xl:hover:opacity-100 xl:hover:scale-105 duration-300 cursor-pointer md:w-52 xl:w-60 mt-2 mb-8"
            />
            </Link>
          </div>
          <div className="flex flex-col  ">
            <div
              ref={textRef}
              className="flex flex-col max-w-screen-sm text-lg items-center justify-center leading-loose text-justify"
            >
              <h2 className="mb-5 font-bold text-4xl xl:text-6xl">
                Hi, I'm Casey
              </h2>
              <p className="mb-4 text-sm md:text-base">
                I'm a passionate web developer dedicated to creating{" "}
                <strong>captivating digital experiences.</strong>
              </p>
              <p className="mb-4 text-sm md:text-base">
                I'm based just outside of Manchester, England & I'm available
                for both <strong>full-time and freelance work</strong>.
              </p>
              <p className="mb-4 text-sm md:text-base">
                Feel free to get in touch at the bottom of this page if you're
                interested in working with me
              </p>
              <p className="mb-4 text-sm md:text-base">
                or{" "}
                <Link to="/AboutMe">
                  <button className="hover:underline font-extrabold cursor-pointer text-hLink">
                    click here
                  </button>{" "}
                </Link>
                to learn more about me
              </p>
              <p className="mb-4 text-sm md:text-base text-center">
                - <strong>let's connect!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
