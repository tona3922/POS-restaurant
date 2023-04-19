import React from "react";
import pay1 from "./pay1.png";
import pay2 from "./money.png";
import "./Delivery.scss";
import { SubmitButton } from "components/Login";
import { TextField, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Delivery = () => {
  const navigate = useNavigate();

  return (
    <div className="deliverypage">
      <div className="big-title">Thông tin đặt hàng</div>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="delivery-content"
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
      </Box>
      <div className="payment">
        <div className="big-title">Phương thức thanh toán</div>
        <div className="option">
          <Button variant="outlined">
            <div>Thanh toán qua zalopay</div>
            <div className="imag">
              <img src={pay1} alt="" />
            </div>
          </Button>
        </div>
        <div className="option">
          <Button variant="contained">
            <div className="name">Thanh toán bằng tiền mặt</div>
            <div className="imag">
              <img src={pay2} alt="" />
            </div>
          </Button>
        </div>
        <SubmitButton
          fullWidth
          sx={{ marginTop: "20px" }}
          onClick={() => {
            navigate("/my-account/previous-orders");
          }}
        >
          Đặt hàng
        </SubmitButton>
      </div>
    </div>
  );
};
