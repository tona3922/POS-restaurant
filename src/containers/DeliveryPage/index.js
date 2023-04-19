import React from "react";
import { useState } from "react";
import "./index.css";

export const DeliveryPage = () => {
  return (
    <div className="page-container cart-page">
      <Delivery></Delivery>
      <DeliverySummary price={totalPrice} num={numOfDish}></DeliverySummary>
    </div>
  );
};
