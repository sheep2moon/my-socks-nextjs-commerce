import React from "react";

const QuantityInput = ({ value, setValue, ...rest }) => {
    const handleSub = () => {
        if (value > 1) {
            setValue(value - 1);
        }
    };
    const handleAdd = () => {
        if (value < 99) {
            setValue(value + 1);
        }
    };

    return (
        <div className="flex items-center w-fit shadow-teal-900 ">
            <ChangeButton onClick={handleSub}>-</ChangeButton>
            <p className="px-2 w-10 text-center">{value}</p>
            <ChangeButton onClick={handleAdd}>+</ChangeButton>
        </div>
    );
};

const ChangeButton = ({ children, ...rest }) => {
    return (
        <button {...rest} className="p-3 w-8 h-8 flex text-slate-50 items-center justify-center text-xl bg-teal-500 font-bold rounded-sm shadow-lg hover:bg-teal-600 transition-all">
            {children}
        </button>
    );
};

export default QuantityInput;
