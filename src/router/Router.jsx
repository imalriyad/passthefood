import {createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../authentication/Login";
import Registration from "../authentication/registration ";
import Dashboard from "../dashboard/Maindashboard/Dashboard";


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
    }, {
      path: '/dashboard',
      element: <Dashboard></Dashboard>
    }
  ]);

  export default router