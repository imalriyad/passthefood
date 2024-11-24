import {createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Signup from "../authentication/Signup";
import Home from "../pages/Home";
import Login from "../authentication/Login";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
     children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
      {
        path:"/login",
        element: <Login></Login>
      }
     ]
    },
    
  ]);

  export default router