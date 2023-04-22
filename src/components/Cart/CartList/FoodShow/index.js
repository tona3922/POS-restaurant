import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
// import { toPrice } from "containers/Cart";
import "./index.css";
import { useDispatch } from "react-redux";
import {
  quantity_Arr_increment,
  quantity_Arr_decrement,
  delete_item,
} from "../../../MenuDetail/store/cart";
function FoodShow({ src, detail, name, price, quantity, onEditFood }) {
  //quantity is old value
  const [showDetail, setShowDetail] = useState(false);
  const [hide, setHide] = useState(false);
  // const [itemPrice, setPrice] = useState(price * quantity); //total price of this item
  // const [itemQuantity, setQuantity] = useState(quantity); //total quantity of this item
  const dispatch = useDispatch();

  function upper(name, price) {
    dispatch(quantity_Arr_increment({ name, price }));
  }
  function lower(name, cnt, price) {
    if (cnt > 0) {
      dispatch(quantity_Arr_decrement({ name, price }));
    }
  }
  function deleteitem(name, cnt, price) {
    if (cnt > 0) {
      setHide(true);
      dispatch(delete_item({ name, price }));
    }
  }

  // const onAdd = () => {
  //   setQuantity(itemQuantity + 1);
  //   setPrice(itemPrice + price);
  //   onEditFood(price, true);
  // };

  // const onRemove = () => {
  //   setQuantity(itemQuantity - 1);
  //   setPrice(itemPrice - price);
  //   onEditFood(price, false);
  // };

  if (!hide)
    return (
      <div className="card-container food-view-container space-between-display">
        <div className="food-info">
          <div
            className="food-cart-image"
            style={{ backgroundImage: `url(${src})` }}
          ></div>
          <div className="food-name-detail">
            <div className="food-name">{name}</div>
            <div className="food-detail">
              <Button
                variant="standard"
                endIcon={
                  showDetail ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )
                }
                onClick={() => setShowDetail(!showDetail)}
                sx={{ textTransform: "none" }}
              >
                Xem chi tiết
              </Button>
              <ul>{showDetail && <li>{detail}</li>}</ul>
            </div>
            <div className="edit-action">
              <Link to={"/detail/1/"}>
                <Button
                  variant="standard"
                  sx={{ textTransform: "none", fontWeight: "600" }}
                >
                  Chỉnh sửa
                </Button>
              </Link>
              <Button
                variant="standard"
                onClick={() => deleteitem(name, quantity, price)}
                sx={{ textTransform: "none", fontWeight: "600" }}
              >
                Xóa
              </Button>
            </div>
          </div>
        </div>
        <div className="add-action">
          <div>
            <IconButton
              onClick={() => lower(name, quantity, price)}
              disabled={quantity === 1}
            >
              <RemoveIcon />
            </IconButton>
            <strong>{quantity}</strong>
            <IconButton onClick={() => upper(name, price)}>
              <AddIcon />
            </IconButton>
            <strong>{quantity * price}.000</strong>
          </div>
        </div>
      </div>
    );
  else return <></>;
}

export default FoodShow;
