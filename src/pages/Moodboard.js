import React from "react";

// import picture
import MoodboardImg from "../img/moodboard.jpg";

const Moodboard = () => {
  return (
    <>
      <section className="section">
        <div className="container mx-auto">
          <img src={MoodboardImg} alt="" />
        </div>
      </section>
    </>
  );
};

export default Moodboard;
