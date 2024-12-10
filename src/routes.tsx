import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";
import Login from "./screens/dashboard/login/Login";
import Signup from "./screens/dashboard/signup/Signup";
import { APP_ROUTES } from "./utils/constants";
import rootAction from "./utils/routes/multipleActions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        errorElement: <i>Error page</i>,
        children: [
          { index: true, element: <i>Page A construre</i> },
          {
            path: APP_ROUTES.SIGN_IN,
            element: <Login />,
            action: rootAction,
            errorElement: <i>ERror</i>,
          },
          { path: APP_ROUTES.SIGN_UP, element: <Signup /> },
        ],
      },
    ],
  },
]);

export default router;
