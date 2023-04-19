import React from "react";
import pay1 from "./pay1.png";
import pay2 from "./money.png";
import "./Delivery.scss";

export const Delivery = () => {
  return (
    <div className="deliverypage">
      <div className="pagetitle">Thong tin</div>
      <div className="cover">
        <div className="cover_title">Delivery Form</div>
        <div className="formcover">
          <div className="form">
            <div className="cover">
              <div className="upper">
                <div className="title">Họ và tên</div>
              </div>
              <input type="text" />
            </div>
            <div className="cover">
              <div className="upper">
                <div className="title">Tên của bạn</div>
              </div>
              <input type="text" />
            </div>
            <div className="cover">
              <div className="upper">
                <div className="title">Số điện thoại</div>
              </div>
              <input type="text" />
            </div>
            <div className="cover">
              <div className="upper">
                <div className="title">Địa chỉ email</div>
              </div>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="payment">
        <div className="option">
          <button>
            <div className="name">Thanh toán qua zalopay</div>
            <div className="imag">
              <img src={pay1} alt="" />
            </div>
          </button>
        </div>
        <div className="option">
          <button>
            <div className="name">Thanh toán bằng tiền mặt</div>
            <div className="imag">
              <img src={pay2} alt="" />
            </div>
          </button>
        </div>
      </div>
      <button className="btn">Buy</button>
    </div>
  );
};
