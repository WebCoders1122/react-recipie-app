import React from "react";
//for dynamic changes
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* all components will be rendered here in place of this outlet */}
    </>
  );
};

export default Layout;
