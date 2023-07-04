import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logoClear.png";
import classNames from "classnames";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    {
      id: 0,
      name: "Home",
      path: "Home",
      url: "/",
    },
    {
      id: 1,
      name: "About",
      path: "About",
      url: "/About",
    },
    {
      id: 2,
      name: "Projects",
      path: "Projects",
      url: "/Projects",
    },
    {
      id: 3,
      name: "Contact",
      path: "Contact",
      url: "/Contact",
    },
  ];

  const handleMenuClick = () => {
    setMenu(!menu);
    document.body.style.overflow = menu ? "auto" : "hidden";
  };

  const isHomePage = location.pathname === "/";
  const notHomePage = !isHomePage;

  const handleNavLinkClick = () => {
    setMenu(false);
    document.body.style.overflow = "auto";
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <nav className="bg-transparent z-10 flex justify-between my-auto items-center w-full h-auto py-2 lg:h-auto sm:px-4 text-ice fixed">
      <div className="w-full flex items-center">
        <Link to="/" smooth duration={500} onClick={() => scroll.scrollToTop()}>
          <img
            src={logo}
            alt="Casey McArdle"
            className="w-10 lg:w-14 xl:w-16 lg:m-2 cursor-pointer  duration-300"
          />
        </Link>
      </div>

      {isHomePage && (
        <ul className="text-ice text-xl mr-16 hidden md:flex">
          {links.map(({ id, name, path }) => (
            <li
              key={id}
              className="inline-block mx-4 duration-200 cursor-pointer capitalize"
            >
              <ScrollLink
                to={path}
                smooth
                duration={500}
                onClick={handleNavLinkClick}
                className="link-underline link-underline-black"
              >
                {name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}

      {notHomePage && (
        <ul className="text-ice text-xl items-center justify-center mr-5 md:mr-16 ">
          <li className="inline-block mx-4  duration-200 cursor-pointer capitalize">
            <button
              onClick={handleBackClick}
              className="link-underline link-underline-black"
            >
              Return
            </button>
          </li>
        </ul>
      )}

      {isHomePage && (
        <div
          onClick={handleMenuClick}
          className="cursor-pointer z-10 text-slate-50 md:hidden"
        >
          {menu ? (
            <FaTimes size={30} className="mr-3" />
          ) : (
            <FaBars size={30} className="mr-3" />
          )}
        </div>
      )}

      {menu && (
        <ul className="flex flex-col absolute top-0 left-0 items-center justify-center w-full min-h-screen bg-offBlack text-ice">
          {links.map(({ id, name, path, url }) => (
            <li
              key={id}
              className="cursor-pointer px-3 py-4 capitalize text-4xl hover:scale-105 duration-200"
            >
              {isHomePage ? (
                <ScrollLink
                  to={path}
                  smooth
                  duration={500}
                  onClick={handleNavLinkClick}
                >
                  {name}
                </ScrollLink>
              ) : (
                <NavLink
                  exact
                  to={url}
                  onClick={handleNavLinkClick}
                  activeClassName="text-yellow-400"
                >
                  {name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
