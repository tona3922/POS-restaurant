import React, { useState } from "react";
import pic1 from "../image/pic1.jpg";
import pic2 from "../image/pic2.jpg";
import pic3 from "../image/pic3.jpg";
import pic4 from "../image/pic4.jpg";
import frchick from "../image/fried-chicken.png";
const Feature = (props) => {
  const prev = props.price;

  const [increment, setIncrement] = useState(0);
  var value = prev + increment;
  const [update, setUpdate] = useState(10);
  const increase = (increment) => {
    setIncrement(increment);
    // onchange = { handleprice };
  };
  const handleprice = () => {
    setUpdate(value);
    props.onPriceChange(value);
  };
  // props.price = prev + increment;
  return (
    <div>
      <div className="additional">
        <div className="morefood">
          <div className="partial">
            <div className="choose">
              <img src={frchick} alt="" />
              <h2>More Chickens</h2>
            </div>
            <div className="container">
              <div className="card">
                <img src={pic1} alt="" />
                <h3>abc</h3>
                <h3>price: 10$</h3>
                <button
                  onClick={() => {
                    increase(increment + 10);
                  }}
                  value={update}
                  onChange={handleprice}
                >
                  Add more
                </button>
              </div>
              <div className="card">
                <img src={pic2} alt="" />
                <h3>abc</h3>
                <h3>price: 15$</h3>
                <button
                  onClick={() => {
                    increase(increment + 15);
                  }}
                  value={update}
                  onChange={handleprice}
                >
                  Add more
                </button>
              </div>
              <div className="card">
                <img src={pic3} alt="" />
                <h3>abc</h3>
                <h3>price: 10$</h3>
                <button
                  onClick={() => {
                    increase(increment + 10);
                  }}
                  value={update}
                  onChange={handleprice}
                >
                  Add more
                </button>
              </div>
              <div className="card">
                <img src={pic4} alt="" />
                <h3>abc</h3>
                <h3>price: 25$</h3>
                <button
                  onClick={() => {
                    increase(increment + 25);
                  }}
                  value={update}
                  onChange={handleprice}
                >
                  Add more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{value}</div>
    </div>
  );
};
export default Feature;
