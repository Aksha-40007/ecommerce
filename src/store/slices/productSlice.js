import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequestHandler, toastHandler } from "./apiUtils";
import { backendUrl } from "../../axios/axiosInstance";

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
  async () => {
    try {
      const response = await apiRequestHandler(`${backendUrl}/product/getallproducts`, "GET");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (productId) => {
    try {
      const response = await apiRequestHandler(`${backendUrl}/product/${productId}`, "GET");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const searchProducts = createAsyncThunk(
  'products/search',
  async (productName) => {
    try {
      const response = await apiRequestHandler(`${backendUrl}/product/search?name=${productName}`, "GET",);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const filterProducts = createAsyncThunk(
  'products/filter',
  async (queryParams) => {
    try {
      const response = await apiRequestHandler(`${backendUrl}/product/filter?${queryParams}`, "GET", );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    productById: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.productById = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(filterProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(filterProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
      })
      .addCase(filterProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })    
  }
});

export default productSlice.reducer;
