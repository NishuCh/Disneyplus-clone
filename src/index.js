import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";
import Detail from "./components/Detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
