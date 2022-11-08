import React from "react";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img"></div>
      <img
        src={image}
        alt=""
        className="h-[600px] overflow-hidden w-full rounded-xl"
      />
      <div className="absolute flex justify-end transform -translate-y-1/2 left-96 top-1/4">
        <h1 className="text-6xl font-bold text-white">Get Your Tour From Us</h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-80 top-1/2">
        <p className="text-xl text-white">
          Travel Easy is the best platform for tourism.
        </p>
      </div>
      <div className="absolute flex justify-center transform -translate-y-1/2 w-2/5 left-96 top-3/4">
        <button className="btn neon-button mr-5">Check the Services</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
