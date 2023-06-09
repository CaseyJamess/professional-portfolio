import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="min-h-screen w-full bg-gradient-to-b from-neutral-950 to-gray-800 text-slate-50 flex justify-center items-center overflow-y-scroll"
    >
      <div className="flex flex-col p-4 my-10 justify-center max-w-screen-lg mx-auto w-full">
        <div className="my-2">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-slate-50">
            Contact
          </p>

          <div className="mt-4 text-sm md:text-base justify-center items-center text-justify">
            <p className="mb-2">
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
            className="flex flex-col w-full md:w-full"
          >
            <div className="flex flex-col md:flex-row w-full">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent w-full border-2 rounded-md text-slate-50 focus:outline-none my-2 md:my-0 md:mr-2"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="p-2 bg-transparent w-full border-2 rounded-md text-slate-50 focus:outline-none"
              />
            </div>
            <div className="flex justify-center w-full">
              <textarea
                name="message"
                rows="10"
                placeholder="Enter your message..."
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-slate-50 mt-2 w-full"
              ></textarea>
            </div>

            <button className="text-slate-50 mb-24 sm:mb-0 bg-gradient-to-b from-cyan-400 to-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
