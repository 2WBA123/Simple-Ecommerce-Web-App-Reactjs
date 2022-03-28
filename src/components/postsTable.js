import React, { Component } from 'react';
import { DELETE_POST } from '../components/services/queries';
import { useDispatch, useSelector } from 'react-redux';

export default function PostsTable() {
    const data = useSelector(state=>state.posts);
    console.log(data)
    
    const deletePost=async(id)=>{
        try{
          const res = await DELETE_POST(id);
          console.log(res)
          alert("post deleted successfully!!")
        }catch(error){
           console.log(error.massage)
        }
    }
    
        return (
            <div className="grid grid-cols-1 m-14 p-10">
                <div class="grid grid-cols-1">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200 ">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th  scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                                User Id
                                            </th>
                                            <th  scope="col" class="px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                                Title
                                            </th>
                                            <th  scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                                Body
                                            </th>
                                            <th  scope="col" class="relative px-6 py-3">
                                                <span class="sr-only">Like</span>
                                            </th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                       {data.map((val,index)=>{
                                           return(<tr>
                                            <td class="px-2 py-4 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    
                                                    <div class="ml-4">
                                                        <div class="text-sm font-medium text-gray-900">
                                                            {val.userId}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-2 py-4 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    
                                                    <div class="ml-4">
                                                        <div class="text-sm font-medium text-gray-900">
                                                            {val.title}
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
                                            <td class="px-2 py-4 whitespace-nowrap">
                                                <div class="grid  items-center">
                                                    
                                                    <div class="ml-4">
                                                       <button onClick={()=>{
                                                           deletePost(val.id)
                                                       }} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Delete</button>
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
                </div>
                {/* <div className='mt-2 justify-center items-center'>  
                    <nav aria-label="Page navigation ">
                    <ul class="pagination">
                    {
                        this.props.nop.map((pageNum)=>(<li key={pageNum} class="page-item "><a class="page-link" onClick={()=>{
                        console.log("page 1");
                        this.props.paginationHandler(pageNum)
                    }} >{pageNum}</a></li>))}
                    </ul>
                </nav>
            </div> */}
            </div>
        )
    }

