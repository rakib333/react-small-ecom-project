import React from "react";
import Header from "../components/Header/Header";
import Shop from "../components/Shop/Shop";

const HomePage = () => {
  return (
    <>
      <div className="content-body navbar-bg">
        <div className="container">
          <Header></Header>
        </div>
      </div>
      <div className="container">
        <Shop></Shop>
      </div>
    </>
  );
};

export default HomePage;
