import React from "react";

// import picture
import ColorPalleteImg from "../img/color pallete.jpg";
import ColorPaletteBanner from "../img/color pallete banner.jpg";

// import Components
import TopBanner from "../components/TopBanner";

const Color_Palette = () => {
  return (
    <>
      <TopBanner img={ColorPaletteBanner} title="Color Palette" />
      <section className="section">
        <div className="container mx-auto flex justify-center items-center mb-6">
          <div className="w-[70%] h-[70%]  rounded-md overflow-hidden">
            <img
              src={ColorPalleteImg}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Color_Palette;
