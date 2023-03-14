import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Center, Image } from "@chakra-ui/react";
import image from "../../Assets/bsit.jpg";
import image2 from "../../Assets/ccs.jpg";

function Gallery(props) {
  return (
    <Center>
      <Swiper
        style={{ height: "400px" }}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        centeredSlides={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Image src={image} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} />
        </SwiperSlide>
      </Swiper>
    </Center>
  );
}

export default Gallery;
