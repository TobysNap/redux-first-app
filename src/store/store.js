import { configureStore } from '@reduxjs/toolkit';
import { postsSlice } from './slices';

export default configureStore({
  reducer: {
    posts: postsSlice.reducer 
  }
});
