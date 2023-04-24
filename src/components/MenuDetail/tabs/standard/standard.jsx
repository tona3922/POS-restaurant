import React from "react";
import { useDispatch } from "react-redux";
import { increasebyAmount, pushname } from "../../store/cart";
import { MenuDetail } from "components/MenuDetail/MenuDetail/MenuDetail";
import { SubmitButton } from "components/Login";
import "./standard.scss";

export const Standard = (props) => {
  const products = props.props;
  const dispatch = useDispatch();
  // const count = useSelector(cnt);
  // const my_name = useSelector(myname);
  function handleclick(price, name, imag) {
    // console.log(count);
    dispatch(increasebyAmount(price));
    dispatch(pushname({ name, price, imag }));
  }
  return (
    <>
      <MenuDetail />
      <div className="additional">
        <div className="morefood">
          <div className="partial">
            <div className="choose">
              <h2 className="medium-title">{props.title}</h2>
            </div>
            <div className="container">
              {products.map((product) => {
                return (
                  <div className="card">
                    <div
                      className="product-image"
                      style={{ backgroundImage: `url(${product.img})` }}
                    ></div>

                    <div className="pricetag">
                      <h3>{product.title}</h3>
                      <h3>{product.price}.000</h3>
                    </div>

                    <SubmitButton
                      sx={{
                        textTransform: "none",
                        width: "90%",
                        marginTop: "auto",
                        marginBottom: "10px",
                      }}
                      onClick={() =>
                        handleclick(product.price, product.title, product.img)
                      }
                    >
                      Thêm vào giỏ
                    </SubmitButton>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
