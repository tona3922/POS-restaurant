import React from "react";
import { toPrice } from "containers/Cart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton } from "@mui/material";

const previousOrder = [
  {
    date: "30/3",
    price: 92,
  },
  {
    date: "30/3",
    price: 92,
  },
  {
    date: "30/3",
    price: 92,
  },
];

function PreviousOrders() {
  return (
    <div className="account-right">
      <p className="big-title">Các đơn hàng đã đặt</p>
      <div className="previous-order">
        {previousOrder.map((order) => {
          return (
            <div className="card-header">
              <div className="small-title">Đã đặt vào {order.date}</div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <span className="small-title">{toPrice(order.price)}</span>
                <IconButton>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PreviousOrders;
