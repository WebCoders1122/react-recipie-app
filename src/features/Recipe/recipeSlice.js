import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRecipes } from "./recipeAPI";

//this is initial state
const initialState = {
  recipes: [],
  loading: false,
  darkMode: null,
  error: null,
  search: null,
  favorites: [],
};

export const fetchRecipesAsync = createAsyncThunk(
  "recipe/fetchRecipes",
  async (searchValue) => {
    if (searchValue == "") return;
    const response = await fetchRecipes(searchValue);
    return response.json();
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
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      console.log("add", action.payload, state.favorites);
    },
    removeFavorite: (state, action) => {
      console.log("remove", action.payload);

      state.favorites.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipesAsync.fulfilled, (state, action) => {
        state.loading = false;
        action.payload.data
          ? (state.recipes = action.payload.data.recipes)
          : null;
      })
      .addCase(fetchRecipesAsync.rejected, (state, error) => {
        state.loading = false;
        state.error = error;
        console.log(error);
      });
  },
});

export const { setDarkMode, setSearch, addFavorite, removeFavorite } =
  recipeSlice.actions;

export default recipeSlice.reducer;
