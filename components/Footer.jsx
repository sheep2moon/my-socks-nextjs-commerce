import Link from "next/link.js";
import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <div className="rounded-b-lg font-bold bg-contain text-teal-900 border-y-2">
                <div className="flex flex-col items-center  gap-2 p-4">
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Privacy Policy</Link>
                </div>
            </div>
            <div className="flex bg-teal-union justify-center gap-4 items-center p-2 ">
                <div className="flex gap-4 text-3xl justify-center">
                    <AiOutlineFacebook />
                    <AiOutlineInstagram />
                    <AiOutlineTwitter />
                </div>
                <p className="mt-2 font-medium">FastSocks 2022 all rights reserved. </p>
            </div>
        </>
    );
};

export default Footer;
