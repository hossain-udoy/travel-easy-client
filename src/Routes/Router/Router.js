import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Services from "../../pages/Services/Services";
import SingleServiceCard from "../../pages/SingleServiceCard/SingleServiceCard";

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
        path: "/chat",
        element: <div>Chat</div>,
      },
      {
        path: "/photo",
        element: <div>Photo</div>,
      },
      {
        path: "/video",
        element: <div>Video</div>,
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
