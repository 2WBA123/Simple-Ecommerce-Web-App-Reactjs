import React, { useEffect,useState } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch,useSelector} from 'react-redux';
import { getDepartmentsAsync,getRolesAsync,createUserAsync } from '../../Redux/reducers/emsReducer';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingOverlay from 'react-loading-overlay-ts';
toast.configure()

export default function UserForm (){
    const dispatch = useDispatch();
    const state = useSelector(state=>state);
    console.log(state)

   //const [department, setDep]=useState([]);
    const [roles, setRoles]=useState([]);
    
    console.log(roles)

    const schema = yup.object().shape({
        fname:yup.string().required("Enter first name").min(1).max(30),
        lname:yup.string().required("Enter last name").min(1).max(30),
        gender:yup.string().required("Select gender "),
        age:yup.number().required("Enter age").min(1).max(30),
        email:yup.string().required("Enter email").email(),
        password:yup.string().required("Please Enter your password").test("regex","Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase", val => {
           let regExp = new RegExp(
              "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
           );
        console.log(regExp.test(val), regExp, val);
        return regExp.test(val);
      }),
       phoneno:yup.number().required("Enter phone number ").min(11),
       role:yup.string().required("Select Position"),
       department:yup.string().required("Select department"),
      });

    //   const Signup=async(data)=>{
    //     try{
    //        const res = await SIGNUP(data);
    //        console.log(res)
    //        const token=localStorage.getItem(TOKEN_KEY);
    //        console.log("<===> TOKEN <===>",token);
    //        toast.success('SignUp Successfully', { theme: "colored" })
    //     }catch(error){
    //         if(error.response.status === 401){
    //             toast.error("Invalid Credentials", { theme: "colored" })
    //          }
    //          if(error.response.status === 500){
    //             toast.error("Something Went Wrong", { theme: "colored" })
    //          }
    //          if(error.response.status === 409){
    //             toast.error("Email Alreay Exits", { theme: "colored" })
    //          }
    //     }
    // }
    useEffect(()=>{
        dispatch(getDepartmentsAsync()).then((res)=>console.log(res));
        dispatch(getRolesAsync()).then((res)=>console.log(res));
      },[]);
    
        return (
            <div className="flex flex-col justify-center  items-center  px-10">
                <div className="grid"><p className=" text-black font-bold text-2xl mt-10" >Create New Employee</p></div>
                <Formik 
                    initialValues={{fname:'',lname:'',gender:'',age:'',email: '', password: '',phoneno:'',role:'',department:''}}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        const idd =state.employee.Departments.filter((val)=>{if(val.name===values.department)
                            {
                                return val._id
                            }});

                         const idr =state.employee.Roles.filter((val)=>{if(val.name===values.role)
                                {
                                    return val._id
                                }});
                           
                        const data = {
                            fname:values.fname,
                            lname:values.lname,
                            email: values.email,
                            age:values.age,
                            password: values.password,
                            phone:values.phoneno,
                            role:idr[0]._id,
                            department:idd[0]._id,
                            gender:values.gender,

                            

                        }
                        console.log(data);
                        dispatch(createUserAsync(data)).then((value)=>console.log(value));
                        // Signup(data)
                        actions.resetForm();
                    }}

                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form className="bg-gray-200 shadow rounded px-4 pt-6 pb-8  my-10 w-1/2 " onSubmit={handleSubmit}>
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                                   First Name<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="fname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fname}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.fname && touched.fname && errors.fname}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                                   Last Name<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="lname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lname}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.lname && touched.lname && errors.lname}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                                    Email<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.email && touched.email && errors.email}</h6>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="stock">
                                    Password <span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                                text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.password && touched.password && errors.password}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                                    Phone Number<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="phoneno"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phoneno}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.phoneno && touched.phoneno && errors.phoneno}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="gender">
                                    Gender<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="gender"
                                    list='gender'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gender}
                                />
                                <datalist id="gender">
                                  <option value="male"/>
                                  <option value="female"/>
                                </datalist>
                                <h6 className="text-red-600 text-sm font-bold">{errors.gender && touched.gender && errors.gender}</h6>
                            </div>
                              
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="gender">
                                    Age<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="number"
                                    name="age"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.age}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.age && touched.age && errors.age}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="role">
                                    Position<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="role"
                                    list='role'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.role}
                                />
                                <datalist id="role">
                                {
                                        state.employee.Roles.map((val)=>(<option value={val.name}/>))

                                    }
                                    </datalist>
                                <h6 className="text-red-600 text-sm font-bold">{errors.role && touched.role && errors.role}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="department">
                                    Department<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="department"
                                    list='department'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.department}
                                />
                                <datalist id="department">
                                    {
                                        state.employee.Departments.map((val)=>(<option value={val.name}/>))

                                    }
                                 </datalist>
                                <h6 className="text-red-600 text-sm font-bold">{errors.department && touched.department && errors.department}</h6>
                            </div>

                            <div className="flex items-center justify-center">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4
                               rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Create Employee
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }

