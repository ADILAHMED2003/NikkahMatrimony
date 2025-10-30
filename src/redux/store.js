import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import cartReducer from "./slices/cartSlice";
import notifyReducer from "./slices/notifySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    notify: notifyReducer

  },
});

