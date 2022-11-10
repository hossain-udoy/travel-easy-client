import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LimitedServiceCard from "./LimitedServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://travel-easy-server.vercel.app/limit")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-4">
        <h2 className="text-5xl font-semibold">Our Services.</h2>
        <p>To see our full service click See All button</p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <LimitedServiceCard
            key={service._id}
            service={service}
          ></LimitedServiceCard>
        ))}
      </div>
      <div className="text-center mb-10">
        <Link to="/services">
          <button className="btn btn-outline btn-warning  mt-7">See ALL</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
