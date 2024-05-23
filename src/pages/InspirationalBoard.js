import React from "react";

// import image
import InspirationalBoardBanner from "../img/inspirationalBoardBanner.jpg";
import InspirationalBoardImg from "../img/inspirationalBoard.png";

// import Components
import TopBanner from "../components/TopBanner";

const InspirationalBoard = () => {
  return (
    <>
      <TopBanner img={InspirationalBoardBanner} title="Inspirational Board" />
      <section className="section">
        <div className="container mx-auto flex justify-center items-center mb-6">
          <div className="w-[50%] h-[50%] shadow-md shadow-slate-950 rounded-md overflow-hidden">
            <img
              src={InspirationalBoardImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default InspirationalBoard;
