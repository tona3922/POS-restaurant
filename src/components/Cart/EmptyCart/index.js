import React from "react";
import EmptyCartImage from "assets/logo/EmptyCart-removebg.png";
import { SubmitButton } from "components/Login";
import "./index.css";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="empty-cart">
      <img src={EmptyCartImage} />
      <div style={{ textAlign: "left" }}>
        <div className="empty-cart-message big-title">
          Giỏ hàng của bạn đang trống. Hãy đặt món ngay!
        </div>
        <Link to={"/menu"}>
          <SubmitButton
            sx={{
              textTransform: "none",
              padding: "8px 30px",
              boxShadow:
                "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);",
              fontSize: "23px",
            }}
          >
            Bắt đầu đặt hàng
          </SubmitButton>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
