import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/resgister",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        error.repsonse.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (slice) => {
      (slice.isError = false),
        (slice.isLoading = false),
        (slice.isSuccess = false),
        (slice.message = "");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, actions) => {
        (state.isSuccess = true),
          (state.user = actions.payload),
          (state.isLoading = false);
      })
      .addCase(register.rejected, (state, actions) => {
        (state.isError = true),
          (state.message = actions.payload),
          (state.user = null);
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
