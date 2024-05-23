import React from "react";

// import picture
import MoodboardImg from "../img/moodboard.jpg";
import MoodBanner from "../img/moodboardbanner.jpg";

// import Components
import TopBanner from "../components/TopBanner";

const Moodboard = () => {
  return (
    <>
      <TopBanner img={MoodBanner} title="Moodboard" />
      <section className="section">
        <div className="container mx-auto flex justify-center items-center mb-6">
          <div className="w-[70%] h-[70%] shadow-md shadow-slate-950 rounded-md overflow-hidden">
            <img
              src={MoodboardImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Moodboard;
