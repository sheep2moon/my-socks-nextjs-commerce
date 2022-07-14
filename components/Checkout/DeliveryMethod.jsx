import React from "react";

const DeliveryMethod = ({ delivery }) => {
    console.log(delivery);

    const handleDeliveryOption = option => {
        console.log(option);
    };

    return (
        <div className="flex flex-col text-lg">
            <h3 className="border-b-2 mb-2 border-teal-500">Delivery</h3>
            <fieldset>
                {delivery.map(option => (
                    <div key={option.name}>
                        <input type="radio" name="delivery" id={option.name} onClick={() => handleDeliveryOption(option)} />
                        <label htmlFor={option.name}>
                            <span className="px-2">{option.price.toFixed(2)}$</span>
                            {option.name}
                        </label>
                    </div>
                ))}
            </fieldset>
        </div>
    );
};

export default DeliveryMethod;
