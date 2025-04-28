import React from "react";

const GioHang = (props) => {
    const { gioHang, tangGiamSoLuong, xoaGioHang } = props;
    console.log("🚀 ~ GioHang ~ gioHang:", gioHang);
    return (
        <div className="max-w-5xl mx-auto mt-10 p-4  shadow-md rounded-xl">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">🛒 Giỏ Hàng</h1>
            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-100 text-left text-sm text-gray-600">
                        <th className="py-3 px-4">Tên sản phẩm</th>
                        <th className="py-3 px-4">Hình ảnh</th>
                        <th className="py-3 px-4">Đơn giá</th>
                        <th className="py-3 px-4">Số lượng</th>
                        <th className="py-3 px-4">Thành tiền</th>
                        <th className="py-3 px-4">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Duyệt qua giỏ hàng */}
                    {gioHang.map((gioHang, index) => {
                        return (
                            <tr key={index} className="border-b">
                                <td className="py-3 px-4 font-medium">{gioHang.tenSP}</td>
                                <td className="py-3 px-4">
                                    <img src={gioHang.hinhAnh} className="w-16 h-16 object-cover rounded" />
                                </td>
                                <td className="py-3 px-4 text-blue-600 font-semibold">
                                    {gioHang.giaBan.toLocaleString()}
                                </td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                            onClick={() => {
                                                tangGiamSoLuong(gioHang.maSP, -1);
                                            }}
                                        >
                                            -
                                        </button>
                                        <span>{gioHang.soLuong}</span>
                                        <button
                                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                            onClick={() => {
                                                tangGiamSoLuong(gioHang.maSP, 1);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="py-3 px-4 font-semibold">
                                    {(gioHang.soLuong * gioHang.giaBan).toLocaleString()}
                                </td>
                                <td className="py-3 px-4">
                                    <button
                                        className="text-red-500 hover:underline"
                                        onClick={() => {
                                            xoaGioHang(gioHang.maSP);
                                        }}
                                    >
                                        Xoá
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* Tổng cộng */}
            {/* <div className="text-right mt-6 text-lg font-semibold text-gray-800">
                Tổng tiền: <span className="text-blue-600">{getTotal().toLocaleString()}₫</span>
            </div> */}
        </div>
    );
};

export default GioHang;
