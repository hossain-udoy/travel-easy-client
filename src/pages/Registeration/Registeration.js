import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";
import {
  FaUser,
  FaLock,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import "./Registeration.css";

const Registeration = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  // error state
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    fireError: "",
  });
  const {
    setLoading,
    continueWithGoogle,
    createUserWithEmailAndPass,
    userProfileUpdate,
  } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  // sign up with google
  const signUpWithGoogle = () => {
    continueWithGoogle()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        // fetch(" https://food-masty-server.vercel.app/jwt", {
        //   method: "POST",
        //   headers: { "content-type": "application/json" },
        //   body: JSON.stringify(currentUser),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     localStorage.setItem("recipe-token", data.token);
        //     navigate(from, { replace: true });
        //     toast.success("google success");
        //   });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // create user
  const createUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photourl = form.photoUrl.value;
    createUserWithEmailAndPass(userInfo.email, userInfo.password)
      .then((result) => {
        userProfileUpdate(name, photourl);
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        // fetch(" https://food-masty-server.vercel.app/jwt", {
        //   method: "POST",
        //   headers: { "content-type": "application/json" },
        //   body: JSON.stringify(currentUser),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     localStorage.setItem("recipe-token", data.token);
        //     navigate(from, { replace: true });
        //     toast.success("hello");
        //   });
      })
      .catch((error) => {
        setLoading(false);
        setErrors({ ...errors, fireError: error.message });
      });
    setErrors({ ...errors, fireError: "" });
  };

  // handle email on change
  const handleEmailOnChange = (e) => {
    const email = e.target.value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "please provide a valid email" });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setErrors({ ...errors, email: "" });
      setUserInfo({ ...userInfo, email: email });
    }
  };
  // handle password on change
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (password.length < 6) {
      setErrors({ ...errors, password: "password must be 6 characters " });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setErrors({ ...errors, password: "" });
      setUserInfo({ ...userInfo, password: password });
    }
  };
  return (
    <div className="body">
      <div className="containr">
        <div className="fox ">
          <form onSubmit={createUser} className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field flex my-3 justify-center items-center gap-2">
              <div className="icon">
                <FaUser></FaUser>
              </div>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field flex my-3 justify-center items-center gap-2 ">
              <div className="icon">
                <FaEnvelope></FaEnvelope>
              </div>
              <input
                onChange={handleEmailOnChange}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="input-field flex my-3 justify-center items-center gap-2">
              <div className="icon">
                <FaLock></FaLock>
              </div>
              <input
                onChange={handlePasswordChange}
                type="password"
                placeholder="Password"
              />
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
              <a href="/" onClick={signUpWithGoogle} className="social-icon">
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
