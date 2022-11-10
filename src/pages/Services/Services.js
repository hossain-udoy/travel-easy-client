import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useTitle from "../../Hook/useTitle";
import ServiceCard from "./ServiceCard";
import ServicesHeader from "./ServicesHeader";

const Services = () => {
  const [services, setServices] = useState([]);
  useTitle("Service");

  useEffect(() => {
    fetch("https://travel-easy-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-10">
      <ServicesHeader></ServicesHeader>
      <div>
        <div className="text-center mb-7 mt-16">
          <h2 className="text-5xl text-white font-semibold">Our Services.</h2>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
