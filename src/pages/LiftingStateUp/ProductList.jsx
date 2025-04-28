import React from "react";
import ProductCard2 from "./ProductCard2";
import ProductDetail2 from "./ProductDetail2";
import GioHang from "./GioHang";

const mangSanPham = [
    {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/208847/vsmart-live-blue-600x600.jpg",
    },
    {
        maSP: 2,
        tenSP: "Meizu 16Xs",
        manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
        heDieuHanh: "Android 9.0 (Pie); Flyme",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 7600000,
        hinhAnh: "https://cellphones.com.vn/sforum/wp-content/uploads/2019/05/Meizu-16XS-Atlantis-Blue.jpg",
    },
    {
        maSP: 3,
        tenSP: "Iphone XS Max",
        manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
        heDieuHanh: "iOS 12",
        cameraTruoc: "7 MP",
        cameraSau: "Chính 12 MP & Phụ 12 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 27000000,
        hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg",
    },
];

const ProductList = (props) => {
    const [spChiTiet, setSpChiTiet] = React.useState({
        maSP: 3,
        tenSP: "Iphone XS Max",
        manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
        heDieuHanh: "iOS 12",
        cameraTruoc: "7 MP",
        cameraSau: "Chính 12 MP & Phụ 12 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 27000000,
        hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg",
    });
    // const { mangSanPham } = props;

    const [spGioHang, setSpGioHang] = React.useState([
        {
            maSP: 3,
            tenSP: "Iphone XS Max",
            giaBan: 27000000,
            hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg",
            soLuong: 2,
        },
    ]);

    const tangGiamSoLuong = (maSPClick, soLuong) => {
        setSpGioHang((prevGioHang) => {
            const updatedGioHang = [...prevGioHang];
            const index = updatedGioHang.findIndex((item) => item.maSP === maSPClick);

            if (index !== -1) {
                const newSoLuong = updatedGioHang[index].soLuong + soLuong;

                if (newSoLuong > 0) {
                    updatedGioHang[index] = {
                        ...updatedGioHang[index],
                        soLuong: newSoLuong,
                    };
                } else {
                    updatedGioHang.splice(index, 1);
                }
            }

            return updatedGioHang;
        });
    };

    const xoaGioHang = (maSPClick) => {
        setSpGioHang((prevGioHang) => {
            const updatedGioHang = [...prevGioHang];
            const index = updatedGioHang.findIndex((item) => item.maSP === maSPClick);

            if (index !== -1) {
                updatedGioHang.splice(index, 1);
            }

            return updatedGioHang;
        });
    };

    return (
        <div className="container">
            <h2 className="text-center text-5xl">Danh sach sản phẩm</h2>
            <div className="grid grid-cols-3">
                {mangSanPham.map((item, index) => {
                    return <ProductCard2 key={index} sp={item} handleChangeSp={setSpChiTiet} />;
                })}
            </div>
            <h3 className="text-center text-5xl">Chi tiết sản phẩn</h3>
            <ProductDetail2 spChiTiet={spChiTiet} setSpGioHang={setSpGioHang} />

            <h3 className="text-center text-5xl">Giỏ hàng</h3>
            <GioHang gioHang={spGioHang} tangGiamSoLuong={tangGiamSoLuong} xoaGioHang={xoaGioHang}/>
        </div>
    );
};

export default ProductList;
