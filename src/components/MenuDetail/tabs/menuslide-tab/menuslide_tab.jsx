import React from "react";
import drinks from "../../image/drinks.png";
import pasta from "../../image/pasta.png";
import salad from "../../image/salad.png";
import ramen from "../../image/ramen.png";
import sake from "../../image/sake.png";
import sashimi from "../../image/sashimi.png";
import sushi from "../../image/sushi.png";
import pot from "../../image/hot-pot.png";
import osechi from "../../image/osechi.png";
import tempura from "../../image/tempura.png";
import mochi from "../../image/mochi.png";
import "./menuslide_tab.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Navigation, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

// Import Swiper styles

export const Menuslidetab = (id) => {
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
  console.log(id);
  return (
    <div className="cover_slider">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar]}
        spaceBetween={0}
        slidesPerView={6}
        navigation
        className="slider"
      >
        <SwiperSlide className="item">
          <div className="menuitem">
            <img src={drinks} alt="" />
            <div className="itemname">soft drink</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="menuitem">
            <img src={pasta} alt="" />
            <div className="itemname">pasta</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="menuitem">
            <Link
              to={"/detail/" + id.id + "/chefbox"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src={osechi} alt="" />
              <div className="itemname">Chef's Box</div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="menuitem">
            <Link
              to={"/detail/" + id.id + "/salad"}
              // ralative="path"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src={salad} alt="" />
              <div className="itemname">salad</div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="menuitem">
            <img src={sushi} alt="" />
            <div className="itemname">sushi</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="menuitem">
            <img src={pot} alt="" />
            <div className="itemname">hot pot</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="menuitem">
            <Link
              to="/sashimi"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src={sashimi} alt="" />
              <div className="itemname">sashimi</div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="menuitem">
            <Link
              to={"/detail/" + id.id + "/sake"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src={sake} alt="" />
              <div className="itemname">sake</div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="menuitem">
            <Link
              to={"/detail/" + id.id + "/noodle"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src={ramen} alt="" />
              <div className="itemname">noodle</div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="menuitem">
            <img src={tempura} alt="" />
            <div className="itemname">tempura</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="menuitem">
            <img src={mochi} alt="" />
            <div className="itemname">mochi</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
