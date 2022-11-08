import React from "react";
import { useLoaderData } from "react-router-dom";
import "./SingleServiceCard.css";
import { BsCalendarDate } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const SingleServiceCard = () => {
  const { location, description, price, img, day, ratingsCount } =
    useLoaderData();
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="lines"></div>
          <div className="imgBx">
            <img src={img} alt="hi" />
          </div>
          <div className="content">
            <div className="details">
              <h2 className="text-center text-5xl">{location}</h2>
              <div className="data text-lg flex justify-between mt-5">
                <h3 className="ml-5">Price: $ {price}/persopn</h3>
                <div className="flex gap-2">
                  <BsCalendarDate></BsCalendarDate>
                  <h3>Days: {day}</h3>
                </div>
                <div className="flex gap-2">
                  <AiFillStar></AiFillStar>
                  <h3>{ratingsCount} + Rating</h3>
                </div>
              </div>
              <div className="text-justify text-base text-white ml-10 mt-5">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceCard;
