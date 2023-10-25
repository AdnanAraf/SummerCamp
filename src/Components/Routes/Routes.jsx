import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Home1 from "../Home/Home1";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

import Instructorpage from "../Navbar/Instructor/Instructorpage";
import ClassesPage from "../Navbar/ClassesPage/ClassesPage";
import SingleClassDetails from "../Navbar/ClassesPage/SingleClassDetails";
import Dashboard from "../Layout/Dashboard";

import Payment from "../Payment/Payment";
import Alluser from "../Dashboard/Alluser/Alluser";
import ManageClass from "../Dashboard/ManageClass/ManageClass";
import Mycart from "../Dashboard/Mycart";
import MyenrollClass from "../Dashboard/MyenrollClass/MyenrollClass";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
      {
        path: "instructor",
        element: <Instructorpage />,
      },
      {
        path: "class",
        element: <ClassesPage />,
      },
      {
        path: "classcard/:id",
        element: <SingleClassDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/ForeignCategories/${params.id}`),
      },
    ],
  },
  {
    path: "Dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "manageclass",
        element: <ManageClass />,
      },
      {
        path: "alluser",
        element: <Alluser />,
      },
      {
        path: "mycart",
        element: <Mycart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "enroll",
        element: <MyenrollClass />,
      },
    ],
  },
]);

export default Routes;
