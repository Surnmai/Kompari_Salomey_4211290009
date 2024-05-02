import React, { useState } from "react";

// import GlobalContext
import { useGlobalContext } from "../context";

// import data
import { navlinks } from "../data";

import { Link } from "react-router-dom";

const Navmobile = () => {
  // State to manage hover status
  const [hoveredLink, setHoveredLink] = useState(null);

  const { mobileNav } = useGlobalContext();
  return (
    <>
      {/* <div
        className={`${
          mobileNav ? "left-0" : "-left-full"
        } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all bg-white shadow-2xl`}
      >
        <div className="w-full h-full"></div>
      </div> */}

      <nav
        className={`${
          mobileNav ? "left-0" : "-left-full"
        }  md:hidden fixed bottom-0 top-0 w-full max-w-xs h-screen transition-all bg-[#fff] shadow-xl shadow-slate-900 z-50`}
      >
        <ul className="w-full h-auto flex flex-col px-4 pt-8 gap-y-2 overflow-y-scroll">
          {navlinks.map((link, index) => {
            const { path, text, sublink } = link;

            return (
              <li
                key={index}
                onClick={() => setHoveredLink(link.text)}
                // onMouseLeave={() => setHoveredLink(null)}
                className="border-b m-1 cursor-pointer capitalize font-medium"
              >
                {sublink ? (
                  <span className="text-[#000] cursor-pointer">{text}</span>
                ) : (
                  <Link className="text-[#000]" to={path}>
                    {" "}
                    {text}
                  </Link>
                )}
                {sublink && hoveredLink === text && (
                  <ul className="">
                    {sublink.map((sub, index) => {
                      const { text, path } = sub;
                      return (
                        <li key={index} className="px-4 py-1 border-b">
                          <Link className="text-[#000]" to={path}>
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

export default Navmobile;
