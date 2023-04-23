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
import {
  increasebyAmount,
  decreasebyAmount,
  quantity_Arr_decrement,
  quantity_Arr_increment,
  pushname,
} from "../store/cart";
import { useParams } from "react-router-dom";
import Comment from "containers/Comment/comment";

// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
import { SubmitButton } from "components/Login";
// import { IconButton } from "@mui/material";

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
      src: "https://media.appfront.app/businesses/5ec4e984823a060e17387d8b/menu-items/ec92dd2791801d0667b4476e13313703/600-_-contain_v4",
      title: "Slow Cooked Ribs Signature Box",
      details: "12 slow cooked ribs",
      price: 58000,
    },
    {
      src: "https://media.appfront.app/businesses/5ec4e984823a060e17387d8b/menu-items/b1fd8ac17483a43a9699cdb6aadfa9dd/600-_-contain_v4",
      title: "Spicy California Hand Roll",
      details: "Kani Crab, Avocado, Cucumber, Sambal Aioli",
      price: 24000,
    },
    {
      src: "https://media.appfront.app/businesses/5ec4e984823a060e17387d8b/menu-items/373468503aacfdeb4574d3095d3fe577/600-_-contain_v4",
      title: "Zenko Roll",
      details: "Hamachi, Yuzu Truffle Sauce",
      price: 41000,
    },
  ]);
  // const [count, setCount] = useState(1);
  const [price, setPrice] = useState(20);
  const id = useParams().id;
  // const my_name = useSelector(myname);
  // const val = useSelector(cnt);
  // const increase = (count) => {
  //   setCount(count);
  //   setPrice(count * 20);
  // };
  // const decrease = (count) => {
  //   if (count > 0) {
  //     setCount(count);
  //     setPrice(count * 20);
  //   } else {
  //     setCount(0);
  //     setPrice(0);
  //   }
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function handleclick(price, name, imag) {
    // console.log(count);
    dispatch(increasebyAmount(price));
    dispatch(pushname({ name, price, imag }));
  }
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
      <div className="mybody">
        {/* {val > 0 ? <Cart /> : <></>} */}
        <div className="detail_page">
          <div
            className="left"
            style={{ backgroundImage: `url(${menuDishes[id - 1].src})` }}
          >
            <div className="image">
              <img src={menuDishes[id - 1].src} />
            </div>
          </div>
          <div className="right">
            <div className="info">
              <div className="medium-title">{menuDishes[id - 1].title}</div>
              <hr />
              <div className="description">
                <p>{menuDishes[id - 1].details}</p>
              </div>
              <hr />
              <div className="detailbill">
                {/* <div className="editquantity">
                  <IconButton
                    // onClick={() => {
                    //   decrease(count - 1);
                    //   dispatch(decreasebyAmount(20));
                    // }}
                    onClick={() => {
                      lower(menuDishes[id - 1].title, count, price);
                      decrease(count - 1);
                    }}
                  >
                    <RemoveIcon></RemoveIcon>
                  </IconButton>
                  <h3>{count}</h3>
                  <IconButton
                    // onClick={handleDecrement}
                    // onClick={() => {
                    //   increase(count + 1);
                    //   dispatch(increasebyAmount(20));
                    // }}
                    onClick={() => {
                      upper(menuDishes[id - 1].title, price);
                      increase(count + 1);
                    }}
                  >
                    <AddIcon></AddIcon>
                  </IconButton>
                </div> */}
                <SubmitButton
                  className="price"
                  onClick={() => {
                    handleclick(price, menuDishes[id - 1].title, test);
                  }}
                >
                  Thêm vào giỏ : {price}$
                </SubmitButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Comment />
      <Menuslidetab id={id} />
    </div>
  );
};
