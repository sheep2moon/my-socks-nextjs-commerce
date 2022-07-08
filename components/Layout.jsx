import React from "react";
import Head from "next/head";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
    const { showCart } = useSelector(store => store.cart);

    return (
        <div className="bg-teal-100 bg-cover 2xl:pt-10 min-h-screen">
            <div className="max-w-7xl mx-auto bg-slate-50 shadow-2xl 2xl:rounded-md overflow-hidden">
                <Head>
                    <title>FastSocks</title>
                </Head>
                <header>
                    <Navbar />
                </header>
                <main className="">{children}</main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
};

export default Layout;
