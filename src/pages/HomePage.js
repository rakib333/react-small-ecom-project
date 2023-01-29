import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const HomePage = () => {
  return (
    <>
      <div className="content-body navbar-bg">
        <div className="container">
          <Header></Header>
        </div>
      </div>
      <div className="container">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default HomePage;
