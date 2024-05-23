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
          <div className="flex flex-col md:flex-row gap-16">
            {" "}
            {/* img1  */}
            <div className="mb-8 flex-1 shadow-md shadow-slate-950 rounded-md overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={PatternChartsImg}
                alt="PatternChat"
              />
              {/* img2  */}
            </div>
            <div className="mb-8 flex-1 shadow-md shadow-slate-950 rounded-md overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={PatternChartsImg1}
                alt="PatternChat"
              />
            </div>
          </div>

          {/* content  */}
          <div className="text-center text-xl mb-6">
            <h1 className="uppercase font-bold text-4xl mb-2">
              sewing instructions
            </h1>
            {/* list  */}
            <div className="mb-4">
              <ul className="">
                <li>Sew 1/2" at all seams</li>
                <li>Hem bottom of shirts and pants </li>
                <li>Sew 1/2" side seams </li>
                <li>Sew 1/2" of sleeves to arm holes </li>
                <li>Sew 1/2" cuffs to sleeves </li>
                <li>Sew 1/2" around waist band and pants waist together </li>
                <li>
                  Set zipper at centre of th pant with an overlap and a button
                </li>
                <li>Set belt loops on the waist band match.</li>
              </ul>
            </div>
            <p className="flex gap-x-2 items-center justify-center font-medium">
              Sizes: <article className="font-normal">UK 12</article>
            </p>
            <p className="flex gap-x-2  items-center justify-center font-medium mb-4">
              Zipper:{" "}
              <article className="font-normal">
                2 Pieces, 8inches nylon(white)
              </article>
            </p>

            <h1 className="uppercase font-bold text-4xl mb-2">
              Care instructions
            </h1>
            <p>
              Wash, dry in any temperature and iron in any suitable temperature.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pattern_Charts;
