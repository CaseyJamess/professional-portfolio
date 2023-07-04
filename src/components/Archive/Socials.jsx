import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import myCV from "../assets/CaseyMcArdleCV.pdf";

const links = [
  {
    id: 0,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/casey-mcardle/",
    style: "rounded-tr-md",
  },
  {
    id: 1,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/CaseyJamess",
  },
  {
    id: 2,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:caseyjamesmcardle@gmail.com",
  },
  {
    id: 3,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: myCV,
    style: "rounded-br-md",
    download: true,
  },
];

const Socials = () => {
  return (
    <div className="hidden xl:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-1000" +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download ? "" : undefined}
              rel="noopener noreferrer"
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
