import { createSlice } from "@reduxjs/toolkit";

const UserDetailsSlice = createSlice({
  name: "user",
  initialState: {
    time: "",
    date: {},
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    gender: "male",
    isVarified: false,
  },
  reducers: {
    addUserDetails: (state, { payload }) => {
      return { ...payload };
    },
  },
});
export const { addUserDetails } = UserDetailsSlice?.actions;

export const selectState = (state) => state?.user;

export default UserDetailsSlice.reducer;
