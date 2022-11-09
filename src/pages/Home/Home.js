import React from "react";
import ReviewSlider from "./AnotherSlider/AnotherSlider";
import Banner from "./Banner/Banner";
import LimitedService from "./LimitedService/LimitedService";
import WhyUs from "./Why-Us/WhyUs";

const Home = () => {
  return (
    <div className="text-white">
      <Banner></Banner>
      <LimitedService></LimitedService>
      <ReviewSlider></ReviewSlider>
      <WhyUs></WhyUs>
    </div>
  );
};

export default Home;
