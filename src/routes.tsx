import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";
import Login from "./screens/dashboard/login/Login";
import Signup from "./screens/dashboard/signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        errorElement: <i>Error page</i>,
        children: [
          { index: true, element: <i>Page A construre</i> },
          { path: "login/", element: <Login /> },
          { path: "signup", element: <Signup /> },
        ],
      },
    ],
  },
]);

export default router;
