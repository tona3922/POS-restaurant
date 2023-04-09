import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
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
