import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { toPrice } from "containers/Cart";
import "./index.css";

function FoodShow({ src, detail, name, price, quantity, onEditFood }) {
  //quantity is old value
  const [showDetail, setShowDetail] = useState(false);
  const [hide, setHide] = useState(false);
  const [itemPrice, setPrice] = useState(price * quantity); //total price of this item
  const [itemQuantity, setQuantity] = useState(quantity); //total quantity of this item

  const onDelete = () => {
    setHide(true);
    onEditFood(itemPrice, false, true);
  };

  const onAdd = () => {
    setQuantity(itemQuantity + 1);
    setPrice(itemPrice + price);
    onEditFood(price, true);
  };

  const onRemove = () => {
    setQuantity(itemQuantity - 1);
    setPrice(itemPrice - price);
    onEditFood(price, false);
  };

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
              <ul>{showDetail && detail.map((item) => <li>{item}</li>)}</ul>
            </div>
            <div className="edit-action">
              <Link to={"/menu"}>
                <Button
                  variant="standard"
                  sx={{ textTransform: "none", fontWeight: "600" }}
                >
                  Chỉnh sửa
                </Button>
              </Link>
              <Button
                variant="standard"
                onClick={onDelete}
                sx={{ textTransform: "none", fontWeight: "600" }}
              >
                Xóa
              </Button>
            </div>
          </div>
        </div>
        <div className="add-action">
          <div>
            <IconButton onClick={onRemove} disabled={itemQuantity === 1}>
              <RemoveIcon />
            </IconButton>
            <strong>{itemQuantity}</strong>
            <IconButton onClick={onAdd}>
              <AddIcon />
            </IconButton>
            <strong>{toPrice(itemPrice)}</strong>
          </div>
        </div>
      </div>
    );
  else return <></>;
}

export default FoodShow;
