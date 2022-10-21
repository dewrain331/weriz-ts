import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "@/styles/layout";
import Main from "@/pages/main";
import Canvas from "@/pages/canvas";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/canvas" element={<Canvas />} />
      </Route>
    </Routes>
  );
};

export default App;
