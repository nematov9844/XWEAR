/** @format */

import { createSlice } from "@reduxjs/toolkit";
const loadState = (key) => {
	try {
	  const serializedState = localStorage.getItem(key);
	  return serializedState ? JSON.parse(serializedState) : undefined;
	} catch (error) {
	  console.error('Could not load state from localStorage:', error);
	  return undefined;
	}
  };
  

// Category slice
export const categorySlice = createSlice({
	name: "category",
	initialState: loadState("category") || { selectedCategoryId: null },
	reducers: {
		setCategoryId: (state, action) => {
			state.selectedCategoryId = action.payload;
		},
	},
});

export const { setCategoryId } = categorySlice.actions;
