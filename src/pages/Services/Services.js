import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/limit")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return <div></div>;
};

export default Services;
