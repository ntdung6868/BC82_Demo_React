import React from "react";

const ProductCard2 = (props) => {
    let { sp } = props;
    // console.log("🚀 ~ ProductCard2 ~ sp:", sp);
    return (
        <div className="max-w-sm rounded-lg shadow-lg bg-white m-4">
            <img className="w-full  object-cover rounded-t-lg" src={sp.hinhAnh} alt="Card image" />
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{sp.tenSP}</h2>
                <p className="mt-2 text-gray-600">
                    This is a simple card component built with React and styled using Tailwind CSS.
                </p>
                <button
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                    onClick={() => props.handleChangeSp(sp)}
                >
                    Xem Chi tiết
                </button>
                {/* <Link to={`/dtdd/${sp.maSP}`}>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                        Xem Chi tiết
                    </button>
                </Link> */}
            </div>
        </div>
    );
};

export default ProductCard2;
