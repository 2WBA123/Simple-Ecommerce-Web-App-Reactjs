<Formik 
                    initialValues={{postId:'', name: '',email:'', body: '' }}
                    validationSchema={this.commentSchema}
                    onSubmit={(values, actions) => {
                        const data = {
                            postId:values.postId,
                            id:101,
                            name: values.name,
                            email:values.email,
                            body: values.body,
                        }
                        this.addComment(data);
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
                            <div className="grid"><p className="ml-24 text-black font-bold text-xl" >Comment on a Post</p></div>
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

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
                                    name<span className="text-red-500"> *</span>
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
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
                                    Email<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                                text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="email"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <p className="text-red-600 text-sm font-bold">{errors.email && touched.email && errors.email}</p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="body">
                                    Body<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    name="comment"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.comment}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.comment && touched.comment && errors.comment}</h6>
                            </div>
                            

                            <div className="flex items-center justify-center">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4
                             rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Comment
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>