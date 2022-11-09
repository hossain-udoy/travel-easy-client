import React from "react";
import "./Login.css";
import { FaFacebook, FaTwitter, FaGoogle, FaLinkedin } from "react-icons/fa";

const LogIn = () => {
  return (
    <div className="cont">
      <div className="bo ">
        <form action="" className="form">
          <h2 className="title">Log In</h2>
          <div className="input-box">
            <input type="text" required="required" />
            <span>User Name</span>
            <i></i>
          </div>
          <div className="input-box">
            <input type="email" required="required" />
            <span>Email</span>
            <i></i>
          </div>
          <div className="input-box">
            <input type="password" required="required" />
            <span>Password</span>
            <i></i>
          </div>

          <input
            type="submit"
            className=" w-full btn btn-outline mt-5 text-white"
            value="Login"
          />

          <div className="hover">
            <p className="text-sm text-white mt-4 ">
              Or Sign in with social platform(Only Google is Available)
            </p>
          </div>
          <div className=" flex text-lg my-3 justify-between">
            <a href="/login" className="social-icon disabled">
              <FaFacebook></FaFacebook>
            </a>
            <a href="/login" className="social-icon disabled">
              <FaTwitter></FaTwitter>
            </a>
            <a href="/" className="social-icon">
              <FaGoogle></FaGoogle>
            </a>
            <a href="/login" className="social-icon disabled">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
          <p className="text-lg text-white">Don't have an account?</p>
          <a href="/" className="btn btn-outline text-white mb-16">
            Sign up
          </a>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
