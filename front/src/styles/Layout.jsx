import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../component/header";

const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
