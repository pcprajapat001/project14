import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { ProductList } from "./ProductList";
import { NavList } from "./NavList";

export const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavList />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodlist" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
