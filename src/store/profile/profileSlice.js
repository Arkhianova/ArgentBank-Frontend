import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  firstName: null,
  lastName: null,
  username: null,
  id: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.username = action.payload.username;
      state.id = action.payload.id;
    },
    updateProfile: (state, action) => {
      state.username = action.payload.username;
    }
  },
});

export const { setProfile, updateProfile } = profileSlice.actions;
export default profileSlice.reducer;

