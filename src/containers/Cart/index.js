import React from "react";
import { useState } from "react";
import "./index.css";
import CartList from "components/Cart/CartList";
import Summary from "components/Cart/Summary";
import { cartData } from "./cart_data.js";

export const toPrice = (price) => {
  return `${price}.000₫`;
};

export const CartPage = () => {
  // Get totalPrice from API response
  let sum = 0;
  for (const i in cartData) {
    sum += cartData[i].price * cartData[i].quantity;
  }

  const [totalPrice, setTotalPrice] = useState(sum);

  const onEditFood = (money, add) => {
    //money is the amount changed
    if (add) {
      setTotalPrice(totalPrice + money);
    } else setTotalPrice(totalPrice - money);
  };

  return (
    <div className="page-container cart-page">
      <CartList
        data={cartData}
        onEditFood={(money, add) => onEditFood(money, add)}
      ></CartList>
      <Summary price={totalPrice} num={cartData.length}></Summary>
    </div>
  );
};
