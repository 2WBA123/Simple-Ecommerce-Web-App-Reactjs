import React, { Component } from 'react'
import { movies } from './Data';

export default class form extends Component {
    constructor(props) {
        super(props);
        this.state = {movie:[{
            _id: "5b21ca3eeb7f6fbccd471821",
            title: "The Avengers",
            genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
            numberInStock: 7,
            dailyRentalRate: 3.5
            }]};
    
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleSubmit(event) {
        event.preventDefault();       
      const data={
            _id:"abcd",
            title:event.target.title.value,
            genre:{_id:"abab",name:event.target.genre.value},
            numberInStock:event.target.stock.value,
            dailyRentalRate:event.target.rentalRate.value,
        }
        this.setState(prevState => ({
            movie: [...prevState.movie,data]
          }));
        console.log(this.state.movie)
        alert('Form was submitted: ');
        event.target.reset();
      }
    render() {
        return (
            <div className="w-full  justify-center items-center">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mx-28 my-24" onSubmit={this.handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
                            Title
                        </label>
                        <input name="title" className="appearance-none border rounded w-full py-2 px-3
                         text-gray-700 leading-tight focus:outline-black " id="title" type="text" placeholder="title" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                            Genre
                        </label>
                        <input name="genre" className="appearance-none border rounded w-full py-2 px-3
                         text-gray-700 leading-tight focus:outline-black " id="genre" type="text" placeholder="genre" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="stock">
                            Stock
                        </label>
                        <input name="stock" className=" appearance-none border rounded w-full py-2 px-3
                         text-gray-700 leading-tight focus:outline-black " id="stock" type="text" placeholder="stock" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="rentalRate" >
                            Rental Rate
                        </label>
                        <input name="rentalRate" className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                        text-gray-700 mb-3 leading-tight focus:outline-black" id="rentalRtate"  placeholder="rental rate" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
                         rounded focus:outline-none focus:shadow-outline" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
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
                                       {this.state.movie.map((val,index)=>{
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
            </div>
        )
    }
}
