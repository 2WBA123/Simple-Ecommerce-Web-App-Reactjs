import React, { useEffect } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch,useSelector} from 'react-redux';
import { useLocation } from 'react-router';
import { createQualificationAsync, getRolesAsync, updatePasswordAsync } from '../../Redux/reducers/emsReducer';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_KEY } from '../../../../constants/constant';
import LoadingOverlay from 'react-loading-overlay-ts';
toast.configure()

export default function QualificationForm (){
    const {state} = useLocation();
    const user_id = state.id;
    console.log(user_id)
    const dispatch = useDispatch();
    const state1 = useSelector(state=>state);
    console.log(state1)
    const schema = yup.object().shape({
        date_in:yup.date().required('date is rquired'),
        role:yup.string().required("Select Position"),
        requirements:yup.string().required('Enter requirements')
      });


      useEffect(()=>{
        
        dispatch(getRolesAsync()).then((res)=>console.log(res));
        
      },[]);
        return (
            <div className="flex flex-col justify-center  items-center  bg-opacity-30 px-10">
                <div className="grid"><p className=" text-black font-bold text-2xl mt-10" >Add Qualification Details</p></div>
                <Formik 
                    initialValues={{role:'',requirements:'',date_in:''}}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        const idr =state1.employee.Roles.filter((val)=>{if(val.name===values.role)
                            {
                                return val._id
                            }});
                        const data = {
                            position:values.role,
                            requirements:values.requirements,
                            date_in:values.date_in,
                            employeeId:user_id    
                        }
                        dispatch(createQualificationAsync(data)).then((res)=>console.log(res));
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
                                        state1.employee.Roles.map((val)=>(<option value={val.name}/>))

                                    }
                                    </datalist>
                                <h6 className="text-red-600 text-sm font-bold">{errors.role && touched.role && errors.role}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                                    Requirements<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="requirements"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.requirements}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.requirements && touched.requirements && errors.requirements}</h6>
                            </div>
                           
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                                    Date<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="date"
                                    name="date_in"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.date_in}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.date_in && touched.date_in && errors.date_in}</h6>
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

