import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiRequest from "../../api/ApiRequest";

const initialState = {
  loading: false,
};

export const appLoadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setAppLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAppLoading } = appLoadingSlice.actions;

export default appLoadingSlice.reducer;
