import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Easy-Tour.png";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

import {
  IoIosBook,
  IoIosHome,
  IoIosOptions,
  IoIosPhotos,
  IoIosQuote,
} from "react-icons/io";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    userLogOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="contain px-3 w-full lg:flex justify-evenly items-center hidden">
        <div className="w-2/12">
          <NavLink
            to="/"
            aria-label="Easy-Travel"
            title="Easy-Travel"
            className="flex items-center"
          >
            <img className="w-8 xl:w-12" src={logo} alt="Easy-Travel" />

            <span className="text-white">Easy-Travel</span>
          </NavLink>
        </div>

        <ul className="Navigation w-7/12 flex items-center justify-center">
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
              to="/myReview"
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

        <div className=" flex items-center w-3/12 lg:flex gap-2">
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
          {user?.email ? (
            <>
              <span className="mr-1 text-white">{user?.displayName}</span>

              <Link
                onClick={handleLogOut}
                className={`inline-flex items-center justify-center h-12 px-6 bg-stone-600 font-medium  text-white transition duration-200 rounded shadow-md  hover:bg-slate-200 hover:text-gray-800 focus:shadow-outline focus:outline-none `}
                aria-label="Log Out"
                title="Log Out"
              >
                Log Out
              </Link>
            </>
          ) : (
            <div>
              <Link
                to="/login"
                className="inline-flex items-center justify-center h-12 px-6 font-medium   transition duration-200 rounded shadow-md  hover:bg-slate-200 hover:text-gray-800 text-white bg-stone-600  focus:shadow-outline focus:outline-none"
                aria-label="Log In"
                title="Log In"
              >
                Log In
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="lg:hidden contain px-3 w-full py-3 flex justify-end">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-10 mr-4 text-white" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute z-50 top-0 left-0 w-full">
            <div className="p-5 bg-white border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link
                    to="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                  >
                    <img src={logo} alt="Easy-Travel" />

                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                      Easy-Travel
                    </span>
                  </Link>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-10 mr-4 text-black" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col ">
                <NavLink
                  to="/"
                  className="font-medium tracking-wide nav-link transition-colors duration-200 hover:bg-red-400 p-1 "
                >
                  Home
                </NavLink>
                <NavLink
                  to="/services"
                  className="font-medium tracking-wide nav-link transition-colors duration-200 hover:bg-red-400 p-1 "
                >
                  Services
                </NavLink>
                <NavLink
                  to="/blog"
                  className="font-medium tracking-wide nav-link transition-colors duration-200 hover:bg-red-400 p-1 "
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/myReview"
                  className="font-medium tracking-wide nav-link transition-colors duration-200 hover:bg-red-400 p-1 "
                >
                  MyReviews
                </NavLink>
                <NavLink
                  to="/addNewServices"
                  className="font-medium tracking-wide nav-link transition-colors duration-200 hover:bg-red-400 p-1 "
                >
                  Add New Services
                </NavLink>

                {user?.uid ? (
                  <>
                    <Link
                      onClick={handleLogOut}
                      className="inline-flex items-center justify-center h-12 px-6 font-medium  text-white bg-black transition duration-200 rounded shadow-md  hover:bg-purple-500   focus:shadow-outline focus:outline-none"
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
                      className="inline-flex items-center justify-center h-12 px-6 font-medium  text-white bg-black transition duration-200 rounded shadow-md  hover:bg-purple-500   focus:shadow-outline focus:outline-none"
                      aria-label="Log In"
                      title="Log In"
                    >
                      Log In
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
