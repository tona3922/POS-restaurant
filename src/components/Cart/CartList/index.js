import React from "react";
import "./index.css";
// import { Cart } from "../../MenuDetail/cart/cart";
import FoodShow from "./FoodShow";
import { useSelector } from "react-redux";
import { myname } from "../../MenuDetail/store/cart";
function CartList({ data, onEditFood }) {
  const namelist = useSelector(myname);

  console.log("tai cart: ", namelist);
  return (
    <div className="cart-list-container">
      {/* <Cart /> */}
      <h1 className="big-title" style={{ marginBottom: "15px" }}>
        Giỏ hàng của tôi
      </h1>

      {namelist.map(function (item) {
        // const { imgSrc, detail, name, price, quantity } = item;
        return (
          <FoodShow
            src={item[3]}
            detail={item[0]}
            name={item[0]}
            price={item[2]}
            quantity={item[1]}
            onEditFood={onEditFood}
          ></FoodShow>
        );
      })}
      {/* {data.map(function (item) {
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
      })} */}
    </div>
  );
}

export default CartList;
