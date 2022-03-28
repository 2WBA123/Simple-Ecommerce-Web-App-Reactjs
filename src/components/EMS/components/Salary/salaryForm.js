import React, { Component } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector} from 'react-redux';
import { useLocation } from 'react-router';
import { createSalaryAsync } from '../../Redux/reducers/emsReducer';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_KEY } from '../../../../constants/constant';
import LoadingOverlay from 'react-loading-overlay-ts';
toast.configure()

export default function SalaryForm (){
    const {state} = useLocation();
    const user_id = state.id;
    console.log(user_id)
    const state1 = useSelector(state=>state);
    console.log(state1)
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        amount:yup.number().required('salary is rquired').min(1),
        anual:yup.number().required('enter anual salary').min(1),
        bonus:yup.string().required('Enter requirements').min(1)
      });


    
        return (
            <div className="flex flex-col justify-center  items-center  bg-opacity-30 px-10">
                <div className="grid"><p className=" text-black font-bold text-2xl mt-10" >Enter Salary Details</p></div>
                <Formik 
                    initialValues={{amount:'',anual:'',bonus:''}}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        const data = {
                            amount:values.amount,
                            annual:values.anual,
                            bonus:values.bonus,
                            employeeId:user_id
                            
                        }
                        dispatch(createSalaryAsync(data)).then((value)=>console.log(value));
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
                                    Amount<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="number"
                                    name="amount"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.amount}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.amount && touched.amount && errors.amount}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                                    Anual<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="number"
                                    name="anual"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.anual}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.anual && touched.anual && errors.anual}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                                    Bonus<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="number"
                                    name="bonus"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.bonus}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.bonus && touched.bonus && errors.bonus}</h6>
                            </div>



                            <div className="flex items-center justify-center">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4
                               rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Save 
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }

