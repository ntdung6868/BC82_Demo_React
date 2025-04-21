import React from "react";

export default function ProductCard(props) {
    // console.log("🚀 ~ ProductCard ~ props:", props.product);
    let { name, img, price, description } = props.product ;
    // console.log("🚀 ~ ProductCard ~ name:", name);
    // console.log("🚀 ~ ProductCard ~ description:", description);
    // console.log("🚀 ~ ProductCard ~ price:", price);
    // console.log("🚀 ~ ProductCard ~ img:", img);

    // Biding data
    // Cu phap
    return (
        // <></> thẻ Fragment
        <div>
            <div className="products__item">
                <h3>{name}</h3>
                {/* {name} trong đó {} gọi là Data binding */}
                <img className="products__img" src={img} />
                <p className="products__price">Gia: {price}</p>
                <p>{description}</p>
                <button
                    className="products__btn--detail"
                    onClick={() => {
                        // Xu ly su kien click
                        alert("Xem chi tiet san pham");
                        props.capNhatGiaTien();
                    }}
                >
                    xem chi tiet
                </button>
            </div>
        </div>
    );
}
