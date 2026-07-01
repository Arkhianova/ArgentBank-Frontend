import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEditingProfile: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setEditionMode: (state, action) => {
      state.isEditingProfile = action.payload;
    }
  },
});

export const { setEditionMode } = profileSlice.actions;
export default profileSlice.reducer;

