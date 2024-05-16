import React from "react";

// import pictures
import DraftImg from "../img/patterDrafting.jpg";
import DraftImg1 from "../img/patterDrafting1.jpg";
import DraftBanner from "../img/draftingBanner.jpg";

// import Components
import TopBanner from "../components/TopBanner";

const Drafting = () => {
  return (
    <>
      <TopBanner img={DraftBanner} title="Drafting" />
      <section className="section">
        <div className="container mx-auto flex flex-col md:flex-row gap-6 ">
          {/* img 1 */}
          <div className="flex-1 h-[38rem] shadow-md shadow-slate-950 rounded-md overflow-hidden">
            <img src={DraftImg} alt="" className="w-full h-full object-cover" />
          </div>

          {/* img 2 */}
          <div className="flex-1 h-[38rem] shadow-md shadow-slate-950 rounded-md overflow-hidden mb-6">
            <img
              src={DraftImg1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Drafting;
