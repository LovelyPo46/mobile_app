import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],       
  currentUser: null 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.users.push(action.payload);
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload || null;
    },
    logout: (state) => {
      state.currentUser = null;
    }
  }
});

export const { addProfile, setCurrentUser, logout } = userSlice.actions;
export default userSlice.reducer;
