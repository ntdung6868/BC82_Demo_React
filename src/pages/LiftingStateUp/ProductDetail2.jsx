import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail2 = (props) => {
    // const { id } = useParams();
    // console.log("🚀 ~ ProductDetail2 ~ id:", id);
    // const { mangSanPham } = props;
    // console.log("🚀 ~ ProductDetail2 ~ mangSanPham:", mangSanPham);
    // Tìm sản phẩm theo id
    // const spChiTiet = mangSanPham.find((sp) => sp.maSP == id);
    const { spChiTiet } = props;
    const { setSpGioHang } = props;
    // console.log("🚀 ~ ProductDetail2 ~ spChiTiet:", spChiTiet);
    console.log("🚀 ~ ProductDetail2 ~ setSpGioHang:", setSpGioHang);
    // Kiểm tra nếu spChiTiet không tồn tại
    if (!spChiTiet) {
        return <div>Không có thông tin sản phẩm</div>;
    }

    return (
        <div className="flex max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Left: Image */}
            <div className="w-1/2">
                <img src={spChiTiet.hinhAnh} alt={spChiTiet.tenSP} className="w-full h-full object-cover" />
            </div>

            {/* Right: Product Details */}
            <div className="w-1/2 p-6">
                <p className="text-sm text-gray-500 mt-1">ID: {spChiTiet.maSP}</p>
                <h2 className="text-xl font-bold text-gray-800">{spChiTiet.tenSP}</h2>
                <p className="text-lg font-semibold text-green-600 mt-2">
                    {(spChiTiet.giaBan / 1000000).toFixed(1)} triệu VNĐ
                </p>
                <div className="text-gray-600 mt-3">
                    <p>
                        <strong>Màn hình:</strong> {spChiTiet.manHinh}
                    </p>
                    <p>
                        <strong>Hệ điều hành:</strong> {spChiTiet.heDieuHanh}
                    </p>
                    <p>
                        <strong>Camera trước:</strong> {spChiTiet.cameraTruoc}
                    </p>
                    <p>
                        <strong>Camera sau:</strong> {spChiTiet.cameraSau}
                    </p>
                    <p>
                        <strong>RAM:</strong> {spChiTiet.ram}
                    </p>
                    <p>
                        <strong>ROM:</strong> {spChiTiet.rom}
                    </p>
                </div>
                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => {
                        setSpGioHang((prevGioHang) => {
                            // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
                            const existingProduct = prevGioHang.find((item) => item.maSP === spChiTiet.maSP);

                            if (existingProduct) {
                                // Nếu sản phẩm đã có, tăng số lượng
                                return prevGioHang.map((item) =>
                                    item.maSP === spChiTiet.maSP ? { ...item, soLuong: item.soLuong + 1 } : item
                                );
                            } else {
                                // Nếu sản phẩm chưa có, thêm mới với số lượng là 1
                                return [
                                    ...prevGioHang,
                                    {
                                        maSP: spChiTiet.maSP,
                                        tenSP: spChiTiet.tenSP,
                                        giaBan: spChiTiet.giaBan,
                                        hinhAnh: spChiTiet.hinhAnh,
                                        soLuong: 1,
                                    },
                                ];
                            }
                        });
                    }}
                >
                    Them vao gio hang
                </button>
            </div>
        </div>
    );
};

export default ProductDetail2;
