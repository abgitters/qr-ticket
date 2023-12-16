import { configureStore } from "@reduxjs/toolkit";
import UserDetailsReducer from "./slices/UserDetailsSlice";

const store = configureStore({
  reducer: {
    user: UserDetailsReducer,
  },
});

export default store;
