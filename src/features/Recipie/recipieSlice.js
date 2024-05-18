import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRecipies } from "./recipieAPI";

//this is initial state
const initialState = {
  recipies: [],
  loading: false,
};

export const fetchRecipiesAsync = createAsyncThunk(
  "recipie/fetchRecipies",
  async (searchValue) => {
    const response = await fetchRecipies(searchValue);
    return response.data;
  }
);

export const recipieSlice = createSlice({
  name: "recipie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipiesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipiesAsync.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      });
  },
});

// export const { increment, decrement, incrementByAmount } = recipieSlice.actions;

export default recipieSlice.reducer;
