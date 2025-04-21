import React, { useState } from "react";
import imgXe from "./../../assets/products/black-car.jpg";

const DemoState = () => {
    // state ==> hook ==> hàm react cung cấp => muốn thay đổi state phải chạy phương thức cap nhat state
    // destructuring
    let [state, setState] = useState(10);
    // console.log(state);
    const [hoTen, setHoTen] = useState("Dũng");
    let [fontSize, setFontSize] = useState(30);
    let like = 1;
    let styleButton = "py-2 px-5 text-white rounded-2xl cursor-pointer";
    let styleInline = {
        fontSize: "30px",
        color: "red",
    };

    let [imgSrc, setImgSrc] = useState("black-car.jpg");

    function handleChangeFontSize(check) {
        let value = check === "tang" ? fontSize + 2 : fontSize - 2;
        setFontSize(value);
        // console.log("fontSize", fontSize);
    }

    function handleChangeImgCar(tenHinhAnh) {
        setImgSrc(tenHinhAnh);
    }
    return (
        <div>
            <h2>Demo về cách tạo và sử dụng state</h2>
            <div>
                <p>{state}</p>
                <button
                    onClick={() => {
                        // setState(40);
                        setState((prevState) => {
                            console.log("prevState", prevState);
                            return prevState + 1;
                        });
                    }}
                    className="px-4 py-2 bg-amber-500 text-white rounded-md"
                >
                    Bấm tăng like
                </button>
                <input
                    type="text"
                    onChange={(event) => {
                        console.log(event.target.value);
                        setHoTen(event.target.value);
                    }}
                    value={hoTen}
                    className="px-4 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="py-10">
                <h2>Bài tập tăng giảm kích thức chữ</h2>
                <p style={{ fontSize: fontSize + "px" }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, corrupti.
                </p>
                <button
                    className={styleButton + " bg-orange-500"}
                    onClick={() => {
                        handleChangeFontSize("tang");
                    }}
                >
                    Tăng kích thức
                </button>
                <button
                    className={styleButton + " bg-red-500"}
                    onClick={() => {
                        handleChangeFontSize("giam");
                    }}
                >
                    Giảm kích thức
                </button>
            </div>
            <div className="flex justify-center items-center ">
                <img src={`./products/${imgSrc}`} alt="" />
                <div className="space-x-3">
                    <button
                        className={styleButton + " bg-black"}
                        onClick={() => {
                            handleChangeImgCar("black-car.jpg");
                        }}
                    >
                        Xe đen
                    </button>
                    <button
                        className={styleButton + " bg-red-500"}
                        onClick={() => {
                            handleChangeImgCar("red-car.jpg");
                        }}
                    >
                        Xe đỏ
                    </button>
                    <button
                        className={styleButton + " bg-gray-500"}
                        onClick={() => {
                            handleChangeImgCar("silver-car.jpg");
                        }}
                    >
                        Xe bạc
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DemoState;
