import React from "react";

const FormInput = ({ label, icon, children }) => {
    return (
        <div className="flex flex-col text-xl">
            <label htmlFor={label}>{label}</label>
            <div className="flex items-center border-2 border-slate-300 rounded-sm shadow-md">
                <div className="border-r-2 p-2 border-slate-300">{icon}</div>
                {children}
            </div>
        </div>
    );
};

export default FormInput;
