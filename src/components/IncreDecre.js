import React, { Component } from 'react'

export default class IncreDecre extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }


    increment1 = () => {
        const c = this.state.count + 1
        this.setState({ count: c });
    }


    decrement1 = () => {
        if (this.state.count === 0) {
            return
        }
        else {
            this.setState({count:this.state.count-1});
        }

    }


    render() {
        return (
            // <div class="h-screen justify-center flex  items-center">
            //     <div className="justify-center flex items-center w-1/2">
            //     <div class="flex flex-col justify-center items-center  h-1/4  w-1/4 ">
            //         <h1 class="rounded-full h-16 w-16 bg-blue-400 text-center align-middle pt-3 text-2xl text-white my-4">{this.state.count}</h1>
            //     </div>
            //     <div class="flex flex-col justify-center   h-1/4 w-1/4">
            //         <button class="h-8 w-1/2 mb-1 hover:bg-green-400 bg-green-500 rounded"  onClick={this.increment1}>increment</button>
            //         <button class="h-8 w-1/2 hover:bg-green-400 bg-green-500 rounded" onClick={this.decrement1}>decrement</button>
            //     </div>
            //     </div>
                
            // </div>
<div>
                <table class="table-auto">
  <thead>
    <tr>
      <th class="w-1/2 ...">Title</th>
      <th class="w-1/4 ...">Author</th>
      <th class="w-1/4 ...">Views</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Intro to CSS</td>
      <td>Adam</td>
      <td>858</td>
    </tr>
    <tr class="bg-blue-100">
      <td className="p-1">A Long and Winding Tour of the History of UI Frameworks.</td>
      <td>Adam</td>
      <td>112</td>
    </tr>
    <tr>
      <td>Intro to JavaScript</td>
      <td>Chris</td>
      <td><button>click me</button></td>
    </tr>
  </tbody>
</table>
            </div>

        )
    }
}
