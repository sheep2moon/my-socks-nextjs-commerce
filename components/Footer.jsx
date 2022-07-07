import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="flex flex-col items-center">
            <p className="text-rose-700 font-bold">check our social media</p>
            <div className="flex gap-4 text-3xl justify-center">
                <AiOutlineFacebook />
                <AiOutlineInstagram />
                <AiOutlineTwitter />
            </div>
            <p className="mt-2 font-medium">FastSocks 2022 all rights reserved. </p>
        </div>
    );
};

export default Footer;
