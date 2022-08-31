import { Route, Routes } from "react-router-dom";
import Layout from "./styles/Layout";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}></Route>
    </Routes>
  );
};

export default App;
