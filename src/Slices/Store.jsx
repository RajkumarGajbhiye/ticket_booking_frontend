import { configureStore } from '@reduxjs/toolkit';
import SeatsSlice from "../Slices/SeatsSlice"

export default configureStore({
  reducer: {
    SeatsSlice
  },
})