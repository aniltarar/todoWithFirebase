import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";
import todoReducer from "./slices/todo/todoSlice";



export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos:todoReducer
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
