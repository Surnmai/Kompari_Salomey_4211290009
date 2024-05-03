import React from "react";

// import icons
import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-5 bg-[#000] text-white">
        <div className="container mx-auto ">
          <div className="md:flex  md:justify-between border-b bg-opacity-75 border-gray-500 pb-7">
            {/* contact  */}
            <div className="">
              <div className="address">
                <p className="font-extrabold text-xl capitalize">address: </p>
                <p>P.O. Box Os 3251, Osabene-Koforidua</p>
                <p>Mile 50 junction</p>
              </div>
              <div className="phone">
                <p className="font-extrabold text-xl capitalize">phone: </p>
                <p>(+233) 0 54 998 8953</p>
              </div>
              <div className="email">
                <p className="font-extrabold text-xl capitalize">email: </p>
                <p className="mail">komparisalome97@gmail.com</p>
              </div>
            </div>

            {/* index number  */}
            <p className="flex gap-2 py-1 font-extrabold text-xl">
              <h3 className="">Index number:</h3>
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
            &copy; {new Date().getFullYear()} Beads and Buttons - All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
