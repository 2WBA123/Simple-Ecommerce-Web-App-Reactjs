import React, { useEffect } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch,useSelector} from 'react-redux';
import { useLocation } from 'react-router';
import { createPayrollAsync, getSalaryAsync} from '../../Redux/reducers/emsReducer';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_KEY } from '../../../../constants/constant';
import LoadingOverlay from 'react-loading-overlay-ts';
toast.configure()

export default function PayRollForm(){
    const dispatch = useDispatch();
    const {state} = useLocation();
    const id = state.id;
    const state1 = useSelector(state=>state);
    console.log(state1)
    const schema = yup.object().shape({
        date:yup.date().required('date is rquired'),
        report:yup.string().required('Enter report '),
        // tamount:yup.number().required('Enter total amount')
      });
      useEffect(()=>{
        
        dispatch(getSalaryAsync(id)).then((res)=>console.log(res));
        
      },[]);
        return (
            <div className="flex flex-col justify-center  items-center  bg-opacity-30 px-10">
                <div className="grid"><p className=" text-black font-bold text-2xl mt-10" >Add Payroll Details</p></div>
                <Formik 
                    initialValues={{date:'',report:'',tamount:''}}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        const data = {
                           date:values.date,
                           report:values.report,
                           total_amount:parseInt(state1.employee.Salary[0].amount)+parseInt(state1.employee.Salary[0].bonus),
                           employeeId:id
                        }
                        console.log(data)
                        dispatch(createPayrollAsync(data)).then((value)=>console.log(value));
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
                                    Date<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="date"
                                    name="date"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.date}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.date && touched.date && errors.date}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                                    Report<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="report"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.report}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.report && touched.report && errors.report}</h6>
                            </div>

                            {/* <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                                    Total Amount<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="number"
                                    name="tamount"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.tamount}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.tamount && touched.tamount && errors.tamount}</h6>
                            </div> */}

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

