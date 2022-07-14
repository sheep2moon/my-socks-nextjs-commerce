import React from "react";
import CheckoutCart from "../components/Checkout/CheckoutCart.jsx";
import CheckoutForm from "../components/Checkout/CheckoutForm.jsx";
import DeliveryMethod from "../components/Checkout/DeliveryMethod.jsx";
import client from "../lib/sanity.js";

const Checkout = ({ delivery }) => {
    return (
        <div className="grid grid-cols-2 pt-10 ">
            <CheckoutForm />
            <div className="flex flex-col">
                <CheckoutCart />
                <DeliveryMethod delivery={delivery} />
            </div>
        </div>
    );
};

export const getServerSideProps = async () => {
    const queryDelivery = '*[_type == "delivery"]';
    const delivery = await client.fetch(queryDelivery);

    return {
        props: {
            delivery
        }
    };
};

export default Checkout;
