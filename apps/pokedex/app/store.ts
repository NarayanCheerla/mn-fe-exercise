import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./features/pokemon/pokemon-slice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
