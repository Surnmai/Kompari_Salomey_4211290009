import React from "react";

// import icons
import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-5 bg-slate-800 text-white">
        <div className="container mx-auto md:flex md:items-center md:justify-between">
          {/* copyright  */}
          <p className="copyright py-1">
            &copy; {new Date().getFullYear()} Beads and Button
          </p>

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
      </footer>
    </>
  );
};

export default Footer;
