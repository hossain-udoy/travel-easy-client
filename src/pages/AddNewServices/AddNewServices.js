import React from "react";
import { useForm } from "react-hook-form";
import Button from "@restart/ui/esm/Button";
import toast from "react-hot-toast";

const AddNewServices = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/add-new-package", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast.success("New package added");
          reset();
        }
      });
    console.log(data);
    reset();
  };
  return (
    <div>
      <h2 className="text-center text-white text-5xl my-5">Add new package</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="mt-6 mb-5 lg:mx-44 space-y-4 rounded-lg p-8 shadow-2xl shadow-slate-50 text-center"
      >
        <div>
          <label for="Location" className="text-lg font-medium text-white">
            Tour Location
          </label>

          <div className="relative mt-1">
            <input
              name="location"
              {...register("location")}
              type="text"
              placeholder="Tour Location"
              required
              className="input w-3/4 text-white input-bordered"
            />
          </div>
        </div>
        <div>
          <label for="Description" className="text-lg font-medium text-white">
            Description
          </label>

          <div className="relative mt-1">
            <textarea
              name="description"
              {...register("description")}
              as="textarea"
              type="text"
              placeholder="Tour Description"
              required
              className="textarea textarea-bordered h-24 w-3/4"
            ></textarea>
          </div>
        </div>
        <div>
          <label for="email" className="text-lg font-medium text-white">
            Price
          </label>

          <div className="relative mt-1">
            <input
              name="price"
              {...register("price")}
              type="number"
              placeholder="Price"
              required
              className="input w-3/4 text-black input-bordered"
            />
          </div>
        </div>
        <div>
          <label for="email" className="text-lg font-medium text-white">
            Day
          </label>

          <div className="relative mt-1">
            <input
              name="day"
              {...register("day")}
              type="number"
              placeholder="Days"
              required
              className="input w-3/4 text-black input-bordered"
            />
          </div>
        </div>
        <div>
          <label for="email" className="text-lg font-medium text-white">
            Number Of Ratings
          </label>

          <div className="relative mt-1">
            <input
              name="ratingsCount"
              {...register("ratingsCount")}
              type="number"
              placeholder="Ratings"
              required
              className="input w-3/4 text-black input-bordered"
            ></input>
          </div>
        </div>
        <div>
          <label for="email" className="text-lg font-medium text-white">
            Image Url
          </label>

          <div className="relative mt-1">
            <input
              name="img"
              {...register("img")}
              type="url"
              placeholder="Image url"
              required
              className="input w-3/4 text-black input-bordered"
            ></input>
          </div>
        </div>

        <Button
          type="submit"
          className=" text-center block w-3/4 mx-auto rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddNewServices;
