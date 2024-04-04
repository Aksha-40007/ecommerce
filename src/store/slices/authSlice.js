import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as apiUtils from "./apiUtils";
import * as JWT from "jwt-decode";
import { backendUrl } from "../../axios/axiosInstance";

export const register = createAsyncThunk(
  "registerUser",
  async (credentials) => {
    try {
      const response = await apiUtils.apiRequestHandler(
        `${backendUrl}/auth/register`,
        "POST",
        credentials
      );
      apiUtils.toastHandler('User registered successfully!', 'success');
      return response.data.token;
    } catch (error) {
      apiUtils.toastHandler(error.response.data.message, 'error');
      throw error;
    }
  }
);

export const login = createAsyncThunk(
  "authLogin",
  async (credentials) => {
    try {
      const response = await apiUtils.apiRequestHandler(
        `${backendUrl}/auth/login`,
        "POST",
        credentials
      );
      const { token } = response.data;
      apiUtils.toastHandler('User logged in successfully!', 'success');
      return token;
    } catch (error) {
      errorHandler(error, 'Unable to login');
    }
  }
);

export const removeAuthUser = createAsyncThunk(
  "authLogout",
  async (_, { dispatch }) => {
    try {
      window.localStorage.clear();
      dispatch({ type: 'RESET_STATE' });
    } catch (error) {
      errorHandler(error, 'Logout Failed');
    }
  }
);

const errorHandler = (error, errorMessage) => {
  if (error.response.status === 404) {
    apiUtils.toastHandler('User not registered. Please register first before login!!', 'error');
  } else {
    apiUtils.toastHandler(errorMessage, 'error');
    throw error;
  }
};

const authUserSlice = createSlice({
  name: "auth",
  initialState: {
    authToken: localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null,
    user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
    status: "idle",
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    RESET_STATE: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "success";
        state.isAuthenticated = true;
        state.authToken = action.payload;
        localStorage.setItem("token", state.authToken);
        state.user = JWT.jwtDecode(action.payload);
        localStorage.setItem("user", JSON.stringify(state.user.userId));
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.error.message || "Login Failed";
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "success";
        state.isAuthenticated = true;
        state.authToken = action.payload;
        localStorage.setItem("token", state.authToken);
        let temp= JWT.jwtDecode(action.payload) ;
        temp=temp.userId;
        state.user=temp;
        localStorage.setItem("user", JSON.stringify(temp));
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.error.message || "Login Failed";
      })
      .addCase(removeAuthUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeAuthUser.fulfilled, (state) => {
        state.status = "idle";
        state.isAuthenticated = false;
        state.user = null;
        state.authToken = null;
      })
      .addCase(removeAuthUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Logout Failed";
      });
  },
});

export const authUserStore = (state) => state.currentAuthUser;

export const selectAuthToken = (state) => state.auth.authToken;

export default authUserSlice.reducer;
