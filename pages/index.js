import React from "react";
import { Product, HeroBanner } from "../components";
import client from "../lib/sanity.js";

const Home = ({ products, bannerData }) => {
    return (
        <>
            <HeroBanner data={bannerData?.length && bannerData[0]} />

            <div className="flex flex-col items-center ">
                <h2 className="font-bold text-3xl color text-slate-700">Best Selling Products</h2>
            </div>
            <div className="flex gap-2 p-4 flex-wrap justify-center">
                {products?.map(product => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </>
    );
};

export const getServerSideProps = async () => {
    const queryProducts = '*[_type == "product"]';
    const products = await client.fetch(queryProducts);
    const queryBanner = '*[_type == "banner"]';
    const bannerData = await client.fetch(queryBanner);

    return {
        props: {
            products,
            bannerData
        }
    };
};

export default Home;
