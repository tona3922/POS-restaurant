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
      label: "COMBO NHÓM",
      nav: "sharing",
      dishes: [
        {
          id: 1,
          src: "https://tokyodeli.com.vn/Data/Sites/3/Product/54/combo-sushi-01.jpg",
          title: "Slow Cooked Ribs Signature Box",
          details: "12 slow cooked ribs",
          price: 58000,
        },
        {
          id: 2,
          src: "https://tokyodeli.com.vn/Data/Sites/3/Product/56/combo-sushi-03.jpg",
          title: "Spicy California Hand Roll",
          details: "Kani Crab, Avocado, Cucumber, Sambal Aioli",
          price: 24000,
        },
        {
          id: 3,
          src: "https://tokyodeli.com.vn/Data/Sites/3/Product/1362/1combo-sushi-05.jpg",
          title: "Zenko Roll",
          details: "Hamachi, Yuzu Truffle Sauce",
          price: 41000,
        },
      ],
    },
    {
      label: "SUSHI - CƠM CUỘN",
      nav: "sushi",
      dishes: [
        {
          id: 1,
          src: "https://tokyodeli.com.vn/Data/Sites/3/Product/71/nigiri-01.jpg",
          title: "Slow Cooked Ribs Signature Box",
          details: "12 slow cooked ribs",
          price: 58000,
        },
        {
          id: 2,
          src: "https://tokyodeli.com.vn/Data/Sites/3/Product/66/broiled-eel_2.png",
          title: "Spicy California Hand Roll",
          details: "Kani Crab, Avocado, Cucumber, Sambal Aioli",
          price: 24000,
        },
        {
          id: 3,
          src: "https://tokyodeli.com.vn/Data/Sites/3/Product/1447/nigiri-09.jpg",
          title: "Zenko Roll",
          details: "Hamachi, Yuzu Truffle Sauce",
          price: 41000,
        },
      ],
    },
    {
      label: "RAMEN",
      nav: "burger---rice",
      dishes: [
        {
          id: 10,
          src: "https://tokyodeli.com.vn/Data/Sites/3/Product/130/udon-04.jpg",
          title: "Slow Cooked Ribs Signature Box",
          details: "12 slow cooked ribs",
          price: 58000,
        },
        {
          id: 11,
          src: "https://tokyodeli.com.vn/Data/Sites/3/Product/129/udon-01.jpg",
          title: "Spicy California Hand Roll",
          details: "Kani Crab, Avocado, Cucumber, Sambal Aioli",
          price: 24000,
        },
        {
          id: 12,
          src: "https://tokyodeli.com.vn/Data/Sites/3/Product/135/udon-09.jpg",
          title: "Zenko Roll",
          details: "Hamachi, Yuzu Truffle Sauce",
          price: 41000,
        },
      ],
    },
    {
      label: "THỨC ĂN NHẸ",
      nav: "snack",
      dishes: [
        {
          id: 1,
          src: "https://tokyodeli.com.vn/Data/Sites/3/Product/185/salad-02.jpg",
          title: "Slow Cooked Ribs Signature Box",
          details: "12 slow cooked ribs",
          price: 58000,
        },
        {
          id: 2,
          src: "https://tokyodeli.com.vn/Data/Sites/3/Product/1372/salad-04.jpg",
          title: "Spicy California Hand Roll",
          details: "Kani Crab, Avocado, Cucumber, Sambal Aioli",
          price: 24000,
        },
        {
          id: 3,
          src: "https://tokyodeli.com.vn/Data/Sites/3/Product/1250/salad-02.jpg",
          title: "Zenko Roll",
          details: "Hamachi, Yuzu Truffle Sauce",
          price: 41000,
        },
      ],
    },
    {
      label: "THỨC UỐNG & TRÁNG MIỆNG",
      nav: "dessert-&-drink",
      dishes: [
        {
          id: 1,
          src: "https://tokyodeli.com.vn/Data/Sites/3/Product/741/tea-01.jpg",
          title: "Slow Cooked Ribs Signature Box",
          details: "12 slow cooked ribs",
          price: 58000,
        },
        {
          id: 2,
          src: "https://tokyodeli.com.vn/Data/Sites/3/Product/740/tea-02.jpg",
          title: "Spicy California Hand Roll",
          details: "Kani Crab, Avocado, Cucumber, Sambal Aioli",
          price: 24000,
        },
        {
          id: 3,
          src: "https://tokyodeli.com.vn/Data/Sites/3/Product/1380/tea-04.jpg",
          title: "Zenko Roll",
          details: "Hamachi, Yuzu Truffle Sauce",
          price: 41000,
        },
      ],
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
