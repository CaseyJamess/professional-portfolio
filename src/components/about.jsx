import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="min-h-screen w-full flex bg-gradient-to-b from-neutral-950 to-gray-800 text-slate-50 justify-center items-center overflow-y-scroll"
    >
      <div className="flex flex-col p-4 my-10 justify-center text-justify max-w-screen-lg mx-auto h-full">
        <div className="mb-4">
          <h2 className="text-2xl sm:text-4xl font-bold inline border-b-4 border-slate-50">
            About
          </h2>
        </div>
        <div className=" text-xs sm:text-base">
          <div className="text-justify text-sm md:text-base lg:text-base">
            <p className="mb-4 mt-2">
              Hello, I'm Casey, a dedicated software developer with a strong
              background in Electronic Engineering. I hold a first-class BEng
              degree and boast seven years of experience in Engineering,
              specialising in production and design
            </p>

            <p className="mb-4">
              Alongside my successful engineering career, I have continuously
              expanded my skills in software development. Through exploration of
              various programming languages and frameworks, I have developed a
              solid technical foundation
            </p>

            <p className="mb-4">
              My true passion lies in front-end development, where I bring
              together my problem solving & technical abilities to create
              innovative solutions. My goal is to become a well-rounded
              full-stack developer, leveraging my knowledge to deliver
              exceptional applications
            </p>

            <p className="mb-4">
              My passion for web development ignited when I was entrusted with
              the crucial task of redesigning the entire test procedure at
              Protec Fire Detection, where manufactured products undergo PAT
              testing and programming. Leveraging cutting-edge web technologies,
              I meticulously crafted user-friendly interfaces that
              revolutionized the compliance/PAT testing and programming
              processes. These interfaces streamlined the testing and
              programming of manufactured products, resulting in remarkable
              improvements in efficiency and reduced lead times.
            </p>

            <p className="mb-4">
              Crafting intuitive and inclusive digital solutions is my primary
              focus. I am motivated by collaborative endeavors, working with
              teams on exciting projects to deliver outstanding digital
              experiences
            </p>

            <p className="mb-4">
              Feel free to check out my GitHub repositories - I would be
              delighted to discuss new opportunities in software development.
              Let's connect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
