import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
	name: 'users',
	initialState: {
		nombre: 'Tobias',
		edad: 20,
		skills: [
			{ name: 'Angular', learned: 2020 },
			{ name: 'React', learned: 2023 },
		],
	},
	reducers: {
		saveNombre: (state, action) => {
			state.nombre = action.payload;
		},
		modifyArray: (state, action) => {
			const { index, newName, newLearned } = action.payload;
			state.skills[index].name = newName;
			state.skills[index].learned = newLearned;
		},
		newItem: (state, action) => {
			const { newName, newLearned } = action.payload;
			state.skills = [...state.skills, { name: newName, learned: newLearned }];
    },
    deleteItem: (state, action) => {
      const item = action.payload;
      state.skills = state.skills.filter(i => i.name !== item);
    }
	},
});

export const pointsSlice = createSlice({
	name: 'points',
	initialState: { points: 20 },
	reducers: {
		incrementPoints: (state) => {
			state.points = state.points + 1;
		},
	},
});

export const { saveNombre } = usersSlice.actions;
export const { incrementPoints } = pointsSlice.actions;
export const { modifyArray } = usersSlice.actions;
export const { newItem } = usersSlice.actions;
export const { deleteItem } = usersSlice.actions;
