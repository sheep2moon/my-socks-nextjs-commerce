import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cartItems: [],
    showCart: false,
    totalPrice: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (!state.cartItems.find(item => item._id === action.payload.product._id)) {
                state.cartItems = [...state.cartItems, { ...action.payload.product, quantity: action.payload.quantity }];
            }
            toast.success(`${action.payload.product.name} added to cart`);
        },
        setShowCart: (state, action) => {
            state.showCart = action.payload;
        },
        editCartQuantity: (state, action) => {
            let el = state.cartItems.find(item => item._id === action.payload.product._id);
            el.quantity = action.payload.quantity;
            const idx = state.cartItems.indexOf(el);
            let newCart = state.cartItems;
            newCart[idx] = el;
            state.cartItems = newCart;
        }
    }
});

export const { addToCart, setShowCart, editCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;
