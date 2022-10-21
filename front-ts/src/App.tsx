import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "@/styles/layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" />
        <Route path="/canvas" />
      </Route>
    </Routes>
  );
};

export default App;
