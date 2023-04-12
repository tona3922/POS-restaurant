import React, { useState } from "react";
import "./MenuDetail.scss";
import { Cart } from "../cart/cart";
import test from "../../../foodimg/mainfood.webp";
import minus from "../image/minus-sign.png";
import plus from "../image/plus.png";
// import Header from "components/Header/header";
// import Footer from "components/Footer/Footer";
// import { Standard } from "../tabs/standard/standard";
// import { SALAD } from "../tabs/storage/salad";
// import { CHEFBOX } from "../tabs/storage/chefbox";
// import { NOODLE } from "../tabs/storage/udon";
import { Menuslidetab } from "../tabs/menuslide-tab/menuslide_tab";
import { useDispatch, useSelector } from "react-redux";
import { increasebyAmount, decreasebyAmount, cnt } from "../store/cart";
export const MenuDetail = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(20);
  const val = useSelector(cnt);
  // console.log(useSelector(myname));
  const increase = (count) => {
    setCount(count);
    setPrice(count * 20);
  };
  const decrease = (count) => {
    if (count > 0) {
      setCount(count);
      setPrice(count * 20);
    } else {
      setCount(0);
      setPrice(0);
    }
  };
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mybody">
        {val > 0 ? <Cart /> : <></>}
        <div className="detail_page">
          <div className="left">
            <div className="image">
              <img src={test} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="info">
              <div className="title">My Title</div>
              <hr />
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  quasi esse ab commodi nisi, at ipsum aliquam eveniet. Qui
                  autem deleniti corrupti optio repudiandae aspernatur ab fugit
                  consectetur quis possimus.
                </p>
              </div>
              <hr />
              <div className="detailbill">
                <div className="editquantity">
                  <button
                    onClick={() => {
                      decrease(count - 1);
                      dispatch(decreasebyAmount(20));
                    }}
                    // onClick={handleIncrement}
                  >
                    <img src={minus} alt="" />
                  </button>
                  <h3>{count}</h3>
                  <button
                    // onClick={handleDecrement}
                    onClick={() => {
                      increase(count + 1);
                      dispatch(increasebyAmount(20));
                      // dispatch(pushname({ name: "chicken", price: 20 }));
                    }}
                  >
                    <img src={plus} alt="" />
                  </button>
                </div>
                <div className="price">Price : {price}$</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menuslidetab />
    </div>
  );
};
