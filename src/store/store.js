import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
import tabReducer from "./tabSlice";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),

  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    tab: tabReducer,
  },
});

export default store;
