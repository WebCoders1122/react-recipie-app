import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRecipes } from "./recipeAPI";

//this is initial state
const initialState = {
  recipes: [],
  loading: false,
  darkMode: null,
};

export const fetchRecipesAsync = createAsyncThunk(
  "recipe/fetchRecipes",
  async (searchValue) => {
    if (searchValue == "") return;
    const response = await fetchRecipes(searchValue);
    return await response.json();
  }
);

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload.data.recipes;
        console.log(action.payload.data.recipes);
      });
  },
});

export const { setDarkMode, setSearch } = recipeSlice.actions;

export default recipeSlice.reducer;
