import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Main from "../page/main/Main";
import Foot from "../components/footer/Foot";
import Login from "../page/login/Login";
import JoinForm from "../page/joinForm/JoinForm";

const Router = () => {
  const location = useLocation();
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<JoinForm />} />
      </Routes>

      {location.pathname !== "/login" && <Foot />}
    </>
  );
};

export default Router;
