import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";
import Login from "./screens/dashboard/Login";

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
          { path: "signup", element: <h1>Signup</h1> },
        ],
      },
    ],
  },
]);

export default router;
