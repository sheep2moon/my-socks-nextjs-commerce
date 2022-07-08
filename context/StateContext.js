import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    //Calculate total price every cart items change
    useEffect(() => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        console.log(total);
        setTotalPrice(total);
    }, [cartItems]);

    const getTotalPrice = {};

    const addToCart = (product, qty) => {
        console.log(cartItems);
        if (!cartItems.find(item => item._id === product._id)) {
            setCartItems([...cartItems, { ...product, quantity: qty }]);
            toast.success(`${product.name} added to cart`);
        }
    };

    const editCartQuantity = (product, qty) => {
        let el = cartItems.find(item => item._id === product._id);
        console.log(el);
        el.quantity = qty;
        const idx = cartItems.indexOf(el);
        let newCart = cartItems;
        newCart[idx] = el;
        setCartItems(newCart);
    };

    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                addToCart,
                setShowCart,
                editCartQuantity
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
