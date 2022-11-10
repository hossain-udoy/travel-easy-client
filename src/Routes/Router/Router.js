import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddNewServices from "../../pages/AddNewServices/AddNewServices";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import Services from "../../pages/Services/Services";
import SingleServiceCard from "../../pages/SingleServiceCard/SingleServiceCard";
import LogIn from "../../pages/LogIn/LogIn";
import Registeration from "../../pages/Registeration/Registeration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyReview from "../../pages/MyReview/MyReview";
import Privacy from "../../pages/PrivacyPolicy/Privacy";
import Notfound from "../../pages/NotFound/NotFound";
import UpdateReview from "../../pages/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Notfound></Notfound>,
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
        path: "/myReview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/addNewServices",
        element: (
          <PrivateRoute>
            <AddNewServices></AddNewServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/registeration",
        element: <Registeration></Registeration>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/review/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
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
