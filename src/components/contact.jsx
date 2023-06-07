import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="h-screen w-full bg-gradient-to-b from-neutral-950 to-gray-800 text-slate-50"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="mt-24 md:mt-4 lg:mt-0">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-slate-50 ">
            Contact
          </p>

          <div className=" mt-4 text-sm md:text-base justify-center items-center text-justify ">
            <p className="mb-4">
              I'm interested in full-time as well as free-lance opportunities
            </p>
            <p className="mb-4">
              Please contact me using your preferred medium and I will reply
              ASAP!
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/d9a89001-e395-4070-8f6c-b03449f9e8a3"
            method="POST"
            className="flex flex-col  w-full md:w-full"
          >
            <div className="flex flex-col flex-grow w-full md:w-full md:flex-row mx-auto">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-slate-50 focus:outline-none my-2 md:my-0 mr-0 md:mr-2 md:w-1/2 "
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="p-2 bg-transparent border-2 rounded-md text-slate-50 focus:outline-none md:w-1/2"
              />
            </div>
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message..."
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-slate-50 mt-2"
            ></textarea>

            <button className="text-slate-50 mb-24 sm:mb-0 bg-gradient-to-b from-cyan-400 to-blue-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
