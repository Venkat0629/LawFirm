import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
