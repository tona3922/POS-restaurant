import React from "react";
import "./index.css";
import FoodShow from "./FoodShow";

function CartList({ data, onEditFood }) {
  return (
    <div className="cart-list-container">
      <h1 className="big-title" style={{ marginBottom: "15px" }}>
        Giỏ hàng của tôi
      </h1>
      {data.map(function (item) {
        const { imgSrc, detail, name, price, quantity } = item;
        return (
          <FoodShow
            src={imgSrc}
            detail={detail}
            name={name}
            price={price}
            quantity={quantity}
            onEditFood={onEditFood}
          ></FoodShow>
        );
      })}
    </div>
  );
}

export default CartList;
