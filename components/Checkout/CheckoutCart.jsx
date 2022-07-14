import React from "react";
import { useSelector } from "react-redux";

const CheckoutCart = () => {
    const { cartItems, totalPrice } = useSelector(store => store.cart);

    console.log(cartItems);

    return (
        <div className="flex flex-col p-2 text-lg">
            <h3 className="border-b-2 mb-2 border-teal-500">Summary</h3>
            <ul className="flex flex-col text">
                {cartItems.map((product, index) => (
                    <li className="grid shadow-md  grid-cols-[0.1fr_1fr_0.2fr_0.2fr_0.3fr] p-2" key={product._id}>
                        <span>{index + 1}</span>
                        <span>{product.name}</span>
                        <span>{product.quantity}</span>
                        <span>{product.price.toFixed(2)}$</span>
                        <span className="text-right">{(product.quantity * product.price).toFixed(2)}$</span>
                    </li>
                ))}
            </ul>
            <div className="flex justify-end p-2 ">
                <p className="mr-4">total:</p>
                <p>{totalPrice.toFixed(2)}$</p>
            </div>
        </div>
    );
};

export default CheckoutCart;
