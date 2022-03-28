import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
	name: 'posts',
	initialState:[],
	reducers: {
		addPosts: (state, action) => {
			
			const newPosts = action.payload
			console.log("reducer>>",newPosts)

			return state=newPosts;
		},
	},
});

export const { addPosts } = postSlice.actions;

export default postSlice.reducer;