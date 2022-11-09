import React from "react";
import {
  FaUser,
  FaLock,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import "./Registeration.css";

const Registeration = () => {
  return (
    <div className="body">
      <div className="containr">
        <div className="fox ">
          <form action="" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field flex my-3 justify-center items-center gap-2">
              <div className="icon">
                <FaUser></FaUser>
              </div>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field flex my-3 justify-center items-center gap-2 ">
              <div className="icon">
                {" "}
                <FaEnvelope></FaEnvelope>
              </div>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field flex my-3 justify-center items-center gap-2">
              <div className="icon">
                {" "}
                <FaLock></FaLock>
              </div>
              <input type="password" placeholder="Password" />
            </div>
            <input
              type="submit"
              value="Sign up"
              className="btn5 my-5 font-semibold"
            />
            <p className="text-zinc-400 text-center mb-6">
              Or Sign in with social platfor
              <br />
              <span>(Only Google Platform is available)</span>
            </p>
            <div className="social-media flex gap-5">
              <a href="/registeration" className="social-icon">
                <FaFacebook></FaFacebook>
              </a>
              <a href="/registeration" className="social-icon">
                <FaTwitter></FaTwitter>
              </a>
              <a href="/" className="social-icon">
                <FaGoogle></FaGoogle>
              </a>
              <a href="/registeration" className="social-icon">
                <FaLinkedin></FaLinkedin>
              </a>
            </div>
            <p className="text-zinc-400 my-4 flex flex-col">
              Already have an account?
              <a
                href="/login"
                className="btn6 mt-4 mb-4 text-center font-semibold"
              >
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registeration;
