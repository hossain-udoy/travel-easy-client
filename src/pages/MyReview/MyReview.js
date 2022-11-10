import React, { useContext, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaStar } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../Hook/useTitle";
const MyReview = () => {
  useTitle("My_Reviews");
  const { user, userLogOut } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);
  useEffect(() => {
    fetch(
      `https://travel-easy-server.vercel.app/myReview?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("tour-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return userLogOut();
        }
        return res.json();
      })
      .then((data) => setMyReview(data));
  }, [user?.email, userLogOut]);
  console.log(myReview);
  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure ? You want to delete this review?"
    );
    if (confirm) {
      fetch(`https://travel-easy-server.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            toast.success("Successfully deleted ", { duration: 3000 });
          }
        });
    }
  };
  return (
    <div className="py-8">
      {myReview.length ? (
        <div>
          <h1 className="text-3xl font-semibold text-center">My Reviews</h1>
          <div className="flex flex-col pt-4 gap-5">
            {myReview.map((review) => (
              <div
                key={review._id}
                className="bg-gray-300 shadow-lg rounded-lg  shadow-slate-500 justify-between sm:flex"
              >
                <div className="sm:flex gap-3 ">
                  <PhotoProvider>
                    <PhotoView src={review.tourImg}>
                      <img
                        className="sm:w-[200px] w-full rounded-l-lg cursor-pointer"
                        src={review.tourImg}
                        alt=""
                      />
                    </PhotoView>
                  </PhotoProvider>
                  <div className="sm:pl-0 sm:pt-0 pl-2 pt-4">
                    <h2
                      title="Title of food"
                      className="text-gray-900  font-bold  text-xl pb-2"
                    >
                      {review.title}
                    </h2>
                    <p title="Client Review" className="text-gray-700">
                      {review.message}
                    </p>
                    <h1 className="flex text-gray-700 items-center pt-3">
                      <span className="font-semibold">Stars:</span>
                      <small className="ml-2 font-bold">{review.star}</small>
                      <small className="pt-1 text-red-500">
                        <FaStar />
                      </small>
                    </h1>
                    <p>{review.currentDate}</p>
                  </div>
                </div>
                <div className="flex sm:flex-col justify-center gap-4 mb-4 sm:mb-0 sm:mt-0 mt-4 sm:mr-4">
                  <Link to={`/update/${review._id}`}>
                    <BiEdit
                      title="Update Review"
                      className="cursor-pointer text-red-500 text-2xl"
                    />
                  </Link>
                  <AiOutlineDelete
                    onClick={() => handleDelete(review._id)}
                    title="Remove item"
                    className="cursor-pointer text-red-500 text-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1 className="text-3xl font-bold text-red-500 text-center">
          No Reviews were Added !
        </h1>
      )}
    </div>
  );
};

export default MyReview;
