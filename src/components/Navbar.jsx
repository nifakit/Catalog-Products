import React from "react";  
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-[#1d1d1d] p-4 text-white text-center shadow-md mb-8 rounded-b-2xl font-semibold ">
            <Link to="/about" className="p-2 hover:bg-[#2d2d2d] transition rounded-lg">About</Link>
            <Link to="/products" className="p-2 hover:bg-[#2d2d2d] transition rounded-lg">Products</Link>
        </nav>
    )
}
export default Navbar;