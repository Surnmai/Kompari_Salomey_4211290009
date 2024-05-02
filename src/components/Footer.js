import React from "react";

// import icons
import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-5 bg-slate-800 text-white">
        <div className="container mx-auto ">
          <div className="md:flex md:items-center md:justify-between border-b bg-opacity-75 border-gray-500 pb-7">
            {/* index number  */}
            <p className="flex gap-1 py-1">
              <h3>Index number:</h3>
              <span>4211290009</span>
            </p>

            {/* socials  */}
            <div className="flex gap-2 text-2xl py-1">
              <Link to="https://web.facebook.com/" target="_blank">
                <FaFacebookSquare className="social-icons" />
              </Link>
              <Link to="https://www.instagram.com/" target="_blank">
                <FaInstagramSquare className="social-icons" />
              </Link>
              <Link to="https://www.linkedin.com/" target="_blank">
                <FaTiktok className="social-icons" />
              </Link>
            </div>
          </div>

          {/* copyright  */}
          <p className="copyright py-1 text-center">
            &copy; {new Date().getFullYear()} Beads and Button - All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
