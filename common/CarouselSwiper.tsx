import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const CarouselSwiper: React.FunctionComponent = () => {
  const slides = [];

  for (let i = 1; i <= 4; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <Image
          alt={"slice" + i}
          width="1200"
          height="600"
          className="rounded-md"
          src={"/static/aurora" + (i == 0 ? "" : i) + ".jpg"}
        />
      </SwiperSlide>
    );
  }

  return (
    <>
      <Swiper
        className="w-[1200px]"
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to: ", swiper.activeIndex);
        }}
        onReachEnd={() => console.log("Swiper end reached")}
      >
        {slides}
      </Swiper>
    </>
  );
};

export default CarouselSwiper;
