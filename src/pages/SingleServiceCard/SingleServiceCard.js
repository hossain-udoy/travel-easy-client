import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./SingleServiceCard.css";
import { BsCalendarDate } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Review from "../Review/Review";
import useTitle from "../../Hook/useTitle";

const SingleServiceCard = () => {
  useTitle("SingleService");
  const { _id, location, description, price, img, day, ratingsCount } =
    useLoaderData();
  const { user } = useContext(AuthContext);

  // date format
  // function formatDate(date) {
  //   const yyyy = date.getFullYear();
  //   let mm = date.getMonth() + 1;
  //   let dd = date.getDate();

  //   if (dd < 10) dd = "0" + dd;
  //   if (mm < 10) mm = "0" + mm;
  //   let hours = date.getHours();
  //   let minutes = date.getMinutes();
  //   let ampm = hours >= 12 ? "PM" : "AM";
  //   hours = hours % 12;
  //   hours = hours ? hours : 12; // the hour '0' should be '12'
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   let strTime =
  //     hours + ":" + minutes + " " + ampm + " " + dd + "/" + mm + "/" + yyyy;
  //   return strTime;
  // }

  // const currentDate = formatDate(new Date());
  const currentDate = new Date().toLocaleString("en-GB");
  const handleReview = async (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const userImg = user.photoURL;
    const email = user.email;
    const name = form.name.value;
    const star = form.star.value;
    const review = {
      message,
      star,
      email,
      name,
      userImg,
      location,
      tourImg: img,
      reviewId: _id,
      currentDate,
    };
    fetch(" https://travel-easy-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("your review is submited !");
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className="text-center text-xl text-white mt-16">
        Put the mouse over the picture
      </div>
      <div className="container">
        <div className="card">
          <div className="lines"></div>
          <div className="imgBx">
            <img src={img} alt="hi" />
          </div>
          <div className="content">
            <div className="details">
              <h2 className="text-center lg:mt-7 text-5xl">{location}</h2>
              <div className="data text-lg mx-10 flex justify-between mt-5">
                <h3 className="ml-5">Price: $ {price}/persopn</h3>
                <div className="flex gap-2">
                  <BsCalendarDate></BsCalendarDate>
                  <h3>Days: {day}</h3>
                </div>
                <div className="flex gap-2">
                  <AiFillStar></AiFillStar>
                  <h3>{ratingsCount} + Rating</h3>
                </div>
              </div>
              <div className="text-justify text-base text-white ml-10 mt-5">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Review id={_id}></Review>
      </div>
      {user?.email ? (
        <form
          onSubmit={handleReview}
          className="border md:ml-32 mb-10 px-5 w-full mx-3 md:w-3/4"
        >
          <div className="flex justify-between items-center pr-6">
            <h1 className="text-white uppercase font-semibold pb-3">
              give a review
            </h1>
          </div>
          <textarea
            className="w-full px-4 py-2 outline-none focus:border-red-500 border-2 bg-white"
            name="message"
            required
            id=""
            placeholder="Your Review......"
            cols="30"
            rows="5"
          ></textarea>
          {/* <input
            name="star"
            required
            type="number"
            className="w-full px-4 py-2 md:mb-0  mt-1 outline-none focus:border-red-500 border-2 bg-white"
            placeholder="Give Star*"
          /> */}
          <label className="text-white text-xl" for="star">
            Give Star
          </label>

          <select
            name="star"
            type="number"
            placeholder="Give Star"
            required
            className="w-1/2 px-4 py-2 md:mb-0  mt-1 outline-none focus:border-red-500 border-2 bg-white"
            id="star"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div className="md:flex py-3 gap-8 ">
            <input
              name="name"
              defaultValue={user?.displayName}
              required
              type="text"
              className="w-full px-4 py-2 md:mb-0 mb-3 outline-none focus:border-red-500 border-2 bg-white"
              placeholder="Your Name*"
            />
            <input
              defaultValue={user?.email}
              readOnly
              required
              type="text"
              className="w-full px-4 py-2 outline-none focus:border-red-500 border-2 bg-white"
              placeholder="Your Email*"
            />
          </div>
          <input
            className="cursor-pointer bg-red-600 py-2 px-6 inline-block  mb-5 mt-2 rounded hover:bg-gray-900 transition-all text-white"
            type="submit"
            value="Post Review"
          />
        </form>
      ) : (
        <div>
          <h1 className="text-3xl text-white text-center">
            If you want to Review please Login.You will redirect to home page so
            after login please come to this page again.
          </h1>
          <Link
            to="/login"
            className=" w-full md:w-3/4 md:ml-32 btn btn-outline mt-5 mb-10 text-white"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default SingleServiceCard;
