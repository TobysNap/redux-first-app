import { configureStore } from '@reduxjs/toolkit';
import { pointsSlice, usersSlice } from './slices';

export default configureStore({
  reducer: {
    users: usersSlice.reducer,
    points: pointsSlice.reducer,
  }
});
