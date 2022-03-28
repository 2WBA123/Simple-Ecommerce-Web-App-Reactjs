import React, { Component } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch} from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingOverlay from 'react-loading-overlay-ts';
import { verifyPasswordAsync } from '../Redux/reducers/emsReducer';
toast.configure()

export default function UpdatePassword (){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {state} = useLocation();
    const schema = yup.object().shape({
        token:yup.string().required("Please Enter Token that have sent to your email"),
        password:yup.string().required("Please Enter your password").test("regex","Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase", val => {
            let regExp = new RegExp(
               "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
            );
         console.log(regExp.test(val), regExp, val);
         return regExp.test(val);
       }),
      });

    
        return (
            <div className="flex flex-col justify-center  items-center  bg-opacity-30 px-10">
                <div className="grid"><p className=" text-black font-bold text-2xl mt-10" >Create New Password</p></div>
                <Formik 
                    initialValues={{token:'',password:''}}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        const data = {
                            token:values.token,
                            password:values.password,
                        }
                       dispatch(verifyPasswordAsync(data)).then((value)=>console.log(value));
                        // Signup(data)
                        actions.resetForm();
                        navigate('/')
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
                                    Token<span className="text-red-500"> *</span>
                                </label>
                                <input autoComplete="false"
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="token"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.token}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.token && touched.token&& errors.token}</h6>
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
                                    Change Password
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }

