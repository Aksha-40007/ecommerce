import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequestHandler, toastHandler } from "./apiUtils";
import { backendUrl } from "../../axios/axiosInstance";

export const placeOrder = createAsyncThunk(
  'order/place',
  async ({ deliveryAddress, paymentMode,token }) => {
    try {
      const response = await apiRequestHandler(`${backendUrl}/order/place`, "POST", { deliveryAddress, paymentMode },token);
      return response.data;
    } catch (error) {
      toastHandler("Please Add address and select paymentMode to place order",error);
      throw error;
    }
  }
);

export const getOrderHistory = createAsyncThunk(
  'order/history',
  async () => {
    try {
      const response = await apiRequestHandler(`${backendUrl}/order/history`, "GET");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderedProducts: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        // Assuming the response data contains updated cart products
        state.orderedProducts = action.payload;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getOrderHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrderHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.orderedProducts = action.payload;
      })
      .addCase(getOrderHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default orderSlice.reducer;
