import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../redux/UserSlice'
export const store = configureStore({
  reducer: {
    user:UserReducer
  },
})