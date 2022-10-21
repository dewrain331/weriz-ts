import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header></header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
