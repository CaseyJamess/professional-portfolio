import React from "react";
import Places from "./places";

const Interests = () => {
  return (
    <div
      name="interests"
      className="h-screen w-full bg-gradient-to-b from-neutral-950 to-gray-800 text-slate-50 flex flex-col justify-center items-center"
    >
      <div className="p-4 text-justify max-w-screen-lg ">
        <div className=" mt-4 mx-auto md:mt-8 lg:mt-16 pb-1 sm:pb-4">
          <p className=" text-2xl sm:text-4xl font-bold inline border-b-4">
            Interests
          </p>
        </div>

        <div className="justify-center items-center text-justify text-xs md:text-sm 2xl:text-base">
          <p className="my-3 ">
            Self-care and maintaining a healthy mind-body connection are
            essential aspects of my life. Regular exercise not only keeps me
            physically fit but also positively impacts my mental well-being
          </p>
          <p className="mb-3">
            As a music lover, I find joy in playing various instruments and
            exploring the art of music production, where I can unleash my
            creativity and harness the power of sound
          </p>
          <p className="mb-3">
            Skiing not only provides an exhilarating rush but also sparks
            profound contemplation, fueling discussions on ethics and morality
            influenced by esteemed philosophers like Joseph Fletcher and
            Aristotle
          </p>
          <p className="mb-2">
            As a passionate supporter of Burnley FC, attending their games is a
            cherished pastime that allows me to connect with friends and immerse
            myself in the electric atmosphere of the game
          </p>
          <p className="mb-3">
            Understanding the privilege I have, I am committed to making a
            positive impact in the world. I actively support organizations like
            the{" "}
            <a
              href="https://www.innocenceproject.org"
              target="_blank"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Innocence Project
            </a>{" "}
            and{" "}
            <a
              href="https://www.worldwildlife.org"
              target="_blank"
              className="text-blue-500 underline hover:text-blue-700"
            >
              WWF
            </a>{" "}
            to contribute to their important causes
          </p>
          <p className="mb-3">
            Alongside my personal pursuits, I have a deep desire to explore the
            world, embrace diverse cultures, and broaden my horizons. Here are
            some of my favorite locations that have captured my heart:
          </p>
        </div>
        <Places />
      </div>
    </div>
  );
};

export default Interests;
