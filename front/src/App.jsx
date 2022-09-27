import { Route, Routes } from "react-router-dom";

import Layout from "./styles/layout";
import Canvas from "./pages/canvas";
import Second from "./pages/second";
import Third from "./pages/third";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Canvas />} />
        <Route path="/2" element={<Second />} />
        <Route path="/3" element={<Third />} />
      </Route>
    </Routes>
  );
};

export default App;
