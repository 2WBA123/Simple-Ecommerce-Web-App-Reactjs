import React, { Component } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    schema = yup.object().shape({
        name:yup.string().required("name required").min(1).max(30),
        email:yup.string().required("email required").email(),
        password:yup.string().required("Please Enter your password").test("regex","Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase", val => {
           let regExp = new RegExp(
              "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
           );
        console.log(regExp.test(val), regExp, val);
        return regExp.test(val);
      }
    ),
        // createdOn: yup.date().default(function () {
        //   return new Date();
        // }),
      });

    showData = () => {
        console.log(this.state.users)
    }
    render() {
        return (
            <div className="grid grid-cols-2 grid-flow-row">
                <Formik 
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={this.schema}
                    onSubmit={(values, actions) => {
                        const data = {
                            name: values.name,
                            email: values.email,
                            password: values.password
                        }
                        this.setState(prevState => ({
                            users: [...prevState.users, data]
                        }));
                        this.showData();
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
                        <form className="bg-gray-50 shadow rounded px-8 pt-6 pb-8 mx-28 my-24 " onSubmit={handleSubmit}>
                            <div className="grid"><p className="ml-24 text-black font-bold text-xl" >Signup Here</p></div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
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
                                <p className="text-red-600 text-sm font-bold">{errors.name && touched.name && errors.name}</p>
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

                            <div className="flex items-center justify-center">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4
                             rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Signup
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
                <div className="m-14">
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200 ">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                                    Email
                                                </th>
                                                <th scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                                    Password
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            {this.state.users.map((val, index) => {
                                                return (<tr>
                                                    <td class="px-2 py-4 whitespace-nowrap">
                                                        <div class="flex items-center">

                                                            <div class="ml-4">
                                                                <div class="text-sm font-medium text-gray-900">
                                                                    {val.name}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-2 py-4 whitespace-nowrap">
                                                        <div class="flex items-center">

                                                            <div class="ml-4">
                                                                <div class="text-sm font-medium text-gray-900">
                                                                    {val.email}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-2 py-4 whitespace-nowrap">
                                                        <div class="flex items-center">

                                                            <div class="ml-4">
                                                                <div class="text-sm font-medium text-gray-900">
                                                                    {val.password}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                )
                                            })
                                            }
                                        </tbody>

                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}
