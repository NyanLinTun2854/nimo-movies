import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appLoadingSlice from "./appLoading/appLoadingSlice";
import searchProductsSlice from "./searchProducts/searchProductsSlice";

export const store = configureStore({
  reducer: {
    loading: appLoadingSlice,
    searchProducts: searchProductsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
