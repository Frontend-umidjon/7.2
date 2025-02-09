
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: 'usercrud',
  initialState,
  reducers: {
    createUser: (state, action) => {
      const newUser = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        age: action.payload.age,
        profession: action.payload.profession,
        gender: action.payload.gender,
        bio: action.payload.bio,
      };
      state.value.push(newUser);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user, index) => index !== action.payload);
    },
    updateUser: (state, action) => {
      const { index, updatedUser } = action.payload;
      state.value[index] = { ...state.value[index], ...updatedUser };
    },
  },
});

export const { createUser, deleteUser, updateUser } = counterSlice.actions;

export default counterSlice.reducer;
