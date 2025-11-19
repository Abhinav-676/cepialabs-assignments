import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import favoritesReducer from "./slices/favorites";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    favorites: favoritesReducer
  },
});

export {store};