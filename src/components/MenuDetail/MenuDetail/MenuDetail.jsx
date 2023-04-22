import React, { useState, useEffect } from "react";
import "./MenuDetail.scss";
import { Cart } from "../cart/cart";
import test from "../../../foodimg/mainfood.webp";
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

export const MenuDetail = () => {
  const [menuDishes, setMenu] = useState([
    {
      id: 1,
      title: "Khoai Tây Múi Cau (Vừa)",
      price: 21000,
      details: "01 Khoai Tây Múi Cau (vừa)",
      src: "https://static.kfcvietnam.com.vn/images/items/lg/Wed(R).jpg?v=4pGwBL",
    },
    {
      id: 2,
      title: "Khoai Tây Múi Cau (Lớn)",
      price: 41000,
      details: "01 Khoai Tây Múi Cau (lớn)",
      src: "https://static.kfcvietnam.com.vn/images/items/lg/Wed(L).jpg?v=4pGwBL",
    },
    {
      id: 3,
      title: "Combo Khoai Tây Múi Cau A",
      price: 105000,
      details:
        "01 Khoai Tây Múi Cau (vừa) + 01 miếng Gà + 01 Burger Tôm + 01 Pepsi (lon)",
      src: "https://static.kfcvietnam.com.vn/images/items/lg/Wedges-A.jpg?v=4pGwBL",
    },
    {
      id: 4,
      title: "5 Viên Khoai Môn Kim Sa",
      price: 55000,
      details: "5 Viên Khoai Môn Kim Sa",
      src: "	https://static.kfcvietnam.com.vn/images/items/lg/5-lava-taro.jpg?v=4pGwBL",
    },
    {
      id: 5,
      title: "Combo Khoai Môn Kim Sa A",
      price: 86000,
      details: "2 Viên Khoai Môn Kim Sa + 2 miếng Gà",
      src: "	https://static.kfcvietnam.com.vn/images/items/lg/lava-taro-a.jpg?v=4pGwBL",
    },
    {
      id: 6,
      title: "Combo Khoai Tây Múi Cau B",
      price: 96000,
      details: "2 Viên Khoai Môn Kim Sa + 1 miếng Gà + 1 Burger Tôm",
      src: "	https://static.kfcvietnam.com.vn/images/items/lg/lava-taro-b.jpg?v=4pGwBL",
    },
    {
      id: 7,
      title: "Combo Khoai Môn Kim Sa C",
      price: 196000,
      details: "4 Viên Khoai Môn Kim Sa + 4 miếng Gà + 2 Pepsi Lon",
      src: "	https://static.kfcvietnam.com.vn/images/items/lg/lava-taro-c.jpg?v=4pGwBL",
    },
    {
      id: 8,
      title: "2 Bánh Khoai Tây Chiên",
      price: 17000,
      details: "2 Bánh Khoai Tây Chiên",
      src: "	https://static.kfcvietnam.com.vn/images/items/lg/2-Hash-Browns.jpg?v=4pGwBL",
    },
    {
      id: 9,
      title: "3 Bánh Khoai Tây Chiên",
      price: 21000,
      details: "3 Bánh Khoai Tây Chiên",
      src: "	https://static.kfcvietnam.com.vn/images/items/lg/3-Hash-Browns.jpg?v=4pGwBL",
    },
    {
      id: 10,
      title: "4 Bánh Khoai Tây Chiên",
      price: 32000,
      details: "4 Bánh Khoai Tây Chiên",
      src: "https://static.kfcvietnam.com.vn/images/items/lg/4-Hash-Browns.jpg?v=4pGwBL",
    },
    {
      id: 11,
      title: "6 Bánh Khoai Tây Chiên",
      price: 47000,
      details: "6 Bánh Khoai Tây Chiên",
      src: "https://static.kfcvietnam.com.vn/images/items/lg/6-Hash-Browns.jpg?v=4pGwBL",
    },
    {
      id: 12,
      title: "Combo Hash Browns A",
      price: 78000,
      details:
        "2 Bánh Khoai Tây Chiên + 1 Cơm Gà Rán/Cơm Gà Bít-tết/Cơm Phi-lê Gà Quay /Cơm Gà Xốt Teriyaki /Cơm Gà Xiên Que + 1 Soup Rong Biển/Soup Rau Củ + 1 Lon Pepsi",
      src: "https://static.kfcvietnam.com.vn/images/items/lg/Hash-Browns-A.jpg?v=4pGwBL",
    },
    {
      id: 13,
      title: "COMBO HASH BROWNS B",
      price: 68000,
      details: "2 Bánh Khoai Tây Chiên + 1 Mì Ý Xốt Cà Gà Viên + 1 Lon Pepsi",
      src: "	https://static.kfcvietnam.com.vn/images/items/lg/Hash-Browns-B.jpg?v=4pGwBL",
    },
    {
      id: 14,
      title: "Combo Hash Browns C",
      price: 89000,
      details: "2 Bánh Khoai Tây Chiên + 2 Miếng Gà Rán + 1 Lon Pepsi",
      src: "https://static.kfcvietnam.com.vn/images/items/lg/Hash-Browns-C.jpg?v=4pGwBL",
    },
    {
      id: 15,
      title: "Combo Hash Browns D",
      price: 17000,
      details:
        "3 Bánh Khoai Tây Chiên + 3 Miếng Gà Rán + 1 Burger Zinger/Burger Gà Quay Flava/Burger Tôm + 2 Lon Pepsi",
      src: "https://static.kfcvietnam.com.vn/images/items/lg/Hash-Browns-D.jpg?v=4pGwBL",
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
          <div className="left" style={{ backgroundImage: `url(${test})` }}>
            <div className="image">
              <img src={test} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="info">
              <div className="medium-title">{menuDishes[id - 1].title}</div>
              <hr />
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  quasi esse ab commodi nisi, at ipsum aliquam eveniet. Qui
                  autem deleniti corrupti optio repudiandae aspernatur ab fugit
                  consectetur quis possimus.
                </p>
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
