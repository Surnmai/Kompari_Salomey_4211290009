import React from "react";

// import image
import FabricBoard1 from "../img/fabric board1.jpg";
import FabricBoard from "../img/fabric board.jpg";
import FabricBoardBanner from "../img/fabricboardbanner.jpg";

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

const Fabric_board = () => {
  return (
    <>
      <TopBanner img={FabricBoardBanner} title="Fabric Board" />
      <section className="section">
        <div className="container mx-auto">
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
                src={FabricBoard1}
                alt=""
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md overflow-hidden mb-6">
              <img
                src={FabricBoard}
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

export default Fabric_board;
