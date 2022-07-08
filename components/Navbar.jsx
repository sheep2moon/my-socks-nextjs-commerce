import Link from "next/link.js";
import React, { useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Cart from "./Cart.jsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShowCart } from "../redux/cartSlice.js";
import { useState } from "react";
import { FaSocks } from "react-icons/fa";

const Navbar = () => {
    const { cartItems, showCart } = useSelector(store => store.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const dispatch = useDispatch();

    const openCart = () => {
        dispatch(setShowCart(true));
    };

    useEffect(() => {
        let totalPrice = 0;
        let totalQuantity = 0;
        cartItems.forEach(item => {
            totalPrice += parseInt(item.quantity) * parseFloat(item.price);
            totalQuantity += item.quantity;
        });
        setTotalPrice(totalPrice);
        setTotalQuantity(totalQuantity);
    }, [cartItems]);

    return (
        <>
            <div className="flex justify-between items-center bg-white lg:rounded-b-sm py-3  shadow-lg text-teal-900">
                <p className="text-2xl font-bold mx-2 cursor-pointer">
                    <Link href="/">
                        <p className="flex items-center gap-2">
                            <FaSocks />
                            FAST<span className="text-teal-500">SOCKS</span>
                        </p>
                    </Link>
                </p>
                <button className="flex items-center relative mx-4" onClick={openCart}>
                    <span className=" font-medium">{totalPrice.toFixed(2)}$</span>
                    <HiOutlineShoppingBag className="text-4xl " />
                    <span className="absolute bg-teal-900 text-teal-50 w-6 h-6 flex justify-center items-center rounded-full font-bold top-5 -right-2">{totalQuantity}</span>
                </button>
                {showCart && <Cart totalPrice={totalPrice} />}
            </div>
        </>
    );
};

export default Navbar;
