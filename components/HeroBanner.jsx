import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";
import { getImageUrl, urlFor } from "../lib/sanity.js";

const HeroBanner = ({ data }) => {
    if (!data) {
        return <></>;
    }
    console.log(data);
    return (
        <div className="   ">
            <div className="grid grid-cols-2 max-w-7xl mx-auto">
                <div className="flex flex-col  items-center p-4">
                    <p className="text-lg text-center text-slate-500">{data.smallText}</p>
                    <h3 className="text-6xl font-extrabold text-slate-600">{data.midText}</h3>
                    <div className="w-72 h-72 relative">
                        <Image className="w-full h-6 object-contain" src={getImageUrl(data.image)} alt="hero-banner" layout="fill" />
                    </div>
                </div>
                <div className="flex flex-col justify-center p-4">
                    <Link href={`/product/${data.product}`}>
                        <button className=" w-fit mx-auto  text-slate-100 text-2xl bg-rose-500 p-2 rounded m-2 shadow-lg" type="button">
                            {data.buttonText}
                        </button>
                    </Link>
                    <div className="flex flex-col items-center">
                        <h5 className="text-md text-slate-600">description</h5>
                        <p className="text-lg text-slate-700">{data.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
