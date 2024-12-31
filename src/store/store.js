import { configureStore, createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: { selectedCategoryId: null },
  reducers: {
    setCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const { setCategoryId } = categorySlice.actions;

const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
  },
});

export default store;
