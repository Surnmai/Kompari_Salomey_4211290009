import React from "react";

const TopBanner = ({ img, title }) => {
  return (
    <>
      <section className="h-[40vh] p-0 relative brightness-[40%] flex items-center justify-center">
        <img
          src={img}
          alt={title}
          className="h-[20vh] md:h-[40vh] w-full object-cover"
        />

        <div className="absolute text-white  z-50 top-[50%]  font-bold text-xl md:text-7xl">
          <h4>{title}</h4>
        </div>
      </section>
    </>
  );
};

export default TopBanner;
