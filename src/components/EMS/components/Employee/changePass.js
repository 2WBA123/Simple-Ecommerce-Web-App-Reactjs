import React, { Component } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch} from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { getTodosAsync, updatePasswordAsync } from '../../Redux/reducers/emsReducer';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_KEY } from '../../../../constants/constant';
import LoadingOverlay from 'react-loading-overlay-ts';
toast.configure()

export default function ChangePass (){
    const dispatch = useDispatch();
    const {state} = useLocation();
    const navigate = useNavigate();
    const schema = yup.object().shape({
        oldpassword:yup.string().required("Please Enter Old Password"),
        password:yup.string().required("Please Enter your password").test("regex","Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase", val => {
            let regExp = new RegExp(
               "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
            );
         console.log(regExp.test(val), regExp, val);
         return regExp.test(val);
       }),
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

    
        return (
            <div className="flex flex-col justify-center  items-center  bg-opacity-30 px-10">
                <div className="grid"><p className=" text-black font-bold text-2xl mt-10" >Create New Password</p></div>
                <Formik 
                    initialValues={{oldpassword:'',password:''}}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        const data = {
                            oldPassword:values.oldpassword,
                            newPassword:values.password,
                            email:localStorage.getItem(EMAIL_KEY)
                        }
                        dispatch(updatePasswordAsync(data)).then((value)=>console.log(value));
                        navigate('/')
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
                                    Old Password<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="password"
                                    name="oldpassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.oldpassword}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.oldpassword && touched.oldpassword && errors.oldpassword}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                                    New Password<span className="text-red-500"> *</span>
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

                            <div className="flex items-center justify-center">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4
                               rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Save Password
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }

