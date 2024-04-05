import React from "react";

// import GlobalContext
import { useGlobalContext } from "../../context";

// import data
import { navlinks } from "../../data";

import { Link } from "react-router-dom";

const Navmobile = () => {
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
        }  md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all bg-white shadow-xl shadow-slate-500 z-50`}
      >
        <ul className="w-full h-full flex flex-col px-4 pt-7 gap-y-2">
          {navlinks.map((link, index) => {
            const { path, text } = link;

            return (
              <li key={index}>
                <Link
                  path={path}
                  className="cursor-pointer capitalize font-medium"
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navmobile;
