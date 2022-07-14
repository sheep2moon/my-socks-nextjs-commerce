import React from "react";
import FormInput from "./FormInput.jsx";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaCity } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { TbBarcode } from "react-icons/tb";

const CheckoutForm = () => {
    return (
        <div className="flex flex-col items-start p-2 gap-4 mx-auto">
            <FormInput label={"First Name"} icon={<BsFillPersonFill />}>
                <input className="outline-none px-2" type="text" id="First Name" />
            </FormInput>
            <FormInput label={"Second Name"} icon={<BsFillPersonFill />}>
                <input className="outline-none px-2" type="text" id="Second Name" />
            </FormInput>
            <FormInput label={"Address"} icon={<FaAddressBook />}>
                <input className="outline-none px-2" type="text" id="Address" />
            </FormInput>
            <FormInput label={"City"} icon={<FaCity />}>
                <input className="outline-none px-2" type="text" id="City" />
            </FormInput>
            <FormInput label={"Zipcode"} icon={<TbBarcode />}>
                <input className="outline-none px-2" type="text" id="Zipcode" />
            </FormInput>
            <FormInput label={"Phone"} icon={<BsFillTelephoneFill />}>
                <input className="outline-none px-2" type="text" id="Phone" />
            </FormInput>
        </div>
    );
};

export default CheckoutForm;
