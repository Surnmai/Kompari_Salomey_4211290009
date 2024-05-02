import React, { useState } from "react";

// import data
import { navlinks } from "../data";
import { Link } from "react-router-dom";

// import useGlobalContext
// import { useGlobalContext } from "../../context";

const Nav = () => {
  // const { closeMenuBar, menuRef } = useGlobalContext();

  // State to manage hover status
  const [hoveredLink, setHoveredLink] = useState(null);

  // react code to close navbar menu on window scroll and click
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     // console.log(e.target);
  //     if (menuRef.current && !menuRef.current.contains(e.target)) {
  //       closeMenuBar();
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [closeMenuBar, menuRef]);

  return (
    <>
      <nav className="hidden md:flex">
        <ul className="md:flex items-center justify-center md:gap-x-6 capitalize md:text-sm lg:text-xl">
          {navlinks.map((link, index) => {
            const { path, text, sublink } = link;

            return (
              <li
                key={index}
                onMouseEnter={() => setHoveredLink(link.text)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  // onClick={() => closeMenuBar()}
                  to={path}
                  className="text-white cursor-pointer hover:underline"
                >
                  {text}

                  {/* SubMenu / Dropdown */}
                  {/* If the sublink property exist in the LINK object then compare the values of the HOVEREDLINK State and that of TEXT from the LINK object when hovered over, if both are true then show the dropdown */}
                  {sublink && hoveredLink === text && (
                    <ul className="absolute top-18 right-28 pt-1 bg-[#000] w-[15%]">
                      {sublink.map((sub, index) => {
                        const { text, path } = sub;
                        return (
                          <li key={index} className="py-1 px-5 hover:underline">
                            <Link to={path}>{text}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
