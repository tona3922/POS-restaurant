import React from "react";
import FullLogo from "assets/logo/GradientLogo/logo.png";
import "../index.css";
import { Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AccountButton = styled(Button)({
  color: "hsla(0,0%,100%,.5)",
  textTransform: "none",
  fontSize: "18px",
  "&:hover": {
    color: "white",
  },
  transition: "color .2s linear",
});

function Sidebar() {
  const navigate = useNavigate();
  const [chosen, setChosen] = useState(
    window.location.pathname.split("/").at(-1)
  );
  return (
    <div className="sidebar">
      <div className="account-name">
        <IconButton>
          <img
            src={FullLogo}
            style={{ borderRadius: "100%", width: "86px", height: "86px" }}
          />
        </IconButton>
        <div className="hello-name">
          <p className="big-title">Xin chào, ABC</p>
          <AccountButton
            sx={{
              textDecoration: "underline",
              "&:hover": {
                textDecoration: "none",
              },
              color: "white",
            }}
          >
            Đăng xuất
          </AccountButton>
        </div>
      </div>
      <div className="account-list-actions">
        <AccountButton
          sx={{
            color: chosen == "profile" ? "white" : "hsla(0,0%,100%,.5)",
          }}
          onClick={() => {
            setChosen("profile");
            navigate("profile");
          }}
        >
          Chi tiết tài khoản
        </AccountButton>

        <AccountButton
          sx={{
            color: chosen == "previous-orders" ? "white" : "hsla(0,0%,100%,.5)",
          }}
          onClick={() => {
            setChosen("previous-orders");
            navigate("previous-orders");
          }}
        >
          Đơn hàng đã đặt
        </AccountButton>

        <AccountButton>Xóa tài khoản</AccountButton>
      </div>
    </div>
  );
}

export default Sidebar;
