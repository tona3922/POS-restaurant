import React, { useState } from 'react'
// import Header from '../../components/Header/header'
import './menu.scss'
import FoodCard from '../../components/FoodCard/foodCard'
import MenuNavBar from 'components/MenuNavBar/menuNav'
// import './menu-nameblank.scss'

const Menu = () => {
    const [menuDishes, setMenu] = useState([
        {
            id: 1,
            title: "Khoai Tây Múi Cau (Vừa)",
            price: 21000,
            details: "01 Khoai Tây Múi Cau (vừa)",
            src: "https://static.kfcvietnam.com.vn/images/items/lg/Wed(R).jpg?v=4pGwBL"
        },
        {
            id: 2,
            title: "Khoai Tây Múi Cau (Lớn)",
            price: 41000,
            details: "01 Khoai Tây Múi Cau (lớn)",
            src: "https://static.kfcvietnam.com.vn/images/items/lg/Wed(L).jpg?v=4pGwBL"
        },
        {
            id: 3,
            title: "Combo Khoai Tây Múi Cau A",
            price: 105000,
            details: "01 Khoai Tây Múi Cau (vừa) + 01 miếng Gà + 01 Burger Tôm + 01 Pepsi (lon)"
            , src: "https://static.kfcvietnam.com.vn/images/items/lg/Wedges-A.jpg?v=4pGwBL"
        },
        {
            id: 4,
            title: "5 Viên Khoai Môn Kim Sa",
            price: 55000,
            details: "5 Viên Khoai Môn Kim Sa",
            src: "	https://static.kfcvietnam.com.vn/images/items/lg/5-lava-taro.jpg?v=4pGwBL"
        },
        {
            id: 5,
            title: "Combo Khoai Môn Kim Sa A",
            price: 86000,
            details: "2 Viên Khoai Môn Kim Sa + 2 miếng Gà"
            , src: "	https://static.kfcvietnam.com.vn/images/items/lg/lava-taro-a.jpg?v=4pGwBL"
        },
        {
            id: 6,
            title: "Combo Khoai Tây Múi Cau B",
            price: 96000,
            details: "2 Viên Khoai Môn Kim Sa + 1 miếng Gà + 1 Burger Tôm"
            , src: "	https://static.kfcvietnam.com.vn/images/items/lg/lava-taro-b.jpg?v=4pGwBL"
        },
        {
            id: 7,
            title: "Combo Khoai Môn Kim Sa C",
            price: 196000,
            details: "4 Viên Khoai Môn Kim Sa + 4 miếng Gà + 2 Pepsi Lon"
            , src: "	https://static.kfcvietnam.com.vn/images/items/lg/lava-taro-c.jpg?v=4pGwBL"
        },
        {
            id: 8,
            title: "2 Bánh Khoai Tây Chiên",
            price: 17000,
            details: "2 Bánh Khoai Tây Chiên",
            src: "	https://static.kfcvietnam.com.vn/images/items/lg/2-Hash-Browns.jpg?v=4pGwBL"
        },
        {
            id: 9,
            title: "3 Bánh Khoai Tây Chiên",
            price: 21000,
            details: "3 Bánh Khoai Tây Chiên",
            src: "	https://static.kfcvietnam.com.vn/images/items/lg/3-Hash-Browns.jpg?v=4pGwBL"
        },
        {
            id: 10,
            title: "4 Bánh Khoai Tây Chiên",
            price: 32000,
            details: "4 Bánh Khoai Tây Chiên",
            src: "https://static.kfcvietnam.com.vn/images/items/lg/4-Hash-Browns.jpg?v=4pGwBL"
        },
        {
            id: 11,
            title: "6 Bánh Khoai Tây Chiên",
            price: 47000,
            details: "6 Bánh Khoai Tây Chiên",
            src: "https://static.kfcvietnam.com.vn/images/items/lg/6-Hash-Browns.jpg?v=4pGwBL"
        },
        {
            id: 12,
            title: "Combo Hash Browns A",
            price: 78000,
            details: "2 Bánh Khoai Tây Chiên + 1 Cơm Gà Rán/Cơm Gà Bít-tết/Cơm Phi-lê Gà Quay /Cơm Gà Xốt Teriyaki /Cơm Gà Xiên Que + 1 Soup Rong Biển/Soup Rau Củ + 1 Lon Pepsi"
            , src: "https://static.kfcvietnam.com.vn/images/items/lg/Hash-Browns-A.jpg?v=4pGwBL"
        },
        {
            id: 13,
            title: "COMBO HASH BROWNS B",
            price: 68000,
            details: "2 Bánh Khoai Tây Chiên + 1 Mì Ý Xốt Cà Gà Viên + 1 Lon Pepsi"
            , src: "	https://static.kfcvietnam.com.vn/images/items/lg/Hash-Browns-B.jpg?v=4pGwBL"
        },
        {
            id: 14,
            title: "Combo Hash Browns C",
            price: 89000,
            details: "2 Bánh Khoai Tây Chiên + 2 Miếng Gà Rán + 1 Lon Pepsi"
            , src: "https://static.kfcvietnam.com.vn/images/items/lg/Hash-Browns-C.jpg?v=4pGwBL"
        },
        {
            id: 15,
            title: "Combo Hash Browns D",
            price: 17000,
            details: "3 Bánh Khoai Tây Chiên + 3 Miếng Gà Rán + 1 Burger Zinger/Burger Gà Quay Flava/Burger Tôm + 2 Lon Pepsi"
            , src: "https://static.kfcvietnam.com.vn/images/items/lg/Hash-Browns-D.jpg?v=4pGwBL"
        },
    ])
    return (
        <div className="main-page">
            {/* <Header /> */}
            <MenuNavBar></MenuNavBar>
            <div className="tag-combo">MÓN MỚI</div>

            <div className="menu">
                {menuDishes.map(dish => <FoodCard {...dish} />)}
            </div>
        </div>
    )
}

export default Menu