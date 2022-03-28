import React, { Component } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch} from 'react-redux';
import { useLocation } from 'react-router';
import { createRolessAsync } from '../../Redux/reducers/emsReducer';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingOverlay from 'react-loading-overlay-ts';
toast.configure()

export default function RoleForm (){
    const dispatch = useDispatch();
    const {state} = useLocation();

    const schema = yup.object().shape({
        name:yup.string().required("Enter name").min(1).max(30),
        description:yup.string().required("Enter description").min(15),

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
                <div className="grid"><p className=" text-black font-bold text-2xl mt-10" >Create New Role</p></div>
                <Formik 
                    initialValues={{name:'',description:''}}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        const data = {
                            name:values.name,
                            description:values.description
                        }
                        dispatch(createRolessAsync(data)).then((value)=>console.log(value));
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
                                    Name<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.name && touched.name && errors.name}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="description">
                                    Description<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.description && touched.description && errors.description}</h6>
                            </div>

                            <div className="flex items-center justify-center">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4
                               rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Create Role
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }

