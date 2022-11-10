import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ id }) => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`https://travel-easy-server.vercel.app/review/${id}`)
      .then((res) => res.json())
      .then((result) => {
        const reviewData = result.filter((data) => data.reviewId === id);
        setReview(reviewData);
      });
  }, [review, id]);

  return (
    <div className="">
      <div>
        {review.length === 0 && (
          <h1 className="text-center text-3xl text-red-500 pt-16">
            No Review Found !
          </h1>
        )}
        {review.length > 0 && (
          <>
            <h1 className="text-center text-red-500 mr-24 pb-3">
              All Review is Here
            </h1>

            <div className="flex-col gap-4 md:w-1/2 w-full ml-3 mr-3 text-center mb-5 md:ml-64 flex">
              {review.map((rev) => (
                <div
                  className="bg-white p-1 text-black rounded-lg rounded-tr-none"
                  key={rev._id}
                >
                  <div
                    title={rev.email}
                    className="flex justify-between items-center border-b border-gray-500"
                  >
                    <h1 className="text-semibold">{rev.name}</h1>
                    <img
                      className="w-12 h-12 rounded-full"
                      src={rev.userImg}
                      alt=""
                    />
                  </div>
                  <div className="pt-2">
                    <p>{rev.message}</p>
                    <h1 className="flex  items-center pt-3">
                      Stars:
                      <div className="flex justify-center items-center">
                        <div>
                          <small className="ml-2 font-bold">{rev.star}</small>
                        </div>
                        <div>
                          <small className="pt-1 text-red-500">
                            <FaStar />
                          </small>
                        </div>
                      </div>
                    </h1>
                    <span>{rev.currentDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Review;
