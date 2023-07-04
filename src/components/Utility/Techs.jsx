import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import myCV from "../../assets/CaseyMcArdleCV.pdf";


  export const links = [
    {
      id: 0,
      child: (
        <>
          <FaLinkedin size={35} />
        </>
      ),
      href: "https://www.linkedin.com/in/casey-mcardle/",
      style: "rounded-tr-md",
    },
    {
      id: 1,
      child: (
        <>
          <FaGithub size={35} />
        </>
      ),
      href: "https://github.com/CaseyJamess",
    },
    {
      id: 2,
      child: (
        <>
          <HiOutlineMail size={35} />
        </>
      ),
      href: "mailto:caseyjamesmcardle@gmail.com",
    },
/*
    {
      id: 3,
      child: (
        <>
          <BsFillPersonLinesFill size={42} />
        </>
      ),
      href: myCV,
      download: true,
    },
    */
  ];