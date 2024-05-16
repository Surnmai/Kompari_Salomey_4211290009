import React from "react";

// import pictures
import FinalImg from "../img/FinalWork.jpg";
import FinalImg1 from "../img/FinalWork1.jpg";
import FinalBanner from "../img/finalBanner.jpg";

// import Components
import TopBanner from "../components/TopBanner";

const Final_work = () => {
  return (
    <>
      <TopBanner img={FinalBanner} title="Final Work" />
      <section className="section">
        <div className="container mx-auto flex flex-col md:flex-row gap-6 ">
          {/* img 1 */}
          <div className="flex-1 h-[38rem] shadow-md shadow-slate-950 rounded-md overflow-hidden">
            <img src={FinalImg} alt="" className="w-full h-full object-cover" />
          </div>

          {/* img 2 */}
          <div className="flex-1 h-[38rem] shadow-md shadow-slate-950 rounded-md overflow-hidden mb-6">
            <img
              src={FinalImg1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Final_work;
