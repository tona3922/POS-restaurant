import React from 'react'
import { useState } from 'react'
import "./menuNav.scss"

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
            label: "GÀ RÁN - GÀ QUAY",
            nav: "fried-rosted-chicken",
        },
        {
            label: "BURGER - CƠM - MÌ Ý",
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
    ])
    return (
        <div className="nav-container">
            {tags.map(tag => <div className="navTag">{tag.label}</div>)}
        </div>

    )
}

export default MenuNavBar