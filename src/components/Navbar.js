import React from "react";

// import Logo
import Logo from "../img/logo.png";

// import data
import { navlinks } from "../data";

// import icons
import { FaBars, FaTimes } from "react-icons/fa";

// import useGlobalContext
import { useGlobalContext } from "../context";

// import Link
import { Link } from "react-router-dom";

// import Component
import Nav from "./Nav";
import NavMobile from "./Navmobile";

const Navbar = () => {
  const { bg, mobileNav, setMobileNav, closeMenuBar } = useGlobalContext();

  return (
    <>
      <>
        <header className="bg-[#000000] shadow-md shadow-slate-950  fixed w-full left-0 py-4 z-10 transition-all duration-200">
          <div className="container mx-auto flex justify-between items-center">
            {/* logo  */}
            <Link to={navlinks[0].path}>
              <img
                src={Logo}
                alt="Logo"
                className="h-10 w-10 md:h-16 md:w-16 cursor-pointer font-medium"
              />
            </Link>

            {/* Nav  */}
            <Nav />

            {/* menu icon */}
            <div
              onClick={() => setMobileNav(!mobileNav)}
              className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
            >
              {mobileNav ? <FaTimes /> : <FaBars />}
            </div>
            {/* <div
              className="text-xl text-white md:hidden lg:text-3xl cursor-pointer"
              onClick={() => setMobileNav(!mobileNav)}
            >
              <ion-icon name={`${mobileNav ? "menu" : "close"}`}></ion-icon>
            </div> */}

            {/* Nav Mobile  */}
            <NavMobile />
          </div>
        </header>
      </>
    </>
  );
};

export default Navbar;
