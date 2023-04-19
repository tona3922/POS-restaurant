import React from "react";
import "./index.css";
import { TextField } from "@mui/material";
import { SubmitButton } from "components/Login";
import { toPrice } from "containers/Cart";
import { Link } from "react-router-dom";

function DeliverySummary({ price, num }) {
  const disCount = 20;
  const payment = price - disCount;
  return (
    <div className="summary-block ">
      <div className="summary-container card-container">
        <h2 className="medium-title"> {num} món </h2>
        <Divider variant="middle" />
        <div className="coupon">
          <strong>Bạn có Mã giảm giá?</strong>
          <div className="space-between-display" style={{ marginTop: "10px" }}>
            <TextField
              id="standard-basic"
              label="Mã giảm giá"
              variant="standard"
            />
            <SubmitButton
              sx={{
                backgroundColor: "black",
                textTransform: "none",
                padding: "5px 20px",
              }}
            >
              Áp dụng
            </SubmitButton>
          </div>
        </div>
        <Divider></Divider>
        <div className="space-between-display">
          <p>Tổng đơn hàng</p>
          <p>{toPrice(price)}</p>
        </div>
        <div className="space-between-display price-space">
          <p>Phí giảm</p>
          <p>{toPrice(disCount)}</p>
        </div>
        <div className="space-between-display">
          <strong>Tổng thanh toán</strong>
          <strong>{toPrice(payment)}</strong>
        </div>
        <Divider></Divider>
        <Link to={"/delivery"}>
          <SubmitButton
            sx={{
              width: "100%",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <div className="space-between-display" style={{ width: "100%" }}>
              <p>Thanh toán</p>
              <p>{toPrice(payment)}</p>
            </div>
          </SubmitButton>
        </Link>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="divider"></div>;
}

export default DeliverySummary;
