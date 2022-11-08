import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/Easy-Tour.png";

import {
  IoIosBook,
  IoIosHome,
  IoIosOptions,
  IoIosPhotos,
  IoIosQuote,
} from "react-icons/io";

const Navbar = () => {
  return (
    <div className="box">
      <div className="container flex justify-center items-center">
        <NavLink
          to="/"
          aria-label="Easy-Travel"
          title="Easy-Travel"
          className="inline-flex items-center"
        >
          <img className="w-8 xl:w-12" src={logo} alt="Easy-Travel" />

          <span className="text-white">Easy-Travel</span>
        </NavLink>
        <ul className="Navigation flex items-center justify-center">
          <li title="Home">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <span className="icon">
                <IoIosHome></IoIosHome>
              </span>
              <span className="text">Home</span>
            </NavLink>
          </li>
          <li title="Services">
            <NavLink
              to="/user"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <span className="icon">
                <IoIosOptions></IoIosOptions>
              </span>
              <span className="text">Services</span>
            </NavLink>
          </li>
          <li title="Blog">
            <NavLink
              to="/chat"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <span className="icon">
                <IoIosQuote></IoIosQuote>
              </span>
              <span className="text">Blog</span>
            </NavLink>
          </li>
          <li title="My Reviews">
            <NavLink
              to="/photo"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <span className="icon">
                <IoIosPhotos></IoIosPhotos>
              </span>
              <span className="text">My Reviews</span>
            </NavLink>
          </li>
          <li title="Add New Services">
            <NavLink
              to="/video"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <span className="icon">
                <IoIosBook></IoIosBook>
              </span>
              <span className="text">Add New Services</span>
            </NavLink>
          </li>
        </ul>
        <div>hello</div>
      </div>
    </div>
  );
};

export default Navbar;
