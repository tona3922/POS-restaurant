import React, { useEffect } from "react";
import { useState } from "react";
import "./index.css";
import CartList from "components/Cart/CartList";
import Summary from "components/Cart/Summary";
import { cartData } from "./cart_data.js";
import { useSelector } from "react-redux";
import { cnt, myname } from "../../components/MenuDetail/store/cart";
export const toPrice = (price) => {
  return `${price}.000₫`;
};

export const CartPage = () => {
  // Get totalPrice from API response
  const count = useSelector(cnt);
  console.log(count);
  const namelist = useSelector(myname);
  let sum = 0;
  for (const i in cartData) {
    sum += cartData[i].price * cartData[i].quantity;
  }

  const [totalPrice, setTotalPrice] = useState(sum);
  const [numOfDish, setNumOfDish] = useState(cartData.length);

  const onEditFood = (money, add, deleted = false) => {
    //money is the amount changed
    if (add) {
      setTotalPrice(totalPrice + money);
    } else setTotalPrice(totalPrice - money);
    if (deleted) {
      setNumOfDish(numOfDish - 1);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let foodlist = 0;
  for (let item = 0; item < namelist.length; item++) {
    if (namelist[item][1] !== 0) {
      foodlist += 1;
    }
  }
  return (
    <div className="page-container cart-page">
      <CartList
        data={cartData}
        onEditFood={(money, add, deleted) => onEditFood(money, add, deleted)}
      ></CartList>
      <Summary price={count} num={foodlist}></Summary>
    </div>
  );
};
