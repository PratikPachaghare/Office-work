import React, { useState } from "react";
import Navbar from "./components/Navbar";

import { Outlet } from "react-router-dom";
import FooterWithoutLink from "./components/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterWithoutLink />
    </>
  );
}

export default Layout;
