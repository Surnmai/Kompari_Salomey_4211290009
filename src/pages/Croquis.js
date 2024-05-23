import React from "react";

// import picture
import CroquisBanner from "../img/croquisBanner.jpg";
import CroquisImg from "../img/corquis.jpg";

// import Components
import TopBanner from "../components/TopBanner";

const Croquis = () => {
  return (
    <>
      <TopBanner img={CroquisBanner} title="Croquis" />
      <section className="section">
        <div className="container mx-auto flex justify-center items-center mb-6">
          <div className="w-[30rem] shadow-md shadow-slate-950 rounded-md overflow-hidden">
            <img
              src={CroquisImg}
              alt=""
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Croquis;
