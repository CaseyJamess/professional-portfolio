import React from "react";
import Places from "./places";

const Interests = () => {
  return (
    <div
      name="interests"
      className="min-h-screen w-full flex bg-gradient-to-b from-neutral-950 to-gray-800 text-slate-50 justify-center items-center"
    >
      <div className="p-4 text-justify max-w-screen-lg ">
        <div className="mt-4 mx-5 xl:mx-auto md:mt-8 lg:mt-16 pb-1 sm:pb-4">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4">
            Interests
          </p>
        </div>
        <div className="text-justify items-center text-sm  xl:text-base">
          <p className="my-3">
            Self-care and maintaining a healthy mind-body connection are
            integral to my lifestyle. I prioritize regular exercise, which not
            only keeps me physically fit but also has a profound positive impact
            on my mental well-being. It allows me to rejuvenate, clear my mind,
            and maintain a balanced outlook on life
          </p>

          <p className="mb-3">
            As an avid music lover, I derive immense joy from playing various
            musical instruments and delving into the art of music production.
            This creative outlet allows me to unleash my imagination, explore
            new melodies, and harness the power of sound. It's a deeply
            gratifying experience that constantly fuels my passion for music
          </p>

          <p className="mb-3">
            Skiing holds a special place in my heart, not only for the
            exhilarating rush it provides but also for the profound
            contemplation it sparks. The combination of gliding down snowy
            slopes and being surrounded by nature offers a unique opportunity
            for introspection. It often fuels thoughtful discussions on ethics
            and morality, drawing inspiration from esteemed philosophers such as
            Joseph Fletcher and Aristotle
          </p>

          <p className="mb-2">
            As a passionate supporter of Burnley FC, attending their games is a
            cherished pastime for me. It allows me to connect with friends,
            share the excitement of the match, and immerse myself in the
            electric atmosphere of the stadium. The camaraderie and shared
            passion for the sport create unforgettable memories that I treasure
            deeply
          </p>

          <p className="mb-3">
            Recognizing the privilege I have, I am deeply committed to making a
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
            to contribute to their important causes. By lending my support, I
            hope to contribute to the pursuit of justice and the preservation of
            our planet's biodiversity.
          </p>

          <p className="mb-3 lg:mb-6">
            Alongside my personal pursuits, I possess a deep desire to explore
            the world, embrace diverse cultures, and broaden my horizons. Over
            the years, I have been fortunate to visit several captivating
            destinations that have captured my heart. These experiences have
            enriched my perspective and instilled in me a sense of wonder and
            appreciation for the beauty of our world. Click here to see some of
            my favourite locations!
          </p>
        </div>
        <Places/>
      </div>
    </div>
  );
};

export default Interests;
