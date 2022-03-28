import React, { Component } from 'react';
import Table from './Table';
import { movies } from './Data';
import { genres } from './genreData';
import ListGroup from 'react-bootstrap/ListGroup';


export default class Home extends Component {
  constructor() {
    super();
    this.likedHandler = this.likedHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.paginationHandler=this.paginationHandler.bind(this);
    this.sortDataByTitle=this.sortDataByTitle.bind(this);

    this.state = {
      moviesData: movies,
      dataPerPage:3,
      currentPage:1
    }  
  }

  likedHandler = (id) => {
    console.log("liked")
    this.setState(this.state.moviesData.map((val) => {
      if (val._id === id) {
        if (val.liked) {
          return val.liked = false;
        } else {
          return val.liked = true;
        }
      }

    }));
  }

  paginationHandler=(pageNum)=>{
      this.setState({ currentPage:pageNum});
  }

  deleteHandler = (delargs) => {
    console.log("delete")
    let data = this.state.moviesData.filter(val => val._id !== delargs)
    this.setState({ moviesData: data });
  }

  filterHandler = (id) => {
    console.log("filtering");
    let data = movies.filter(val => val.genre._id === id)
    this.setState({ moviesData: data });
  }

  sortDataByTitle=(sortArg)=>{
    console.log("sorting");
    this.setState(
      this.state.moviesData.sort((a, b) => {
        if (a[sortArg] < b[sortArg]) {
          return -1;
        }
        if (a[sortArg] > b[sortArg]) {
          return 1;
        }
        return 0;
      })
    )  
  }


  render() {
    const lastIndex=this.state.currentPage*this.state.dataPerPage
    const firstIndex=lastIndex-this.state.dataPerPage
    const moviesPerPage=this.state.moviesData.slice(firstIndex,lastIndex)
    var pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.state.moviesData.length / this.state.dataPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
      <>
        <div className="ml-14 mt-10">
          <h1 className="text-2xl">Showing {this.state.moviesData.length} movies in database.</h1>
        </div>
        <div className="flex flex-row justify-center ">
          <div className="mt-14 mr-10">
            <ListGroup className="ListGroup">
              <ListGroup.Item  className="font-bold">Genre</ListGroup.Item>
              {
                genres.map((val) => (<ListGroup.Item className="hover:text-blue-300" onClick={() => this.filterHandler(val._id)}>{val.name}</ListGroup.Item>))
              }
            </ListGroup>
          </div>
          <Table deleteHandler={this.deleteHandler} data={moviesPerPage}
            likedHandler={this.likedHandler}
            isliked={this.state.moviesData.liked} paginationHandler={this.paginationHandler}
             nop={pageNumbers}  sortDataByTitle={this.sortDataByTitle} />   
        </div>
        
        {/* <IncreDecre/>
    <NavBar/>
    <Hero/> */}
      </>
    );
  }
}


