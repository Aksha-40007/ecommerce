import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequestHandler, toastHandler } from "./apiUtils";
import { backendUrl } from "../../axios/axiosInstance";

export const addToCart = createAsyncThunk(
  'cart/add',
  async ({ productId, quantity,token }) => {
    try {
      const data = {
        productId,
        quantity
      };
      const response = await apiRequestHandler(`${backendUrl}/cart/add`,"POST",data,token);
      return response.data;
    } catch (error) {
      toastHandler("Please Add product to cart",error);
      throw error;
    }
  }
);

export const updateCart = createAsyncThunk('cart/update',async({productId,quantity,token})=>{
  try {
    const data = {
      productId,
      quantity
    };
    const response = await apiRequestHandler(`${backendUrl}/cart/update`,"PUT",data,token);
    return response.data;
  } catch (error) {
    throw error;
  }
})

export const getCartProducts = createAsyncThunk(
  'cart/getCartProducts',
  async ({token}) => {
    try {
      const response = await apiRequestHandler(`${backendUrl}/cart/getcartproducts`, "GET",null,token);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProducts: {},
    productCount:0,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartProducts = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartProducts = action.payload;
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCartProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCartProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.cartProducts = action.payload;
        state.productCount=state.cartProducts.count;
      })
      .addCase(getCartProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default cartSlice.reducer;
