import { Route, Routes } from "react-router-dom";

import Layout from "./styles/layout";
import Canvas from "./pages/canvas";
import Main from "./pages/main";
import Third from "./pages/third";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/canvas" element={<Canvas />} />
        <Route path="/3" element={<Third />} />
      </Route>
    </Routes>
  );
};

export default App;
