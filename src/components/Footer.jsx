import React from "react";

function Footer() {
    return (
        <footer className="bg-[#1d1d1d] p-4 text-white text-center rounded-t-2xl shadow-inner">
            <p>&copy; {new Date().getFullYear()} Product Catalog. All rights reserved.</p>
        </footer>
    )
}

export default Footer;