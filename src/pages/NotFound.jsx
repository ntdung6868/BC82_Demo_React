import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-10">
            <h1 className="text-6xl">404 Page not found</h1>
            <p className="text-xl max-w-2xl text-center">
                Looks like something's broken. It's not you its us. How about going back to the home page?
            </p>
            <Link to="/" className="p-3 bg-blue-500 rounded-2xl text-white">
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
