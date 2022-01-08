import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import React, { useContext } from "react";
const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
export default App;
