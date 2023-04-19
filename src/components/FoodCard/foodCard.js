import React from "react";
import { SubmitButton } from "components/Login";
import "./foodCard.scss";

const FoodCard = (props) => {
  console.log("foodCard", props);
  return (
    <div className="foodCard">
      <div className="img-container">
        <img src={props.src} />
      </div>
      <div className="info">
        <div className="pricetag">
          <div className="title">{props.title}</div>
          <div className="price">
            {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "₫"}
          </div>
        </div>
        <div className="details">{props.details}</div>
      </div>
      <SubmitButton className="addtoCart">Thêm</SubmitButton>
    </div>
  );
};

export default FoodCard;
