import React from "react";
import "./index.css";
import Banner from "assets/logo/Banner.png";
import { TextField, Box, Checkbox, darken } from "@mui/material";
import { Link } from "react-router-dom";
import { SubmitButton } from "components/Login";

function Signup() {
  return (
    <div className="page-container">
      <div className="left-block">
        <img src={Banner} alt="" />
      </div>
      <div className="right-block">
        <div className="form-area">
          <h1 className="big-title">Tạo tài khoản</h1>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="login-content"
          >
            <TextField
              id="standard-basic"
              label="Họ của bạn"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Tên của bạn"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Số điện thoại"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Địa chỉ email của bạn"
              variant="standard"
              type="email"
            />

            <TextField
              id="standard-basic"
              label="Mật khẩu"
              variant="standard"
              type="password"
            />
          </Box>
          <div className="policy">
            <Checkbox
              defaultChecked
              sx={{
                color: "#133B3D",
                "&.Mui-checked": {
                  color: "#133B3D",
                },
              }}
            />
            <div style={{ lineHeight: "1.7em", marginTop: "7px" }}>
              Tôi đã đọc và đồng ý với các
              <strong> Chính Sách Hoạt Động của F.L.A.V.O.R Việt Nam.</strong>
            </div>
          </div>
          <SubmitButton sx={{ width: "100%", marginTop: "20px" }}>
            Tạo tài khoản
          </SubmitButton>
          <div className="signup-link">Bạn đã có tài khoản?</div>
          <Link to={"/login"}>
            <SubmitButton
              sx={{
                width: "100%",
                backgroundColor: "#D2D79F",
                "&:hover": {
                  backgroundColor: darken("#D2D79F", 0.1),
                },
              }}
            >
              Đăng nhập
            </SubmitButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
