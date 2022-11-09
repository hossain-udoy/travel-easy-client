import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/Easy-Tour.png";
// import { useContext } from "react";
// import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
// import { FaUser } from "react-icons/fa";
// import { useState } from 'react';

import {
  IoIosBook,
  IoIosHome,
  IoIosOptions,
  IoIosPhotos,
  IoIosQuote,
} from "react-icons/io";

const Navbar = () => {
  // const { user, logOut } = useContext(AuthContext);

  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {})
  //     .catch((error) => console.error(error));
  // };

  return (
    <div className="box">
      <div className="contain flex justify-center items-center">
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
              to="/services"
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
              to="/blog"
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
              to="/addNewServices"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <span className="icon">
                <IoIosBook></IoIosBook>
              </span>
              <span className="text">Add Services</span>
            </NavLink>
          </li>
        </ul>
        {/* <div className="flex items-center lg:flex gap-4">
          <Link to="/profile">
            {user?.photoURL ? (
              <img
                style={{ height: "30px" }}
                className="rounded-full"
                src={user?.photoURL}
                alt=""
                title={user?.displayName}
              />
            ) : (
              <FaUser></FaUser>
            )}
          </Link>
          {user?.uid ? (
            <>
              <span className="mr-1">{user?.displayName}</span>

              <Link
                onClick={handleLogOut}
                className={`inline-flex items-center justify-center h-12 px-6 font-medium  text-black transition duration-200 rounded shadow-md  hover:bg-purple-500  focus:shadow-outline focus:outline-none `}
                aria-label="Log Out"
                title="Log Out"
              >
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="inline-flex items-center justify-center h-12 px-6 font-medium  text-black transition duration-200 rounded shadow-md  hover:bg-purple-500   focus:shadow-outline focus:outline-none"
                aria-label="Log In"
                title="Log In"
              >
                Log In
              </Link>
            </>
          )} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Navbar;
