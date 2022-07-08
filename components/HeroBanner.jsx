import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";
import { getImageUrl, urlFor } from "../lib/sanity.js";
import { GiCottonFlower, GiSprint } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import socksPres from "../assets/socks-pres.svg";

const HeroBanner = ({ data }) => {
    if (!data) {
        return <></>;
    }
    console.log(data);
    return (
        <div className="mb-10  m-1 relative bg-hero-bg bg-cover">
            <div className="absolute top-0 left-0 bottom-0 right-0 "></div>
            <div className="grid grid-cols-1 max-w-7xl mx-auto lg:grid-cols-1">
                {/* <div className=" bg-hero-socks bg-contain flex flex-col  items-center p-4 z-10 ">
                    <div className="w-72 h-72 relative">
                        <Image className="w-full h-6 object-contain" src={socksPres} alt="hero-banner" layout="fill" />
                    </div>
                </div> */}
                <div className="flex flex-col justify-center p-4 z-10  bg-contain rounded-md m-2 ">
                    <div className="flex flex-col bg-white/50 w-fit mx-auto pr-6 pl-11 py-8 rounded-md">
                        <div className="flex flex-col items-center">
                            <ul className="text-2xl  flex flex-col gap-2 ">
                                <ListItem icon={<GiSprint />}>Fastest on the market</ListItem>
                                <ListItem icon={<MdDesignServices />}>Unique design</ListItem>
                                <ListItem icon={<GiCottonFlower />}>High quality cotton</ListItem>
                            </ul>
                        </div>
                        <Link href={`/product/${data.product}`}>
                            <button className="  w-fit mx-auto   text-2xl bg-teal-grain text-teal-900 font-bold px-4 py-2 rounded m-2 shadow-lg" type="button">
                                {data.buttonText}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ListItem = ({ children, icon }) => (
    <li className="flex items-center gap-2 bg-teal-500 pr-4 rounded-r-lg text-white">
        <span className="text-teal-500 w-12 h-12 grid place-items-center bg-white rounded-full relative -left-6">{icon}</span>
        {children}
    </li>
);

export default HeroBanner;
