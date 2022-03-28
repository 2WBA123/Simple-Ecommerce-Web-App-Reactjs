import React, { Component } from 'react';
import { movies } from './Data';

export default class Table extends Component {
    
    render() {
        return (
            <div className="m-14">
                <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200 ">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th  scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                                Title 
                                            </th>
                                            <th  scope="col" class="px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                                Genre
                                            </th>
                                            <th  scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                                Stock
                                            </th>
                                            <th  scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                                Rate
                                            </th>
                                            <th  scope="col" class="relative px-6 py-3">
                                                <span class="sr-only">Like</span>
                                            </th>
                                            <th scope="col" class="relative px-6 py-3">
                                                <span class="sr-only">Delete</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                       {movies.map((val,index)=>{
                                           return(<tr>
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
                                                <div class="flex items-center">
                                                    
                                                    <div class="ml-4">
                                                        <div class="text-sm font-medium text-gray-900">
                                                            {val.genre.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-2 py-4 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    
                                                    <div class="ml-4">
                                                        <div class="text-sm font-medium text-gray-900">
                                                            {val.numberInStock}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-2 py-4 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    
                                                    <div class="ml-4">
                                                        <div class="text-sm font-medium text-gray-900">
                                                            {val.dailyRentalRate}
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
                </div>
                <div>
            </div>
            </div>
        )
    }
}
