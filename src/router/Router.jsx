import {createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../authentication/Login";
import Registration from "../authentication/registration ";
import Dashboard from "../dashboard/Maindashboard/Dashboard";
import Overview from "../dashboard/Maindashboard/overview/Overview";
import ManageUser from "../dashboard/Maindashboard/manageuser/ManageUser";
import Donation from "../dashboard/Maindashboard/donation/Donation";
import Analytics from "../dashboard/Maindashboard/analytics/Analytics";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/registration",
          element: <Registration></Registration>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "overview",
          element: <Overview></Overview>
        },
        {
          path: "manage-user",
          element: <ManageUser></ManageUser>
        },
        {
          path: "donation",
          element: <Donation></Donation>
        },
        {
          path: "analytics",
          element: <Analytics></Analytics>
        },
      ],
    },
  ]);

  export default router