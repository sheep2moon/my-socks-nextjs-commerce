import React from "react";
import CartProduct from "./CartProduct.jsx";
import { MdArrowBackIos } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setShowCart } from "../../redux/cartSlice.js";
import Link from "next/link.js";

const Cart = ({ totalPrice }) => {
    const { cartItems, showCart } = useSelector(store => store.cart);

    const dispatch = useDispatch();

    const handleCloseCart = () => {
        dispatch(setShowCart(false));
    };

    return (
        <>
            <span onClick={handleCloseCart} className={`${showCart ? "block fixed top-0 left-0 right-0 bottom-0 bg-slate-900/40 z-10" : "bg-none"} transition-all`}></span>
            <div className={`fixed z-20 right-0 top-0 h-screen w-full max-w-lg bg-white shadow-lg`}>
                <div className="flex flex-col h-full">
                    <button type="button" onClick={handleCloseCart} className=" w-full p-2 flex items-center text-xl border-b-2 border-teal-500 ">
                        <MdArrowBackIos />
                        <p>Back to shopping</p>
                    </button>
                    {cartItems.length > 0 ? (
                        <div className="flex flex-col gap-2">
                            {cartItems.map(product => (
                                <CartProduct key={product._id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <p className="my-auto w-full text-center text-2xl">Your cart is empty.</p>
                    )}
                    <div className="flex justify-around border-t-2 items-center mt-auto p-4">
                        <p className="font-bold text-lg">{totalPrice.toFixed(2)}$</p>
                        <Link href="/checkout">
                            <button className="bg-teal-grain p-2 px-6 rounded-sm hover:scale-105 shadow-lg text-teal-50 font-bold text-xl">Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
