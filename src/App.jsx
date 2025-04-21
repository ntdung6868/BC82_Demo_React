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
                    element: <ProductDetail />,
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
