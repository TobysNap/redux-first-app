import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
	name: 'posts',
	initialState: { nombre: 'Tobias' },
  reducers: {
    saveNombre: (state, action) => {
      state.nombre = action.payload;
    }
  },
});

export const { saveNombre } = postsSlice.actions;