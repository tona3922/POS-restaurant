import React from "react";
import "../index.css";
import { Box, TextField } from "@mui/material";
import { SubmitButton } from "components/Login";

function Profile() {
  return (
    <div className="account-right">
      <p className="big-title">Chi tiết tài khoản</p>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="account-content"
      >
        <TextField id="standard-basic" label="Họ của bạn" variant="standard" />
        <TextField id="standard-basic" label="Tên của bạn" variant="standard" />
        <TextField
          id="standard-basic"
          label="Địa chỉ email của bạn"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Số điện thoại"
          variant="standard"
        />
        <SubmitButton fullWidth>Cập nhật tài khoản</SubmitButton>
      </Box>
    </div>
  );
}

export default Profile;
