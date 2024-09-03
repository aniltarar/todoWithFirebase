import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const { reset } = todoSlice.actions;
export default todoSlice.reducer;
