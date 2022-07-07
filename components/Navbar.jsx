import Link from "next/link.js";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-rose-500 rounded-b-lg py-3">
            <p className="text-rose-100 text-2xl font-bold mx-2">
                <Link href="/"> FastSocks </Link>
            </p>
            <button className="relative mx-4">
                <HiOutlineShoppingBag className="text-4xl text-rose-100" />
                <span className="absolute bg-slate-200 w-6 h-6 flex justify-center items-center rounded-full font-bold top-5 -right-2">1</span>
            </button>
        </div>
    );
};

export default Navbar;
