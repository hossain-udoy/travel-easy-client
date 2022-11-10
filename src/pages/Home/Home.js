import React from "react";
import useTitle from "../../Hook/useTitle";
import ReviewSlider from "./AnotherSlider/AnotherSlider";
import Banner from "./Banner/Banner";
import LimitedService from "./LimitedService/LimitedService";
import WhyUs from "./WhyUs/WhyUs";

const Home = () => {
  useTitle("Home");
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
