import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/CaseyM (5).png";
import classNames from "classnames";

function Navbar({ isVisible }) {
  const navbarClass = classNames("navbar", { visible: isVisible });
  const [menu, setMenu] = useState(false);
  const [animateLinks, setAnimateLinks] = useState(false);

  const links = [
    {
      id: 0,
      link: "Home",
      path: "/",
    },
    {
      id: 1,
      link: "About",
      path: "/",
    },
    {
      id: 2,
      link: "Projects",
      path: "/",
    },
    {
      id: 3,
      link: "Contact",
      path: "/",
    },
  ];

  useEffect(() => {
    if (isVisible) {
      setAnimateLinks(true);
    }
  }, [isVisible]);

  const handleMenuClick = () => {
    setMenu(!menu);
  };

  return (
    <nav className={`bg-transparent z-10 flex justify-between my-auto items-center w-full h-auto py-2 lg:h-auto sm:px-4 text-ice fixed`}>
      <div className="w-full flex items-center">
        <Link to="/" smooth duration={500}>
          <img
            src={logo}
            alt="Casey McArdle"
            className="w-10 lg:w-14 xl:w-16 lg:m-2 cursor-pointer hover:scale-105 duration-300"
          />
        </Link>
      </div>

      <ul className={`text-neutral-50 text-xl mr-16 hidden md:flex`}>
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className={`${navbarClass} inline-block mx-4 relative cursor-pointer capitalize ${
              animateLinks ? "animate-link" : ""
            }`}
            style={{ animationDelay: `${(id + 1) * 0.2}s` }}
          >
            {path === "/" ? (
              <ScrollLink
                to={link}
                smooth
                duration={500}
                className="link-underline link-underline-black"
              >
                {link}
              </ScrollLink>
            ) : (
              <NavLink
                to={path}
                className="link-underline link-underline-black"
                activeClassName="active-link"
              >
                {link}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      <div
        onClick={handleMenuClick}
        className="cursor-pointer text-slate-50 md:hidden"
      >
        {menu ? (
          <FaTimes className="text-ice" size={30} />
        ) : (
          <FaBars className="text-ice" size={30} />
        )}
      </div>

      {menu && (
        <ul className="flex flex-col justify-center items-center absolute top-0 cursor-pointer capitalize left-0 w-full min-h-screen bg-offBlack text-ice">
          {links.map(({ id, link }) => (
            <li key={id} className="cursor-pointer px-3 py-2 capitalize text-3xl">
              <Link onClick={handleMenuClick} to={link} smooth duration={500}>
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
