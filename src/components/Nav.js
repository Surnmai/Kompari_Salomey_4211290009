import React, { useState, useEffect } from "react";

// import data
import { navlinks } from "../data";
import { Link } from "react-router-dom";

// import useGlobalContext
import { useGlobalContext } from "../context";

const Nav = () => {
  const { closeMenuBar, menuRef, portfolioRef } = useGlobalContext();

  // State to manage hover status
  const [hoveredLink, setHoveredLink] = useState(null);

  // react code to close navbar menu on window scroll and click
  useEffect(() => {
    const handleClickOutside = (e) => {
      // console.log(e.target);

      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !(portfolioRef.current && portfolioRef.current.contains(e.target))
      ) {
        closeMenuBar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenuBar, menuRef, portfolioRef]);

  return (
    <>
      <nav ref={menuRef} className="hidden md:flex">
        <ul className="md:flex items-center justify-center md:gap-x-6 capitalize md:text-sm lg:text-xl">
          {navlinks.map((link, index) => {
            const { path, text, sublink } = link;

            return (
              <li
                key={index}
                onMouseEnter={() => setHoveredLink(link.text)}
                onMouseLeave={() => setHoveredLink(null)}

                // ref={text === "portfolio" ? portfolioRef : null} // Apply ref if link is 'Portfolio'
              >
                {sublink ? (
                  <span className="text-white cursor-pointer">{text}</span>
                ) : (
                  <Link className="text-white" to={path}>
                    {text}
                  </Link>
                )}
                {sublink && hoveredLink === text && (
                  <ul className="absolute top-18 right-[6%] pt-1 bg-[#000] shadow-md shadow-slate-950 w-[16%]">
                    {sublink.map((sub, index) => {
                      const { text, path } = sub;
                      return (
                        <li key={index} className="py-1 px-5 hover:underline">
                          <Link className="text-white" to={path}>
                            {text}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
