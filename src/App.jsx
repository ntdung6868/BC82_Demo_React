import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import DemoState from "./components/DemoState/DemoState";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import DemoTemplate from "./templates/DemoTemplate";
import HomeTemplate from "./templates/HomeTemplate";
import NotFound from "./pages/NotFound";

function App() {
    let [productList, setProductList] = useState([
        {
            name: "Iphone 14 pro max",
            img: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg",
            price: "36.000.000",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, non!",
        },
        {
            name: "Iphone 15 pro max",
            img: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg",
            price: "37.000.000",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, non!",
        },
        {
            name: "Iphone 16 pro max",
            img: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg",
            price: "38.000.000",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, non!",
        },
        {
            name: "Iphone 17 pro max",
            img: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg",
            price: "39.000.000",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, non!",
        },
        {
            name: "Iphone 18 pro max",
            img: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg",
            price: "40.000.000",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, non!",
        },
        {
            name: "Iphone 19 pro max",
            img: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg",
            price: "41.000.000",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, non!",
        },
    ]);
    // console.log("🚀 ~ App ~ productList:", productList);

    // const renderProductCard = () => {
    //     const element = productList.map(() => {
    //         return <ProductCard />;
    //     });
    //     return element;
    // };

    function handleUpdatePrice() {
        let newProductList = [...productList];
        console.log("🚀 ~ handleUpdatePrice ~ newProductList:", newProductList);
        newProductList[0].price = "50.000.000";
        setProductList(newProductList);
    }

    return (
        <>
            <Routes>
                {/* path đường dẫn mà người dùng sẽ tới */}
                {/* element sẽ nhận vào Component hoặc JSX cần hiển thị */}
                <Route
                    path="/demo"
                    element={
                        <div>
                            <h1>Helo</h1>
                        </div>
                    }
                />
                {/* <Route path="/" element={<HomePage />} /> */}
                <Route path="/" element={<HomeTemplate />}>
                    <Route index element={<HomePage />} />
                    <Route path="/demo-state" element={<DemoState />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
