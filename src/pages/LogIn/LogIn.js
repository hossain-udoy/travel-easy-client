import React, { useContext, useState } from "react";
import "./Login.css";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useTitle from "../../Hook/useTitle";

const LogIn = () => {
  useTitle("Login");
  const { logInWithEmailAndPassword, continueWithGoogle, setLoading } =
    useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
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
  // sign in with email and password
  const signInWithEmailAndPassword = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };

        fetch(" https://travel-easy-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("tour-token", data.token);
            navigate(from, { replace: true });
            toast.success(" email login success");
          });
      })
      .catch((error) => {
        setErrors({ ...errors, fireError: error.message });
        setLoading(false);
      });
    setErrors({ ...errors, fireError: "" });
  }; // Sign in with google
  const signInWithGoogle = async () => {
    continueWithGoogle()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        fetch(" https://travel-easy-server.vercel.app/jwt", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("tour-token", data.token);
            navigate(from, { replace: true });
            toast.success("google success");
          });
      })
      .catch((error) => {
        console.error(error);
      });
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
    <div className="cont">
      <div className="bo">
        <form onSubmit={signInWithEmailAndPassword} action="" className="form">
          {errors.fireError && (
            <p className=" text-center text-red-400">{errors.fireError}</p>
          )}
          <h2 className="title">Log In</h2>

          <div className="input-box">
            <input
              onChange={handleEmailOnChange}
              type="email"
              name="email"
              required="required"
            />
            <span>Email</span>
            <i></i>
          </div>
          {errors.email && (
            <p className="flex items-center gap-1 text-red-400">
              <FaTimes className="mt-2" />
              {errors.email}
            </p>
          )}
          <div className="input-box">
            <input
              onChange={handlePasswordChange}
              type="password"
              name="password"
              required="required"
            />
            <span>Password</span>
            <i></i>
          </div>
          {errors.password && (
            <p className="flex items-center gap-1 text-red-400">
              <FaTimes className="mt-2" />
              {errors.password}
            </p>
          )}

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
            <a href="/" onClick={signInWithGoogle} className="social-icon">
              <FaGoogle></FaGoogle>
            </a>
            <a href="/login" className="social-icon disabled">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
          <p className="text-lg text-white">Don't have an account?</p>
          <a href="/registeration" className="btn btn-outline text-white mb-16">
            Sign up
          </a>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
