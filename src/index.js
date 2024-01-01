import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Attorneys from "./components/Attorneys/Attorneys";
import Practices from "./components/Areas/Areas";
import About from "./components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/attorneys",
        element: <Attorneys />,
      },
      {
        path: "/practices",
        element: <Practices />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
