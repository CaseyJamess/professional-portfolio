import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleNameFocus = () => {
    setNameFocus(true);
  };

  const handleNameBlur = () => {
    setNameFocus(false);
  };

  const handleEmailFocus = () => {
    setEmailFocus(true);
  };

  const handleEmailBlur = () => {
    setEmailFocus(false);
  };

  const handleMessageFocus = () => {
    setMessageFocus(true);
  };

  const handleMessageBlur = () => {
    setMessageFocus(false);
  };

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessageValue(event.target.value);
  };

  const mailMe = () => {
    window.location.href = "mailto:caseyjamesmcardle@gmail.com";
  };

  return (
    <div
      name="Contact"
      className="min-h-screen w-full bg-black text-ice text-neutral-50"
    >
      <div className="flex flex-col min-h-screen max-w-screen-xl px-4 mx-5 xl:mx-auto">
        <div className="flex-col lg:flex-row justify-around">
          <div className="h-24 text-2xl md:text-3xl xl:text-4xl font-medium uppercase my-24 tracking-widest">
            <h2>C O N T A C T</h2>
            <h2>C O N T A C</h2>
            <h2>C O N T A</h2>
            <h2>C O N T</h2>
            <h2>C O N</h2>
            <h2>C O</h2>
            <h2>C</h2>
          </div>
        </div>

        {/*contact form*/}
        <div
          id="contactForm"
          className="flex flex-col items-center mt-16 justify-center"
        >
          <div className="flex flex-col text-base mb-10 md:flex-row ">
            <div className="mb-2 md:mb-0 flex-row justify-center items-center inline-flex">
            <FaEnvelope className="mr-2 text-hLink" />{" "}
            <p className="mr-4">caseyjamesmcardle@gmail.com</p>
            </div>
            <div className="flex-row justify-center items-center inline-flex">
            <FaPhone className="mr-2 text-hLink" />
            <p className="mb-0">+447897804208</p>
            </div>
          </div>

          <div className=" mb-14">
            <p className="mb-2 text-lg">
              Thanks for checking out my page - I'd love to hear from you!
            </p>
            <p className="mb-2 text-lg">
              Either drop me a message below or{" "}
              <button
                className="font-extrabold text-hLink hover:underline "
                onClick={mailMe}
              >
                click here
              </button>{" "}
              to send me an e-mail
            </p>
          </div>
          <form
            action="https://getform.io/f/d9a89001-e395-4070-8f6c-b03449f9e8a3"
            method="POST"
            className=""
          >
            <div className="flex flex-col">
              <div
                className={`input-group relative ${
                  nameFocus || nameValue ? "focused" : ""
                } transition-all duration-300`}
              >
                <label
                  htmlFor="name"
                  className={`placeholder-label ${
                    nameFocus || nameValue ? "top-0" : "top-1.5rem"
                  } left-0 pointer-events-none transition-all duration-300 opacity-50`}
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={nameValue}
                  onChange={handleNameChange}
                  onFocus={handleNameFocus}
                  onBlur={handleNameBlur}
                  className="p-4 bg-transparent text-neutral-50 outline-none border-none border-b-2 border-neutral-600 transition-all duration-300 focus:border-green-400"
                />
              </div>
              <div
                className={`input-group relative ${
                  emailFocus || emailValue ? "focused" : ""
                } transition-all duration-300`}
              >
                <label
                  htmlFor="email"
                  className={`placeholder-label ${
                    emailFocus || emailValue ? "top-0" : "top-1.5rem"
                  } left-0 pointer-events-none transition-all duration-300 opacity-50`}
                >
                  Email*
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={emailValue}
                  onChange={handleEmailChange}
                  onFocus={handleEmailFocus}
                  onBlur={handleEmailBlur}
                  className="p-4 bg-transparent text-neutral-50 outline-none border-none border-b-2 border-neutral-600 transition-all duration-300 focus:border-green-400"
                />
              </div>
              <div
                className={`input-group relative ${
                  messageFocus || messageValue ? "focused" : ""
                } transition-all duration-300`}
              >
                <label
                  htmlFor="message"
                  className={`placeholder-label ${
                    messageFocus || messageValue ? "top-0" : "top-1.5rem"
                  } left-0 pointer-events-none transition-all duration-300 opacity-50`}
                >
                  Enter your message...
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="10"
                  value={messageValue}
                  onChange={handleMessageChange}
                  onFocus={handleMessageFocus}
                  onBlur={handleMessageBlur}
                  className={`p-4 bg-transparent text-neutral-50 outline-none border-none border-b-2 border-neutral-600 transition-all duration-300 focus:border-green-400 ${
                    messageValue ? "green-border" : ""
                  }`}
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center items-center  my-2">
              <button
                type="submit"
                className={`text-neutral-50  border px-6 p-2 my-4 md:my-8  text-lg relative overflow-hidden rounded-sm hover:text-notBlack hover:bg-ice duration-300  
                }`}
              >
                <span className="relative ">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
