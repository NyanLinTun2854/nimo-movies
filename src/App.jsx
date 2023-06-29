import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import MovieDetail from "./details";
import SearchProducts from "./search";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<MovieDetail />} />
      <Route path="/search-products" element={<SearchProducts />} />
    </Routes>
  );
};

export default App;
