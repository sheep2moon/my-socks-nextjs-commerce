import React from "react";
import Head from "next/head";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
    return (
        <div className="max-w-7xl mx-auto">
            <Head>
                <title>FastSocks</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
