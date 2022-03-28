import React, { Component } from 'react'

export default class Like extends Component {
    constructor() {
        super();
    
    }

    render() {
        return (
            <button onClick={()=>this.props.likedHandler(this.props.id)} className={this.props.liked ? "bg-green-500 hover:bg-green-100 text-black  py-2 px-4 text-sm font-medium border border-blue-700 rounded" : "bg-white-200 hover:bg-green-100 text-black  py-2 px-4 text-sm font-medium border border-blue-700 rounded"}>
                Like
            </button>
        )
    }
}
