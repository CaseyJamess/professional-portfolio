import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fitnessImage from "../assets/fitness.jpg";
import skiImage from "../assets/ski.jpg";
import musicImage from "../assets/music.jpg";
import turfImage from "../assets/turfmoor.jpg";
import charityimage from "../assets/charity.jpg";
import travelImage from "../assets/travel.jpg";

const Interests = () => {
  const images = [
    {
      id: 0,
      src: fitnessImage,
      text: (
        <p>
          Self-care and maintaining a healthy mind-body connection are integral
          to my lifestyle. Regular exercise keeps me physically fit and has a
          positive impact on my mental well-being
        </p>
      ),
    },
    {
      id: 1,
      src: skiImage,
      text: (
        <p>
          Skiing provides an exhilarating rush and sparks profound
          contemplation. Gliding down snowy slopes surrounded by nature fuels
          introspection and gives fresh perspectives on life
        </p>
      ),
    },
    {
      id: 2,
      src: musicImage,
      text: (
        <p>
          As an avid music lover, playing musical instruments and delving into
          music production brings me immense joy. It allows me to unleash my
          imagination, explore new melodies, and fuel my passion for music
        </p>
      ),
    },
    {
      id: 3,
      src: turfImage,
      text: (
        <p>
          Attending Burnley FC games is a cherished pastime that allows me to
          connect with friends, share the excitement of the match, and immerse
          myself in the electric atmosphere of the stadium
        </p>
      ),
    },
    {
      id: 4,
      src: charityimage,
      text: (
        <p>
          Recognising the privilege I have, I actively support organiations like
          the{" "}
          <a
            href="https://www.innocenceproject.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 cursor-pointer underline hover:text-blue-700"
          >
            Innocence Project
          </a>{" "}
          and the{" "}
          <a
            href="https://www.worldwildlife.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline cursor-pointer hover:text-blue-700"
          >
            WWF
          </a>
          , to contribute to important causes and make a positive impact in the
          pursuit of justice and the preservation of our planet's biodiversity
        </p>
      ),
    },
    {
      id: 5,
      src: travelImage,
      text: (
        <p>
          I have a passion for exploring the world, embracing diverse cultures,
          and gaining new perspectives through travel. It has broadened my
          horizons and instilled a deep appreciation for the beauty of our world
        </p>
      ),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    dotsClass: "slick-dots",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div
      name="interests"
      className="min-h-screen w-full bg-neutral-950 text-slate-50 flex justify-center items-center overflow-y-scroll"
    >
      <div className="flex flex-col justify-center w-full p-4 max-w-screen-lg my-10 mx-5 lg:mx-auto">
        <div className="mt-6">
          <h2 className="text-2xl sm:text-4xl font-bold inline border-b-4 border-slate-50">
            Interests
          </h2>
        </div>

        <div className="flex mt-10 items-center justify-center">
          <div className="w-full">
            <div className=" my-2 lg:my-8 slider-container">
              <Slider {...settings}>
                {images.map(({ id, src, text }) => (
                  <div key={id} className="flex flex-col items-center">
                    <div className="">
                      <img
                        src={src}
                        alt={`Image ${id + 1}`}
                        className="rounded-xl"
                      />
                    </div>
                    <span className="text-justify text-sm sm:text-base lg:text-xl mb-2 mt-6">
                      {text}
                    </span>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Interests;
