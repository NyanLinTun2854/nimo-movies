import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiRequest from "../../api/ApiRequest";

const initialState = {
  searchName: "",
  products: [],
};

export const searchProducts = createAsyncThunk(
  "search/searchProducts",
  async (value, { rejectWithValue }) => {
    console.log(value);
    try {
      let response = await ApiRequest(value);
      console.log(response);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const searchProductsSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchName: (state, action) => {
      state.searchName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.products = action.payload.data.results;
    });
  },
});

export const { setSearchName } = searchProductsSlice.actions;

export default searchProductsSlice.reducer;
