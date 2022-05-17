import React from "react";
import Home from "./Home";
import { Routes, Route, Switch } from "react-router-dom";
import Detail from "./Detail";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default Pages;
