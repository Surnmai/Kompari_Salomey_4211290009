import React from "react";

// import Images
import PatternChartsBannerImg from "../img/pattern-chartsBanner.jpg";
import PatternChartsImg from "../img/patternCharts.jpg";
import PatternChartsImg1 from "../img/patternCharts1.jpg";

// import Components
import TopBanner from "../components/TopBanner";

const Pattern_Charts = () => {
  return (
    <>
      <TopBanner title="Pattern Charts" img={PatternChartsBannerImg} />
      <section className="section">
        <div className="container mx-auto">
          {/* Images  */}
          <div className="md:flex flex-wrap gap-16">
            {" "}
            {/* img1  */}
            <div className="my-8 flex-1 shadow-md shadow-slate-950">
              <img
                className="w-full h-full object-cover"
                src={PatternChartsImg}
                alt="PatternChat"
              />
              {/* img2  */}
            </div>
            <div className="my-8 flex-1 shadow-md shadow-slate-950">
              <img
                className="w-full h-full object-cover"
                src={PatternChartsImg1}
                alt="PatternChat"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pattern_Charts;
