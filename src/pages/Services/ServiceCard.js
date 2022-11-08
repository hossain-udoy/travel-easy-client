import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { _id, img, price, location, description } = service;
  return (
    <div>
      <section className="  flex justify-center items-center mb-10">
        <div className="w-[380px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full">
              <img src={img} className="w-full h-full" alt="hi" />
              <p className="text-white">Put the mouse over the image</p>
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-slate-600 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-white px-2 pb-24">
                <PhotoProvider>
                  <PhotoView src={img}>
                    <img src={img} className="w-28 h-28" alt="hi" />
                  </PhotoView>
                </PhotoProvider>
                <h1 className="text-4xl font-semibold">{location}</h1>
                <p className="my-2">Price: $ {price}/per-person</p>
                <p className="text-justify mt-2 mx-1">
                  {description.slice(0, 100) + "..."}
                </p>
                <Link to={`/services/${_id}`}>
                  <button className="bg-stone-500 px-3 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-16 group-hover:left-32 text-sm scale-0 group-hover:scale-125">
                    Full Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCard;
