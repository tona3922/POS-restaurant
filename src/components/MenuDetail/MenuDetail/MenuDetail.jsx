import React, { useState, useEffect } from "react";
import "./MenuDetail.scss";
import { Cart } from "../cart/cart";
// import test from "../../../foodimg/mainfood.webp";
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
import { useParams } from "react-router-dom";
import Comment from "containers/Comment/comment";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { SubmitButton } from "components/Login";
import { IconButton } from "@mui/material";

export const MenuDetail = (props) => {
  const [menuDishes, setMenu] = useState([
    // {
    //   id: 1,
    //   title: "Khoai Tây Múi Cau (Vừa)",
    //   price: 21000,
    //   details: "01 Khoai Tây Múi Cau (vừa)",
    //   src: "https://static.kfcvietnam.com.vn/images/items/lg/Wed(R).jpg?v=4pGwBL",
    // },
    {
      src:
        "https://media.appfront.app/businesses/5ec4e984823a060e17387d8b/menu-items/ec92dd2791801d0667b4476e13313703/600-_-contain_v4",
      title: "Slow Cooked Ribs Signature Box",
      details: "12 slow cooked ribs",
      price: 58000,
    },
    {
      src:
        "https://media.appfront.app/businesses/5ec4e984823a060e17387d8b/menu-items/b1fd8ac17483a43a9699cdb6aadfa9dd/600-_-contain_v4",
      title: "Spicy California Hand Roll",
      details: "Kani Crab, Avocado, Cucumber, Sambal Aioli",
      price: 24000,
    },
    {
      src:
        "https://media.appfront.app/businesses/5ec4e984823a060e17387d8b/menu-items/373468503aacfdeb4574d3095d3fe577/600-_-contain_v4",
      title: "Zenko Roll",
      details: "Hamachi, Yuzu Truffle Sauce",
      price: 41000,
    },
  ]);

  const id = useParams().id;
  const price = menuDishes[id - 1].price;

  const [count, setCount] = useState(1);
  const [totalPrice, settotalPrice] = useState(menuDishes[id - 1].price);

  const val = useSelector(cnt);
  // console.log(useSelector(myname));
  const increase = (newcount) => {
    settotalPrice(prev => prev + price);
    setCount(newcount);
  };
  const decrease = (newcount) => {
    if (count > 1) {
      settotalPrice(prev => prev - price);
      setCount(newcount);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="mybody">
        {/* {val > 0 ? <Cart /> : <></>} */}
        <div className="detail_page">
          <div className="left" style={{ backgroundImage: `url(${menuDishes[id - 1].src})` }}>
            <div className="image">
              <img src={menuDishes[id - 1].src} />
            </div>
          </div>
          <div className="right">
            <div className="info">
              <div className="medium-title">{menuDishes[id - 1].title}</div>
              <hr />
              <div className="description">
                <p>
                  {menuDishes[id - 1].details}
                </p>
              </div>
              <hr />
              <div className="detailbill">
                <div className="editquantity">
                  <IconButton
                    onClick={() => {
                      decrease(count - 1);
                      dispatch(decreasebyAmount(20));
                    }}
                  // onClick={handleIncrement}
                  >
                    <RemoveIcon></RemoveIcon>
                  </IconButton>
                  <h3>{count}</h3>
                  <IconButton
                    // onClick={handleDecrement}
                    onClick={() => {
                      increase(count + 1);
                      dispatch(increasebyAmount(20));
                      // dispatch(pushname({ name: "chicken", price: 20 }));
                    }}
                  >
                    <AddIcon></AddIcon>
                  </IconButton>
                </div>
                <SubmitButton className="price">
                  Thêm vào giỏ : {totalPrice}$
                </SubmitButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menuslidetab id={id} />
      {/* <Comment /> */}
    </div>
  );
};
