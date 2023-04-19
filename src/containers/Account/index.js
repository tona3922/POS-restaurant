import Sidebar from "components/Account/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css";

function Account() {
  return (
    <div className="page-container account-page">
      <Sidebar></Sidebar>
      <Outlet />
    </div>
  );
}

export default Account;
