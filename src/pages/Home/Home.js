import React from "react";
import ReviewSlider from "./AnotherSlider/AnotherSlider";
import Banner from "./Banner/Banner";
import LimitedService from "./LimitedService/LimitedService";

const Home = () => {
  return (
    <div className="text-white">
      <Banner></Banner>
      <LimitedService></LimitedService>
      <ReviewSlider></ReviewSlider>
    </div>
  );
};

export default Home;
