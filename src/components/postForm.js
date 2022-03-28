import React, { Component } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { ADD_POST, GET_POST_COMMENT } from '../components/services/queries';
import { useDispatch, useSelector } from 'react-redux';

export default  function  PostForm (){
   const schema = yup.object().shape({
        title:yup.string().required("Title Required").min(1).max(30),
        body:yup.string().required("Post Description Required").min(10).max(100),
        
        // createdOn: yup.date().default(function () {
        //   return new Date();
        // }),
      });
      const state = useSelector()

   const commentSchema = yup.object().shape({
        postId:yup.string().required("postId Required").min(1).max(1).matches(/[0-9]/,"enter id between 0 to 9"),
      });
    
   const addPost=async(data)=>{
        try{
          const res = await ADD_POST(data);
          console.log(res)
          alert("Post Added Successfully !!");
        }catch(error){
          console.log(error.message)
        }
    }
   const getComment=async(id)=>{
        try{
          const res = await GET_POST_COMMENT(id);
          console.log(res);
          this.setState({comments:res.data});
        }catch(error){
          console.log(error.message)
        }
    }

    
        return (
            <div className="grid grid-cols-2 grid-flow-row">
                <Formik  
                    initialValues={{ title: '', body: '' }}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        const data = {
                            userId:1,
                            id:101,
                            title: values.title,
                            body: values.body,
                        }
                        addPost(data);
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
                            <div className="grid"><p className="ml-24 text-black font-bold text-xl" >Add New Post</p></div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
                                    Title<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                                text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="title"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.title}
                                />
                                <p className="text-red-600 text-sm font-bold">{errors.title && touched.title && errors.title}</p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="body">
                                    Body<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    name="body"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.body}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.body && touched.body && errors.body}</h6>
                            </div>
                            

                            <div className="flex items-center justify-center">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4
                             rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Save Post
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
                <div>
                <Formik 
                    initialValues={{postId:''}}
                    validationSchema={commentSchema}
                    onSubmit={(values, actions) => {
                        
                        getComment(values.postId);
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
                            <div className="grid"><p className="ml-24 text-black font-bold text-xl" >Get Comment for a Post</p></div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
                                    Post Id<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                                text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="postId"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.postId}
                                />
                                <p className="text-red-600 text-sm font-bold">{errors.postId && touched.postId && errors.postId}</p>
                            </div>


                            <div className="flex items-center justify-center">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4
                             rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Get Comment
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
                <div class="m-10 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200 ">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th  scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                                post Id
                                            </th>
                                            <th  scope="col" class="px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th  scope="col" class="px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th  scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                                Body
                                            </th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                       {this.state.comments.map((val,index)=>{
                                           return(<tr>
                                            <td class="px-2 py-4 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    
                                                    <div class="ml-4">
                                                        <div class="text-sm font-medium text-gray-900">
                                                            {val.postId}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
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
                                                <div class="grid  items-center">
                                                    
                                                    <div class="ml-4">
                                                        <div class="text-sm font-medium text-gray-900">
                                                            {val.email}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-2 py-4 whitespace-nowrap">
                                                <div class="grid  items-center">
                                                    
                                                    <div class="ml-4">
                                                        <div class="text-sm font-medium text-gray-900">
                                                            {val.body}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                       )})
                                         }
                                    </tbody>
                                   
                                </table>
                              
                            </div>
                </div>
                
            </div>
        )
    }

