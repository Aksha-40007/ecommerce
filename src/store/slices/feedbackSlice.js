import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiRequestHandler, toastHandler } from "./apiUtils";
import { backendUrl } from "../../axios/axiosInstance";

export const feedbackSubmit = createAsyncThunk(
  'feedback/submit',
  async ({ type, description,token }) => {
    try {
      const response = await apiRequestHandler(`${backendUrl}/feedback/submit`, "POST", { type, description },token);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


const feedbackSlice = createSlice({
  name: 'cart',
  initialState: {
    feedback: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(feedbackSubmit.pending, (state) => {
        state.loading = true;
      })
      .addCase(feedbackSubmit.fulfilled, (state, action) => {
        state.loading = false;
        // Assuming the response data contains updated cart products
        state.feedback = action.payload;
      })
      .addCase(feedbackSubmit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
});

export default feedbackSlice.reducer;
