import React from "react";
// import image
import CostsheetBanner from "../img/costsheetBanner.jpg";

// import Components
import TopBanner from "../components/TopBanner";

const Cost_sheet = () => {
  return (
    <>
      <TopBanner img={CostsheetBanner} title="Cost Sheet" />
      <section className="section">
        <div className="container mx-auto text-center text-xl">
          {/* general information  */}
          <div>
            <h1 className="font-bold text-4xl uppercase">
              general information
            </h1>
            {/* sub title  */}
            <div>
              <h3 className="capitalize font-bold text-2xl">marker</h3>

              <div className="flex items-center justify-center gap-x-2 capitalize">
                <p className="font-bold ">fabric:</p>
                <span>white grandpa fabric</span>
              </div>
              <div className="flex items-center justify-center gap-x-2 capitalize">
                <p className="font-bold ">Design:</p>
                <span>blue grandpa fabric</span>
              </div>
            </div>

            <div>
              <h3 className="capitalize font-bold text-2xl">length</h3>
              <p>36"</p>
            </div>

            <div className="mb-3">
              <h3 className="capitalize font-bold text-2xl">yards</h3>
              <p>4</p>
            </div>
          </div>

          {/* fabric information */}
          <div>
            <h1 className="font-bold text-4xl uppercase">fabric information</h1>
            {/* text  */}
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">resource: </p>
              <article>Fabrics hub</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">pattern: </p>
              <article>shirt and trouser block </article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">width: </p>
              <article>50"</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">prices: </p>
              <article>60.00 per yard</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">content: </p>
              <article>cotton, wool</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">colors: </p>
              <article>white blue</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize mb-4">
              <p className="font-bold ">sales person: </p>
              <article>mama vee</article>
            </div>
          </div>

          {/* style information */}
          <div>
            <h1 className="font-bold text-4xl uppercase">style information</h1>
            {/* text  */}
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">style: </p>
              <article>classic trouser and short sleeves shirt</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">prices: </p>
              <article> 350.00</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">date: </p>
              <article>20/05/2024</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">sizes: </p>
              <article>UK |12| </article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize mb-8">
              <p className="font-bold ">colors: </p>
              <article>white blue</article>
            </div>
          </div>

          {/* trimmings  */}
          <div>
            <h1 className="font-bold text-4xl uppercase mb-2">trimmings</h1>
            <div className="md:grid grid-cols-3">
              <div className="capitalize">
                <h1 className="uppercase font-bold mb-2">materials estimate</h1>
                <div>
                  <p>White grandpa fabric 4yards</p>
                  <p>Blue grandpa fabric 1yard</p>
                  <p>Zippers 2</p>
                  <p>Buttons 1pack </p>
                </div>
              </div>

              <div className="capitalize">
                <h1 className="uppercase font-bold mb-2">Actual price</h1>
                <div>
                  <p>60.00</p>
                  <p>60</p>
                  <p>10.00</p>
                  <p>30.00</p>
                </div>
              </div>

              <div className="capitalize">
                <h1 className="uppercase font-bold mb-2">amount</h1>
                <div>
                  <p>240.00</p>
                  <p>60.00</p>
                  <p>20.00</p>
                  <p>30.00</p>
                </div>
              </div>
            </div>
          </div>
          {/* total cost  */}
          <div className="md:flex gap-[26.4rem] px-[5.5rem] capitalize font-bold mb-6">
            <h1>total cost</h1>
            <p>350.00</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cost_sheet;
