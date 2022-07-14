import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";
import { getImageUrl } from "../lib/sanity.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice.js";

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ product, quantity: 1 }));
    };

    return (
        <div className="flex flex-col p-2 items-center shadow-lg">
            <Link href={`/product/${product.slug.current}`}>
                <div className="relative w-48 h-48 hover:scale-105 transition-all">
                    <Image src={getImageUrl(product.image[0])} layout="fill" alt="product look" className="object-contain" />
                </div>
            </Link>
            <div className="flex flex-col">
                <Link href={`/product/${product.slug.current}`}>
                    <p className="font-medium cursor-pointer">{product.name}</p>
                </Link>

                <div className="w-full flex justify-between items-center">
                    <p className="font-semibold text-slate-900">{product.price.toFixed(2)}$</p>
                    <button type="button" onClick={handleAddToCart} className="font-bold border-b-4 border-teal-700 rounded-sm">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
