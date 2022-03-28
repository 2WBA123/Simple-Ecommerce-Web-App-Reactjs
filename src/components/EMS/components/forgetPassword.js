import React, { Component } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch} from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingOverlay from 'react-loading-overlay-ts';
import { forgetPasswordAsync } from '../Redux/reducers/emsReducer';
toast.configure()

export default function ForgetPassword (){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {state} = useLocation();
    const schema = yup.object().shape({
        email:yup.string().email().required("Please Enter your email"),
        
      });

    
        return (
            <div className="flex flex-col justify-center  items-center  bg-opacity-30 px-10">
                <div className="grid"><p className=" text-black font-bold text-2xl mt-10" >Enter Your Email for Verification</p></div>
                <Formik 
                    initialValues={{email:''}}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        const data = {
                            email:values.email,
                            
                        }
                        dispatch(forgetPasswordAsync(data)).then((value)=>console.log(value));
                        // Signup(data)
                        actions.resetForm();
                        navigate('/updatepass')
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
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
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

                            <div className="flex items-center justify-center">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4
                               rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Send
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }

