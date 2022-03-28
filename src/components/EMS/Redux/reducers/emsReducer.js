import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import { CREATE_DEPARTMENT, CREATE_LEAVE, CREATE_PAYROLL, CREATE_QUALIFICATION, CREATE_ROLE, CREATE_SALARY, CREATE_USER, DELETE_USER, FORGET_PASSWORD, GET_ALL_DEPARTMENTS,
	 GET_ALL_ROLES, GET_ALL_USER, GET_LEAVE, GET_LEAVES, GET_PAYROLL, GET_QUALIFICATION, GET_QUALIFICATIONS, GET_SALARIES, GET_SALARY, UPDATE_FORGET_PASSWORD, UPDATE_PASSWORD, UPDATE_USER} from '../../services/services';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export const createUserAsync = createAsyncThunk(
	'employee/createUserAsync',
	async (payload) => {
        try {
            const res = await CREATE_USER(payload);
            console.log(res);
			toast.success('User Created Successfully', { theme: "colored" })
            return res
        } catch (error) {
            console.log(error.message)
        }
		// const resp = await fetch('http://localhost:7000/todos');
		// if (resp.ok) {
		// 	const todos = await resp.json();
		// 	return { todos };
		// }
	}
);

export const updatePasswordAsync = createAsyncThunk(
	'employee/updatePasswordAsync',
	async (payload) => {
        try {
            const res = await UPDATE_PASSWORD(payload);
            console.log(res);
			toast.success('Password Updated Successfully', { theme: "colored" })
            return res
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const getUsersAsync = createAsyncThunk(
	'employee/getUserAsync',
	async (payload) => {
        try {
            const res = await GET_ALL_USER();
            console.log(res);
            return res.data		
        } catch (error) {
            console.log(error.message)
        }
		// const resp = await fetch('http://localhost:7000/todos');
		// if (resp.ok) {
		// 	const todos = await resp.json();
		// 	return { todos };
		// }
	}
);

export const getDepartmentsAsync = createAsyncThunk(
	'employee/getDepartmentsAsync',
	async () => {
        try {
            const res = await GET_ALL_DEPARTMENTS();
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const getRolesAsync = createAsyncThunk(
	'employee/getRolesAsync',
	async (payload) => {
        try {
            const res = await GET_ALL_ROLES(payload);
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const createDepartmentsAsync = createAsyncThunk(
	'employee/createDepartmentsAsync',
	async (payload) => {
        try {
            const res = await CREATE_DEPARTMENT(payload);
            console.log(res);
			toast.success('Department Created Successfully', { theme: "colored" })
            return res.data
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const createRolessAsync = createAsyncThunk(
	'employee/createRolesAsync',
	async (payload) => {
        try {
            const res = await CREATE_ROLE(payload);
            console.log(res);
			toast.success('Role Created Successfully', { theme: "colored" })
            return res.data
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const deleteUserAsync = createAsyncThunk(
	'employee/deleteUserAsync',
	async (payload) => {
        try {
            const res = await DELETE_USER(payload);
            console.log(res);
			toast.success('User Deleted Successfully', { theme: "colored" })
            return res.data
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const updateUserAsync = createAsyncThunk(
	'employee/updateUserAsync',
	async (payload) => {
        try {
            const res = await UPDATE_USER(payload);
            console.log(res);
			toast.success('User Updated Successfully', { theme: "colored" })
            return res.data
        } catch (error) {
            console.log(error.message)
        }
	}
);
//QUALIFICATION
export const createQualificationAsync = createAsyncThunk(
	'employee/createQualificationAsync',
	async (payload) => {
        try {
            const res = await CREATE_QUALIFICATION(payload);
            console.log(res);
			toast.success('User Qualification Added', { theme: "colored" })
            return res
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const getQualificationsAsync = createAsyncThunk(
	'employee/getQualificationsAsync',
	async () => {
        try {
            const res = await GET_QUALIFICATIONS();
            console.log(res);
			//toast.success('User Qualification Added', { theme: "colored" })
            return res
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const getQualificationAsync = createAsyncThunk(
	'employee/getQualificationAsync',
	async (id) => {
        try {
            const res = await GET_QUALIFICATION(id);
            console.log(res);
			//toast.success('User Qualification Added', { theme: "colored" })
            return res
        } catch (error) {
            console.log(error.message)
        }
	}
);
// LEAVE
export const createLeaveAsync = createAsyncThunk(
	'employee/createLeaveAsync',
	async (payload) => {
        try {
            const res = await CREATE_LEAVE(payload);
            console.log(res);
			toast.success('User Leave Added', { theme: "colored" })
            return res
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const getLeavesAsync = createAsyncThunk(
	'employee/getLeaveSAsync',
	async () => {
        try {
            const res = await GET_LEAVES();
            console.log(res);
			//toast.success('User Leave Added', { theme: "colored" })
            return res
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const getOneLeaveAsync = createAsyncThunk(
	'employee/getOneLeaveAsync',
	async (id) => {
        try {
            const res = await GET_LEAVE(id);
            console.log(res);
			//toast.success('User PayRoll Added', { theme: "colored" })
            return res
        } catch (error) {
            console.log(error.message)
        }
	}
);
//SALARY
export const createSalaryAsync = createAsyncThunk(
	'employee/createSalaryAsync',
	async (payload) => {
        try {
            const res = await CREATE_SALARY(payload);
            console.log(res);
			toast.success('User Salary Added', { theme: "colored" })
            return res
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const getSalariesAsync = createAsyncThunk(
	'employee/getSalariesAsync',
	async () => {
        try {
            const res = await GET_SALARIES();
            console.log(res);
			//toast.success('User Salary Added', { theme: "colored" })
            return res
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const getSalaryAsync = createAsyncThunk(
	'employee/getSalaryAsync',
	async (id) => {
        try {
            const res = await GET_SALARY(id);
            console.log(res);
			//toast.success('User Salary Added', { theme: "colored" })
            return res
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const createPayrollAsync = createAsyncThunk(
	'employee/createPayrollAsync',
	async (payload) => {
        try {
            const res = await CREATE_PAYROLL(payload);
            console.log(res);
			toast.success('User PayRoll Added', { theme: "colored" })
            return res
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const getPayrollAsync = createAsyncThunk(
	'employee/getPayrollAsync',
	async (id) => {
        try {
            const res = await GET_PAYROLL(id);
            console.log(res);
			//toast.success('User PayRoll Added', { theme: "colored" })
            return res
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const forgetPasswordAsync = createAsyncThunk(
	'employee/forgetPasswordAsync',
	async (payload) => {
        try {
            const res = await FORGET_PASSWORD(payload);
            console.log(res);
			toast.success('Verification Link Sent', { theme: "colored" })
            return res.data
        } catch (error) {
            console.log(error.message)
        }
	}
);

export const verifyPasswordAsync = createAsyncThunk(
	'employee/verifyPasswordAsync',
	async (payload) => {
        try {
            const res = await UPDATE_FORGET_PASSWORD(payload);
            console.log(res);
			toast.success('Password Updated Successfully', { theme: "colored" })
            return res.data
        } catch (error) {
            console.log(error.message)
        }
	}
);



export const postSlice = createSlice({
	name: 'employees',
	initialState:{
		User:[],
		Departments:[],
		Roles:[],
		Leave:[],
		Qualification:[],
		Salary:[],
        Payroll:[]
	},
	reducers: {
		
	},
    extraReducers:{
        [createUserAsync.fulfilled]: (state, action) => {
			state=action.payload
		},
		[createDepartmentsAsync.fulfilled]: (state, action) => {
			state=action.payload
		},
		[createRolessAsync.fulfilled]: (state, action) => {
			state=action.payload
		},
		[getUsersAsync.fulfilled]: (state, action) => {
			console.log(action.payload)
			state.User=action.payload.employee
		},
		[getDepartmentsAsync.fulfilled]: (state, action) => {
			console.log(action.payload);
		    state.Departments=action.payload.department
		},
		[getRolesAsync.fulfilled]: (state, action) => {
			console.log(action.payload)
			state.Roles=action.payload.data
		},
		[updateUserAsync.fulfilled]: (state, action) => {
			state=action.payload
		},
		[updatePasswordAsync.fulfilled]: (state, action) => {
			state=action.payload
		},
		[forgetPasswordAsync.fulfilled]: (state, action) => {
			state=action.payload
		},
		[verifyPasswordAsync.fulfilled]: (state, action) => {
			state=action.payload
		},
		[createQualificationAsync.fulfilled]: (state, action) => {
			state=action.payload
		},
		[getQualificationsAsync.fulfilled]: (state, action) => {
			console.log(action.payload)
			state=action.payload
		},
		[getQualificationAsync.fulfilled]: (state, action) => {
			console.log(action.payload)
			state.Qualification=action.payload.data
		},
		[createLeaveAsync.fulfilled]: (state, action) => {
			state=action.payload
		},
		[getLeavesAsync.fulfilled]: (state, action) => {
			state=action.payload
		},
		[getOneLeaveAsync.fulfilled]: (state, action) => {
			console.log(action.payload)
			state.Leave=action.payload.data
		},
		[getSalariesAsync.fulfilled]: (state, action) => {
			state=action.payload
		},
		[getSalaryAsync.fulfilled]: (state, action) => {
			console.log(action.payload)
			state.Salary=action.payload.data
		},
		[createSalaryAsync.fulfilled]: (state, action) => {
			
			state=action.payload
		},
		[createPayrollAsync.fulfilled]: (state, action) => {
			state=action.payload
		},
		[getPayrollAsync.fulfilled]: (state, action) => {
			console.log(action.payload)
			state.Payroll=action.payload.data.payrollDetails
		},
		
		
    }
});

export const { addPosts } = postSlice.actions;

export default postSlice.reducer;