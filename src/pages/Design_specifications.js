import React from "react";

// import Component
import TopBanner from "../components/TopBanner";

// import image
import DesignSpecBanner from "../img/designspecificBanner.jpg";

const Design_specifications = () => {
  return (
    <>
      <TopBanner img={DesignSpecBanner} title="Design Specification" />
      <section className="section">
        <div className="container mx-auto text-center text-xl">
          {/* title  */}
          <h1 className="uppercase font-bold text-4xl mb-8">
            garment description
          </h1>
          {/* content 1 */}
          <div className="mb-6">
            <div className="mb-6">
              <h1 className="uppercase font-bold text-2xl ">shirt</h1>
              <p>
                Short sleeve shirt with opening at the shoulder seam. A simple
                but elegant style with blue strip of grandpa fabric as design in
                front of the shirt. Assembled together with 2 yards of grandpa
                fabric
              </p>
            </div>
            <div>
              <h1 className="uppercase font-bold text-2xl ">pants (trouser)</h1>
              <p>
                Pant is made from grandpa fabric with a turn up hem, a band,
                belt loops, zipper, button and button holes opening at the
                centre front of the pant. Assembled together with 2 yards of
                grandpa fabric.
              </p>
            </div>
          </div>

          {/* content 2 */}
          <div>
            <div className="flex justify-center items-center gap-x-2">
              <p className="font-bold">Collection Name:</p>
              <article>women wear</article>
            </div>
            <div className="flex justify-center items-center gap-x-2">
              <p className="font-bold">Style Name/Number:</p>
              <article>Elegant looks 23.</article>
            </div>
            <div className="flex justify-center items-center gap-x-2">
              <p className="font-bold">Researcher:</p>
              <article>Kompari salomey</article>
            </div>
            <div className="flex justify-center items-center gap-x-2">
              <p className="font-bold">Designer:</p>
              <article>Kompari salomey</article>
            </div>
            <div className="flex justify-center items-center gap-x-2">
              <p className="font-bold">Machinist:</p>
              <article>Kompari salomey</article>
            </div>
            <div className="flex justify-center items-center gap-x-2">
              <p className="font-bold">Pattern maker:</p>
              <article>Kompari salomey</article>
            </div>
            <div className="flex justify-center items-center gap-x-2">
              <p className="font-bold">size:</p>
              <article>10-12</article>
            </div>
            <div className="mb-6">
              <p className="font-bold">Measurement:</p>
              <article>Bust</article>
              <article>Across back </article>
              <article>Shirt length </article>
              <article>Sleeve length </article>
              <article>Around sleeve </article>
              <article>Around sleeve </article>
              <article>Waist </article>
              <article>Thigh </article>
              <article>Trouser length </article>
            </div>
          </div>

          {/* bottom  */}
          <div className="mb-6">
            <div className="flex justify-center items-center gap-x-2">
              <p className="font-bold">Year of Manufacture:</p>
              <article>2024</article>
            </div>
            <div className="flex justify-center items-center gap-x-2">
              <p className="font-bold">Division:</p>
              <article>Aamusted- Kumasi </article>
            </div>
            <div className="flex justify-center gap-x-2">
              <p className="font-bold">Department: </p>
              <article> Fashion and Textiles Design Education</article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Design_specifications;
