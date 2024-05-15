import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Main from "../page/main/Main";
import Foot from "../components/footer/Foot";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>

      <Foot />
    </BrowserRouter>
  );
};

export default Router;
