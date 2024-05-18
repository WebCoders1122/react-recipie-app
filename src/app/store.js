import { configureStore } from "@reduxjs/toolkit";
import recipieReducer from "../features/Recipie/recipieSlice";
export const store = configureStore({
  reducer: {
    recipie: recipieReducer,
  },
});
