import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import MovieDetail from "./details";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default App;
