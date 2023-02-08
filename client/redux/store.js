import { configureStore } from "@reduxjs/toolkit";
import global from "./globalSlice";

export const store = configureStore({
  reducer: {
    global,
  },
});
