import React, { useState, useEffect } from "react";
// import Header from '../../components/Header/header'
import "./menu.scss";
import FoodCard from "../../components/FoodCard/foodCard";
import MenuNavBar from "components/MenuNavBar/menuNav";
// import './menu-nameblank.scss'

const Menu = () => {
  const [menu, setMenu] = useState([
    // {
    //   id: 1,
    //   title: "Khoai Tây Múi Cau (Vừa)",
    //   price: 21000,
    //   details: "01 Khoai Tây Múi Cau (vừa)",
    //   src: "https://static.kfcvietnam.com.vn/images/items/lg/Wed(R).jpg?v=4pGwBL",
    // },
    {
      label: "MÓN MỚI",
      nav: "new-product",
      dishes: [
        {
          id: 1,
          src: "https://media.appfront.app/businesses/5ec4e984823a060e17387d8b/menu-items/ec92dd2791801d0667b4476e13313703/600-_-contain_v4",
          title: "Slow Cooked Ribs Signature Box",
          details: "12 slow cooked ribs",
          price: 58000,
        },
        {
          id: 2,
          src: "https://media.appfront.app/businesses/5ec4e984823a060e17387d8b/menu-items/b1fd8ac17483a43a9699cdb6aadfa9dd/600-_-contain_v4",
          title: "Spicy California Hand Roll",
          details: "Kani Crab, Avocado, Cucumber, Sambal Aioli",
          price: 24000,
        },
        {
          id: 3,
          src: "https://media.appfront.app/businesses/5ec4e984823a060e17387d8b/menu-items/373468503aacfdeb4574d3095d3fe577/600-_-contain_v4",
          title: "Zenko Roll",
          details: "Hamachi, Yuzu Truffle Sauce",
          price: 41000,
        },
      ],
    },
    {
      label: "COMBO 1 NGƯỜI",
      nav: "for-one",
      dishes: [],
    },
    {
      label: "COMBO NHÓM",
      nav: "sharing",
      dishes: [],
    },
    {
      label: "SUSHI - CƠM CUỘN",
      nav: "sushi",
      dishes: [],
    },
    {
      label: "RAMEN",
      nav: "burger---rice",
      dishes: [],
    },
    {
      label: "THỨC ĂN NHẸ",
      nav: "snack",
      dishes: [],
    },
    {
      label: "THỨC UỐNG & TRÁNG MIỆNG",
      nav: "dessert-&-drink",
      dishes: [],
    },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-page">
      {/* <Header /> */}
      <MenuNavBar></MenuNavBar>

      {menu.map((section) => (
        <>
          <div className="tag-combo" id={`${section.nav}`}>
            {section.label}
          </div>
          <div className="menu">
            {section.dishes.map((dish) => (
              <FoodCard {...dish} />
            ))}
          </div>
        </>
      ))}
      {/* </div> */}
    </div>
  );
};

export default Menu;
