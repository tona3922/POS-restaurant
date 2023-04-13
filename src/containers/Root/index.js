import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <Header />
      {/* your page stays here */}
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
