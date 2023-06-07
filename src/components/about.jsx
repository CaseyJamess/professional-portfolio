import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-neutral-950 to-gray-800 text-slate-50"
    >
      <div className="flex flex-col p-4 justify-center text-justify max-w-screen-lg mx-auto h-full">
        <div className="pb-4 mt-5 md:mt-10">
          <h2 className="text-2xl sm:text-4xl font-bold inline border-b-4 border-slate-50">
            About
          </h2>
        </div>
        <div className=" text-xs sm:text-base">
          <div className="justify-center items-center text-justify text-xs md:text-base lg:text-base ">
            <p className="mb-4 mt-2">
              I'm Casey, a software developer with a background in Electronic
              Engineering. Graduating with a first-class BEng degree, I have
              seven years of experience in engineering, specialising in
              production and design
            </p>

            <p className="mb-4">
              Alongside my engineering career, I've honed my software
              development skills, exploring various languages and frameworks.
              With a strong technical foundation from my electronics background,
              I'm well-equipped to excel in software development
            </p>
            <p className="mb-4">
              Transitioning into front-end development excites me as I leverage
              my knowledge and passion. I aim to become a full-stack developer,
              combining electronics and software expertise for innovative
              solutions
            </p>
            <p className="mb-4">
              My interest in web development sparked during my involvement in
              redesigning the test procedure at Protec Fire Detection. Using
              modern web technologies, I created interactive user interfaces for
              compliance/PAT testing, optimising lead times.
            </p>

            <p className="mb-4">
              Creating user-friendly interfaces is my passion. I focus on
              usability and accessibility to ensure intuitive and inclusive
              digital solutions. I also look forward to collaborating on
              exciting projects, where together we can create remarkable digital
              experiences
            </p>

            <p className="mb-4">
              Connect with me, explore my GitHub repositories, and discover my
              work. I'm enthusiastic about showcasing my skills and finding new
              opportunities in software development. Let's connect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
