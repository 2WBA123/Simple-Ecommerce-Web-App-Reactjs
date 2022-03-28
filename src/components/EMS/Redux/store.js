import { configureStore } from '@reduxjs/toolkit';
import empReducer from './reducers/emsReducer';

export default configureStore({
	reducer: {
		employee: empReducer,
	},
});