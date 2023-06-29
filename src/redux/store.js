import { configureStore } from "@reduxjs/toolkit";
import appLoadingSlice from "./appLoading/appLoadingSlice";

export const store = configureStore({
  reducer: {
    loading: appLoadingSlice,
  },
});
