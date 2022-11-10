import React from "react";
import { Carousel } from "3d-react-carousal";
import "./AnotherSlider.css";
import img1 from "../../../assets/images/kashmir.jpg";
import img2 from "../../../assets/images/london.jpg";
import img3 from "../../../assets/images/maldives.jpg";
import img4 from "../../../assets/images/paris.jpg";

const ReviewSlider = () => {
  const slides = [
    <img
      style={{
        width: "1200px",
        height: "600px",
      }}
      src={img1}
      alt="1"
    />,
    <img
      style={{
        width: "1200px",
        height: "600px",
      }}
      src={img2}
      alt="2"
    />,
    <img
      style={{
        width: "1200px",
        height: "600px",
      }}
      src={img3}
      alt="3"
    />,
    <img
      style={{
        width: "1200px",
        height: "600px",
      }}
      src={img4}
      alt="4"
    />,
  ];
  return (
    <div style={{ margin: "120px 0" }}>
      <h2 className="text-center my-5 text-slate-300 text-3xl font-semibold">
        <span className=""> Easy-Travel</span> Gallery
      </h2>
      <Carousel
        className="w-80"
        slides={slides}
        autoplay={false}
        interval={1000}
      />
    </div>
  );
};

export default ReviewSlider;
