import { configureStore} from "@reduxjs/toolkit";
import { categorySlice } from "./categorySlice";
import { likeSlice } from "./likeSlice";
import { shopSlice } from "./shopSlice";

// LocalStorage helper functions
export const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Could not save state to localStorage:', error);
  }
};





const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    like: likeSlice.reducer,
    shop: shopSlice.reducer,
  },
});

// Subscribe to store updates
store.subscribe(() => {
  saveState('category', store.getState().category);
  saveState('like', store.getState().like);
  saveState('shop', store.getState().shop);
});
export default store;
