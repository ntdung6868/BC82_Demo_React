import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, NavLink, Outlet } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const arrNavLink = [
    {
        title: "Trang chu",
        to: "/",
    },
    {
        title: "Demo State",
        to: "/demo-state",
    },
    {
        title: "Demo",
        to: "/demo",
    },
    {
        title: "Product List",
        to: "/product-list",
    },
    {
        title: "Gio Hang",
        to: "/gio-hang",
    },
];

const HomeTemplate = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Header style={{ display: "flex", alignItems: "center" }} className="space-x-3">
                <div className="demo-logo" />
                {/* <Link to="/">Trang chu</Link> */}
                {/* <Link to="/demo-state">Demo State</Link> */}
                {/* <NavLink
                    to="/demo-state"
                    className={({ isActive }) => {
                        // console.log("🚀 ~ HomeTemplate ~ helper:", helper);
                        return isActive ? "!text-red-500" : "";
                    }}
                >
                    Demo State
                </NavLink> */}
                {arrNavLink.map((item, index) => {
                    return (
                        <NavLink
                            key={index}
                            to={item.to}
                            className={({ isActive }) => {
                                return isActive ? "!text-red-500" : "";
                            }}
                        >
                            {item.title}
                        </NavLink>
                    );
                })}
            </Header>
            <Content style={{ padding: "0 48px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
        </Layout>
    );
};
export default HomeTemplate;
