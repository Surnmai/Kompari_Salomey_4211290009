import React from "react";

// import image
import FabricCutting from "../img/FabricCutting.jpg";
import FabricCutting1 from "../img/FabricCutting1.jpg";
import FabricCutting2 from "../img/FabricCutting2.jpg";
import FabricCutBanner from "../img/FabricCuttingBanner.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

// import Component
import TopBanner from "../components/TopBanner";

const Cutting_of_fabrics = () => {
  return (
    <>
      <TopBanner img={FabricCutBanner} title="Cutting of Fabric" />
      <section className="section">
        <div className="container mx-auto">
          {" "}
          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={30}
            // centeredSlides={true}
            autoplay={
              (true,
              {
                delay: 4500,
                disableOnInteraction: false,
              })
            }
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className="max-w-96 max-h-max-w-96"
          >
            <SwiperSlide className="rounded-md overflow-hidden">
              <img
                src={FabricCutting}
                alt=""
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md overflow-hidden">
              <img
                src={FabricCutting1}
                alt=""
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md overflow-hidden mb-6">
              <img
                src={FabricCutting2}
                alt=""
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Cutting_of_fabrics;
