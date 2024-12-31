/** @format */

import { createSlice } from "@reduxjs/toolkit";
const loadState = (key) => {
	try {
		const serializedState = localStorage.getItem(key);
		return serializedState ? JSON.parse(serializedState) : undefined;
	} catch (error) {
		console.error("Could not load state from localStorage:", error);
		return undefined;
	}
};

// Shop slice
export const shopSlice = createSlice({
	name: "shop",
	initialState: loadState("shop") || { cartItems: [] },
	reducers: {
		addToCart: (state, action) => {
			const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
			if (existingItem) {
				// Agar mahsulot mavjud bo'lsa, quantity-ni oshiramiz
				existingItem.quantity += action.payload.quantity;
			} else {
				// Aks holda yangi item qo'shamiz
				state.cartItems.push(action.payload);
			}
		},
		removeFromCart: (state, action) => {
			const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
			if (existingItem) {
				// Agar quantity 1-dan katta bo'lsa, quantity-ni kamaytiramiz
				if (existingItem.quantity > 1) {
					existingItem.quantity -= 1;
				} else {
					// Agar quantity 1 bo'lsa, itemni o'chirib tashlaymiz
					state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
				}
			}
		},
		clearCart: (state) => {
			state.cartItems = [];
		},
	},
});

export const { addToCart, removeFromCart, clearCart } = shopSlice.actions;
