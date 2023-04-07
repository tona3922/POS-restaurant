import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cart.scss";
import plus from "../image/plus.png";
import minus from "../image/minus-sign.png";
import {
  cnt,
  quantity_Arr_increment,
  quantity_Arr_decrement,
  myname,
} from "../store/cart";
export const Cart = () => {
  const count = useSelector(cnt);
  const namelist = useSelector(myname);
  const dispatch = useDispatch();
  function upper(name, price) {
    dispatch(quantity_Arr_increment({ name, price }));
  }
  function lower(name, cnt, price) {
    if (cnt > 0) {
      dispatch(quantity_Arr_decrement({ name, price }));
    }
  }

  return (
    <div>
      <div className="cart">
        <div className="title">Total : {count}</div>
        <div className="list">
          {namelist.map((item) => {
            return (
              <div className="package">
                <div className="itemtitle">{item[0]}: </div>
                <div className="detail">
                  <button onClick={() => upper(item[0], item[2])}>
                    <img src={plus} alt="" />
                  </button>
                  {item[1]}
                  <button onClick={() => lower(item[0], item[1], item[2])}>
                    <img src={minus} alt="" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
