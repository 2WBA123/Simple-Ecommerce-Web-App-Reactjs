import { configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/postsReducers';

export default configureStore({
	reducer: {
		posts: postReducer,
	},
});