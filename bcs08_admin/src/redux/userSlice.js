// The userSlice.js is a part of the Redux Toolkit structure that combines 
// reducers, actions, and constants into a single "slice" of the state

import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  user: null,
};

let userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    // 2 action creators
    setLogin: (state, action) => {
      state.user = action.payload;
      // ko cần return về object mới khi dùng toolkit
    },
    removeLogin: (state, action) => {
      state.user = null;
    },
  },
});

export let { setLogin, removeLogin } = userSlice.actions;
export default userSlice.reducer;
