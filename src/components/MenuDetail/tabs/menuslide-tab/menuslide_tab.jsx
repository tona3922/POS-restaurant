import React from "react";
// , { useState, useRef }
import drinks from "../../image/drinks.png";
import frchick from "../../image/fried-chicken.png";
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

// Import Swiper styles

export const Menuslidetab = () => {
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
            <img src={frchick} alt="" />
            <div className="itemname">chicken</div>
          </div>
        </SwiperSlide>
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
              to="/chefbox"
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
              to="/salad"
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
            <Link to="/sake" style={{ textDecoration: "none", color: "black" }}>
              <img src={sake} alt="" />
              <div className="itemname">sake</div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="menuitem">
            <Link
              to="/noodle"
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
