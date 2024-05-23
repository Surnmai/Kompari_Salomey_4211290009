import React from "react";

// import image
import FlastImg1 from "../img/flats1.jpg";
import FlatsImg from "../img/flats.jpg";
import FlatsBanner from "../img/flatsBanner.jpg";

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

const Flats = () => {
  return (
    <>
      <TopBanner img={FlatsBanner} title="Flats" />
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
            className="max-w-96 max-h-max-w-96 mb-6"
          >
            <SwiperSlide className="rounded-md overflow-hidden">
              <img
                src={FlastImg1}
                alt=""
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md overflow-hidden">
              <img
                src={FlatsImg}
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

export default Flats;
