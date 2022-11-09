import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Pagination } from "swiper";
import img1 from "../../../assets/images/kashmir.jpg";
import img2 from "../../../assets/images/london.jpg";
import img3 from "../../../assets/images/maldives.jpg";
import img4 from "../../../assets/images/paris.jpg";

SwiperCore.use([Pagination, EffectCube]);

export default function Slider() {
  return (
    <div className="mt-5">
      <h1 className="text-2xl text-white">Our Courses</h1>
      <Swiper
        effect="cube"
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            color: "white",
            backgroundImage:
              "url(https://dantheengineer.com/content/images/2022/06/python-django-1.png)",
          }}
        >
          <img src={img1} className="w-full h-auto" alt="" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            color: "white",
            backgroundImage:
              "url(https://dantheengineer.com/content/images/2022/06/python-django-1.png)",
          }}
        >
          <img src={img2} className="w-full h-auto" alt="" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            color: "white",
            backgroundImage:
              "url(https://dantheengineer.com/content/images/2022/06/python-django-1.png)",
          }}
        >
          <img src={img3} className="w-full h-auto" alt="" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            color: "white",
            backgroundImage:
              "url(https://dantheengineer.com/content/images/2022/06/python-django-1.png)",
          }}
        >
          <img src={img4} className="w-full h-auto" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
