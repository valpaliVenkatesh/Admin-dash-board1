import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/index";
import React from "react";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
