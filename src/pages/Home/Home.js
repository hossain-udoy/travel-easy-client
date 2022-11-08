import React from "react";
import Banner from "./Banner/Banner";
import LimitedService from "./LimitedService/LimitedService";

const Home = () => {
  return (
    <div className="text-white">
      <Banner></Banner>
      <LimitedService></LimitedService>
    </div>
  );
};

export default Home;
