import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const links = [
    {
      id: 0,
      link: "home",
    },
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "interests",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <nav className="bg-neutral-950 z-10 flex justify-between my-auto items-center w-full h-8 py-2 md:h-16 sm:px-4 text-slate-50 fixed">
      <div className="text-lg font-signature font-bold ml-2 sm:text-2xl lg:text-4xl">
        Casey McArdle
      </div>

      <ul className="text-gray-300 text-base mr-16 hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="inline-block mx-4 hover:text-yellow-400 hover:scale-105 duration-200 cursor-pointer capitalize"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setMenu(!menu)}
        className="cursor-pointer z-10 text-slate-50 md:hidden"
      >
        {menu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {menu && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  bg-gradient-to-b from-neutral-950 to-gray-800 text-slate-50">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer px-3 py-2 capitalize text-3xl hover:text-yellow-400 hover:scale-105 duration-200"
            >
              <Link
                onClick={() => setMenu(!menu)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
