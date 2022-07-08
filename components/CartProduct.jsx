import Image from "next/image.js";
import React, { useState } from "react";
import { useEffect } from "react";
import { useStateContext } from "../context/StateContext.js";
import { getImageUrl } from "../lib/sanity.js";
import QuantityInput from "./QuantityInput.jsx";
import { useDispatch } from "react-redux";
import { editCartQuantity } from "../redux/cartSlice.js";

const CartProduct = ({ product }) => {
    const [quantity, setQuantity] = useState(product.quantity);

    const dispatch = useDispatch();

    useEffect(() => {
        if (product.quantity !== quantity) {
            dispatch(editCartQuantity({ product, quantity }));
        }
    }, [quantity, editCartQuantity, product, dispatch]);

    return (
        <div className="grid grid-cols-[0.5fr_2fr_0.5fr_1fr] items-center p-2 bg-teal-50">
            <div className="relative w-12 h-12 ">
                <Image className="object-cover" src={getImageUrl(product?.image[0])} alt="product-thumb" layout="fill" />
            </div>
            <p className="text-lg">{product.name}</p>
            <p className="">{product.price.toFixed(2)}$</p>
            <QuantityInput value={product.quantity} setValue={setQuantity} />
        </div>
    );
};

export default CartProduct;
