import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import DemoState from "./components/DemoState/DemoState";
import { Route, Routes, useRoutes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import DemoTemplate from "./templates/DemoTemplate";
import HomeTemplate from "./templates/HomeTemplate";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/productDetail/ProductDetail";
import ProductCard2 from "./pages/LiftingStateUp/ProductCard2";
import ProductList from "./pages/LiftingStateUp/ProductList";
import ProductDetail2 from "./pages/LiftingStateUp/ProductDetail2";
import GioHang from "./pages/LiftingStateUp/GioHang";

// const mangSanPham = [
//     {
//         maSP: 1,
//         tenSP: "VinSmart Live",
//         manHinh: "AMOLED, 6.2, Full HD+",
//         heDieuHanh: "Android 9.0 (Pie)",
//         cameraTruoc: "20 MP",
//         cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
//         ram: "4 GB",
//         rom: "64 GB",
//         giaBan: 5700000,
//         hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/208847/vsmart-live-blue-600x600.jpg",
//     },
//     {
//         maSP: 2,
//         tenSP: "Meizu 16Xs",
//         manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
//         heDieuHanh: "Android 9.0 (Pie); Flyme",
//         cameraTruoc: "20 MP",
//         cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
//         ram: "4 GB",
//         rom: "64 GB",
//         giaBan: 7600000,
//         hinhAnh: "https://cellphones.com.vn/sforum/wp-content/uploads/2019/05/Meizu-16XS-Atlantis-Blue.jpg",
//     },
//     {
//         maSP: 3,
//         tenSP: "Iphone XS Max",
//         manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
//         heDieuHanh: "iOS 12",
//         cameraTruoc: "7 MP",
//         cameraSau: "Chính 12 MP & Phụ 12 MP",
//         ram: "4 GB",
//         rom: "64 GB",
//         giaBan: 27000000,
//         hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg",
//     },
// ];

function App() {
    const routes = useRoutes([
        {
            path: "/",
            element: <HomeTemplate />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "/demo-state",
                    element: <DemoState />,
                },
                {
                    path: "/demo",
                    element: (
                        <div>
                            <h1>Helo BC 82</h1>
                        </div>
                    ),
                },
                {
                    path: "/dtdd/:id",
                    // element: <ProductDetail2 mangSanPham={mangSanPham} />,
                    element: <ProductDetail2 />,
                },

                {
                    path: "/product-list",
                    // element: <ProductList mangSanPham={mangSanPham} />,
                    element: <ProductList />,
                },
                {
                    path: "/gio-hang",
                    element: <GioHang />,
                },
            ],
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);
    return routes;
}

export default App;
