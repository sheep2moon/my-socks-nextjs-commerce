import Image from "next/image.js";
import React from "react";
import { useState } from "react";
import Product from "../../components/Product.jsx";
import QuantityInput from "../../components/QuantityInput.jsx";
import { useDispatch } from "react-redux";

import { client, getImageUrl } from "../../lib/sanity.js";
import { addToCart } from "../../redux/cartSlice.js";
import { useEffect } from "react";

const ProductDetails = ({ product, similar }) => {
    const [quantity, setQuantity] = useState(1);
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        setImgIndex(0);
    }, [product]);

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ product, quantity }));
    };

    return (
        <div>
            <div className="flex justify-center lg:gap-20 gap-10 flex-wrap mx-auto border-b-2 pb-10">
                <div className="flex flex-col mt-4">
                    <div className="relative h-80 w-80 shadow-lg">
                        <Image src={product?.image && getImageUrl(product.image[imgIndex])} alt="product" layout="fill" className="object-contain" />
                    </div>
                    <div className="flex gap-2 w-full  justify-start p-2">
                        {product.image.map((img, index) => (
                            <div key={img.asset._ref} className={`relative border-rose-300 w-24 h-24 shadow-lg ${imgIndex === index ? "border-b-2" : "border-none"}`} onMouseEnter={() => setImgIndex(index)}>
                                <Image src={getImageUrl(img)} layout="fill" alt="product thumb" className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col md:pt-12">
                    <h3 className="text-2xl">{product.name}</h3>
                    <p className="text-xl border-b-2 border-teal-500 w-fit my-1  font-medium">{product.price.toFixed(2)}$</p>
                    <p className="py-2 text-lg">{product.details}</p>
                    <QuantityInput value={quantity} setValue={setQuantity} />
                    <button className="w-fit p-2 bg-slate-500 text-slate-50  font-medium text-xl mt-4 rounded-sm drop-shadow-xl hover:scale-105 transition-all cursor-pointer" onClick={handleAddToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-2xl mt-8  w-full text-center  ">Similar products</h3>
                <div className="w-full flex p-4 flex-wrap justify-center">
                    {similar.slice(0, 5).map(product => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;
    const products = await client.fetch(query);
    const paths = products.map(product => ({ params: { slug: product.slug.current } }));
    return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const queryProduct = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const querySimilar = '*[_type == "product"]';
    const product = await client.fetch(queryProduct);
    const similar = await client.fetch(querySimilar);
    console.log("getProd", product);
    return {
        props: {
            product,
            similar
        }
    };
};

export default ProductDetails;
