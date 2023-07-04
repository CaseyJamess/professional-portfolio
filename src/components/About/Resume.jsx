import React from "react";

function Resume() {
  return (
    <div className="flex flex-col  w-full min-h-screen justify-center text-ice items-center bg-offBlack">
      {/*
<div className="flex flex-col justify-start items-start xl:flex-row max-w-screen-md xl:py-20 p-4 xl:mx-auto">
  <ul className="flex flex-col bullet-list">
    <h2 className="font-semibold text-neutral-50 text-3xl xl:text-5xl my-8">
      Skills
    </h2>
    <li>
      <div className="ml-4">
        <h3 className="text-xl">Front-End Web Development</h3>
        <div className="flex flex-col text-sm my-3 xl:flex-row items-start xl:items-center justify-start">
         
          <h4 className="bg-midGray text-notBlack px-1 w-auto">Fulltime</h4>
          <h5 className="mt-1 ml-0 xl:ml-2 text-midGray">May 2016 - March 2023</h5>
        </div>
      
        <div className="text-sm leading-relaxed text-justify pr-2">
          <ul className="list-disc list-inside my-4">
            <li>
              Proficient in HTML, CSS, and JavaScript
            </li>
            <li>
              Experience with front-end frameworks/libraries such as React or Vue.js
            </li>
            <li>
              Familiarity with responsive web design and mobile-first development
            </li>
            <li>
              Knowledge of modern web standards and best practices
            </li>
            <li>
              Understanding of user experience (UX) and user interface (UI) design principles
            </li>
            <li>
              Experience with version control systems like Git
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</div>

*/}

      <div className="flex flex-col justify-start items-start xl:flex-row max-w-screen-xl pt-6 pb-10 p-4 xl:mx-auto">
        {/* Experience */}
        <ul className="flex flex-col bullet-list xl:w-1/2 ">
          {/* Title */}
          <h2 className="font-semibold text-neutral-50 text-3xl xl:text-5xl my-8">
            Experience
          </h2>
          <li>
            <div className="ml-4">
              <h3 className="text-xl">Protec Fire Detection plc</h3>
              <div className="flex flex-col text-sm my-3 xl:flex-row items-start xl:items-center justify-start ">
                {/* Position / Year */}
                <h4 className="bg-midGray  text-notBlack px-1 w-auto ">
                  Fulltime{" "}
                </h4>{" "}
                <h5 className=" mt-1 ml-0 xl:ml-2 text-midGray">
                  May 2016 - March 2023
                </h5>
              </div>
              {/* Role/Achievement */}
              <div className="text-sm leading-relaxed text-justify pr-2">
                <p className="my-4">
                  At Protec I worked initially as a technician for a year before
                  progressing as a production Engineer and finally as a Design
                  Engineer
                </p>
                <p className="my-2">
                  When working as a Design Engineer I developed multiple
                  web-based, interactive test interfaces utilising node JS (node
                  serial port) for the back-end, JS, HTML & CSS for the
                  Front-End
                </p>
              </div>
            </div>
          </li>

          <li className="mt-4">
            <div className="ml-4">
              <h3 className="text-xl">Avalon Design</h3>
              <div className="flex flex-col text-sm my-3 xl:flex-row items-start xl:items-center justify-start ">
                {/* Position / Year */}
                <h4 className="bg-midGray text-notBlack px-1 w-auto ">
                  Freelance{" "}
                </h4>{" "}
                <h5 className="mt-1 ml-0 xl:ml-2 text-midGray">March 2022 </h5>
              </div>
              {/* Role/Achievement */}
              <p className="my-2 text-sm leading-relaxed text-justify pr-2">
                Worked remotely for Avalon Design as a PCB Design Engineer,
                redesigned some legacy designs with modern day SMD components,
                to improve component availability, reducing manufacturing time &
                cost, increasing profit margin.
              </p>
            </div>
          </li>

          <li className="mt-4">
            <div className="ml-4">
              <h3 className="text-xl">Safe Energy Systems</h3>
              <div className="flex flex-col text-sm my-3 xl:flex-row items-start xl:items-center justify-start ">
                {/* Position / Year */}
                <h4 className="bg-midGray text-notBlack px-1 w-auto ">
                  Freelance{" "}
                </h4>{" "}
                <h5 className="mt-1 ml-0 xl:ml-2 text-midGray">
                  September - December 2021{" "}
                </h5>
              </div>
              {/* Role/Achievement */}
              <p className="my-2 text-sm leading-relaxed text-justify pr-2">
                Provided support & expertise, integrating new microcontrollers
                to 4-20ma control loop.
              </p>
              <p className="my-2 text-sm leading-relaxed text-justify pr-2">
                Also designed & developed their website using Vanilla JS, HTML5
                & CSS.
              </p>
            </div>
          </li>
          {/*
          <h2 className="font-semibold text-neutral-50 text-3xl xl:text-5xl my-8">
            Skills
          </h2>
          <div>
            <div className="ml-4">
              
              <div className="flex flex-col text-sm my-3 xl:flex-row items-start xl:items-center justify-start">
                <h4 className="bg-midGray mr-2 text-notBlack px-1 w-auto">
                  Fulltime
                </h4>
                <h4 className="bg-midGray mr-2 text-notBlack px-1 w-auto">
                  Fulltime
                </h4>
                <h4 className="bg-midGray text-notBlack px-1 w-auto">
                  Fulltime
                </h4>
                <h5 className="mt-1 ml-0 xl:ml-2 text-midGray">
                  May 2016 - March 2023
                </h5>
              </div>

            </div>
          </div>
                */}
        </ul>

        {/* Education */}
        <ul className="flex flex-col bullet-list xl:w-1/2 xl:pl-20 justify-center">
          {/* Title */}
          <h2 className="font-semibold text-neutral-50 text-3xl xl:text-5xl my-8">
            Education
          </h2>
          <li className="mt-4">
            <div className="ml-4">
              <h3 className="text-xl">
                BEng Electronic & Electrical Engineering{" "}
              </h3>
              <div className="flex flex-col text-sm my-3 xl:flex-row items-start xl:items-center justify-start ">
                {/* Position / Year */}
                <h4 className="bg-midGray text-notBlack px-1 w-auto ">
                  UCLAN{" "}
                </h4>{" "}
                <h5 className="mt-1 ml-0 xl:ml-2 text-midGray">
                  September 2018 - May 2021{" "}
                </h5>
              </div>
              {/* Role/Achievement */}
              <p className="my-2 text-sm leading-relaxed text-justify pr-2">
                I achieved a first class honors degree at UCLAN studying
                Electronics whilst working full time.
              </p>
              <p className="my-2 text-sm leading-relaxed text-justify pr-2">
                Dissertation: An investigation into a Two-Wire Power over Data
                Control System (built the UI with JS, HTML & CSS)
              </p>
            </div>
          </li>

          <li className="mt-4">
            <div className="ml-4">
              <h3 className="text-xl">
                HND Electronic & Electrical Engineering
              </h3>
              <div className="flex flex-col text-sm my-3 xl:flex-row items-start xl:items-center justify-start ">
                {/* Position / Year */}
                <h4 className="bg-midGray text-notBlack px-1 w-auto ">
                  UCLAN{" "}
                </h4>{" "}
                <h5 className="mt-1 ml-0 xl:ml-2 text-midGray">
                  September 2016 - May 2018{" "}
                </h5>
              </div>
              {/* Role/Achievement */}
              <p className="my-2 text-sm leading-relaxed text-justify pr-2">
                I achieved distinction studying for my Higher National Diploma
                in Electronics whilst working full time.
              </p>
              <p className="my-2 text-sm leading-relaxed text-justify pr-2">
                Included a module on C++ programming which gave me a good intro
                to programming!
              </p>
            </div>
          </li>

          <li className="mt-4">
            <div className="ml-4">
              <h3 className="text-xl">Javascript - from beginner to expert</h3>
              <div className="flex flex-col text-sm my-3 xl:flex-row items-start xl:items-center justify-start ">
                {/* Position / Year */}
                <h4 className="bg-midGray text-notBlack px-1 w-auto ">
                  Online Course{" "}
                </h4>{" "}
                <h5 className="mt-1 ml-0 xl:ml-2 text-midGray">June 2020 </h5>
              </div>
              {/* Role/Achievement */}
              <p className="my-2 text-sm leading-relaxed text-justify pr-2">
                An online course from UDEMY that gave me a solid grasp of JS
              </p>
            </div>
          </li>

          <li className="mt-4">
            <div className="ml-4">
              <h3 className="text-xl">Meta Front-End Developer</h3>
              <div className="flex flex-col text-sm my-3 xl:flex-row items-start xl:items-center justify-start ">
                {/* Position / Year */}
                <h4 className="bg-midGray text-notBlack px-1 w-auto ">
                  Online Course{" "}
                </h4>{" "}
                <h5 className="mt-1 ml-0 xl:ml-2 text-midGray">March 2023 </h5>
              </div>
              {/* Role/Achievement */}
              <p className="my-2 text-sm leading-relaxed text-justify pr-2">
                An online course provided by Coursera to learn indepth the
                technologies involved in modern web development
              </p>
              <p className="my-2 text-sm leading-relaxed text-justify pr-2">
                Gave me a solid grasp and understanting of React, the virtual
                dom & managing state with props & hooks
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
