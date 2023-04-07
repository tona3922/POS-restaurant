import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increasebyAmount, cnt, myname, pushname } from "../../store/cart";
import "./standard.scss";

export const Standard = (props) => {
  const products = props.props;
  const dispatch = useDispatch();
  const count = useSelector(cnt);
  const my_name = useSelector(myname);
  function handleclick(price, name) {
    // console.log(count);
    dispatch(increasebyAmount(price));
    dispatch(pushname({ name, price }));
    console.log(my_name);
  }
  return (
    <div className="additional">
      <div className="morefood">
        <div className="partial">
          <div className="choose">
            <h2>{props.title}</h2>
          </div>
          <div className="container">
            {products.map((product) => {
              return (
                <div className="card">
                  <img src={product.img} alt="" />
                  <h3>{product.title}</h3>
                  <h3>{product.price}$</h3>
                  <button
                    onClick={() => handleclick(product.price, product.title)}
                  >
                    Add more
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
