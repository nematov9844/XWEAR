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

// Like slice
export const likeSlice = createSlice({
  name: "like",
  initialState: loadState("like") || { likedItems: [] },
  reducers: {
    addLike: (state, action) => {
      const productId = action.payload.id;
      // Ensure the product is added only if it's not already liked
      if (!state.likedItems.find(item => item.id === productId)) {
        state.likedItems.push(action.payload);
      }
    },
    removeLike: (state, action) => {
        console.log(action.payload);
      state.likedItems = state.likedItems.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addLike, removeLike } = likeSlice.actions;
