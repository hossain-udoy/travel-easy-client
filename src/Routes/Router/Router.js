import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddNewServices from "../../pages/AddNewServices/AddNewServices";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import Services from "../../pages/Services/Services";
import SingleServiceCard from "../../pages/SingleServiceCard/SingleServiceCard";
import LogIn from "../../pages/LogIn/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/photo",
        element: <div>Photo</div>,
      },
      {
        path: "/addNewServices",
        element: <AddNewServices></AddNewServices>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/services/:id",
        element: <SingleServiceCard></SingleServiceCard>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
