import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import client from "../lib/sanity.js";

const Home = ({ products, bannerData }) => {
    return (
        <>
            <HeroBanner data={bannerData?.length && bannerData[0]} />
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-3xl color text-slate-700">Best Selling Products</h2>
                <p className="text-slate-600 text-lg">perfect shop for u</p>
            </div>
            <div className="flex">
                {products?.map(product => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
            <FooterBanner />
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
