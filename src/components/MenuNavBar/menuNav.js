import React from "react";
import { useState } from "react";
import "./menuNav.scss";
import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Scrollbar } from "swiper";

const MenuNavBar = () => {
  const [tags, setTags] = useState([
    {
      label: "MÓN MỚI",
      nav: "new-product",
    },
    {
      label: "COMBO 1 NGƯỜI",
      nav: "for-one",
    },
    {
      label: "COMBO NHÓM",
      nav: "sharing",
    },
    {
      label: "SUSHI - CƠM CUỘN",
      nav: "sushi",
    },
    {
      label: "RAMEN",
      nav: "burger---rice",
    },
    {
      label: "THỨC ĂN NHẸ",
      nav: "snack",
    },
    {
      label: "THỨC UỐNG & TRÁNG MIỆNG",
      nav: "dessert-&-drink",
    },
  ]);
  return (
    <div className="nav-container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar]}
        spaceBetween={0}
        navigation
        slidesPerView={'auto'}
      >
        {tags.map((tag) => (
          <SwiperSlide className="swiper-slide">
            <Button variant="text" className="navTag" href={`#${tag.nav}`}>
              {tag.label}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MenuNavBar;
