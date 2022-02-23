import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: [],
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name.push(action.payload);
    },
    // delete: (state, action) => {
    //   state.name.filter(a=>action.payload)
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {add} = UserSlice.actions;

export default UserSlice.reducer;
