import React, {useEffect} from 'react';
import PostsTable from './postsTable';
import { GET_POSTS } from '../components/services/queries';
import { useDispatch, useSelector } from 'react-redux';
import {addPosts} from './redux/reducers/postsReducers';


export default function Posts (){
    const dispatch=useDispatch();

    const paginationHandler=(pageNum)=>{
        this.setState({ currentPage:pageNum});
    }
    const getAllPost= async ()=>{
        try{
          const res = await GET_POSTS();
          console.log(res.data);
        //  this.setState({postsData:res.data})
        dispatch(addPosts(res.data))
        }catch(error){
           console.log(error.message)
        }
      }
    
    
      useEffect(()=>{
        getAllPost();
      },[]);
    
        // const lastIndex=this.state.currentPage*this.state.dataPerPage
        // const firstIndex=lastIndex-this.state.dataPerPage
        // const postsdata=this.state.postsData.slice(firstIndex,lastIndex)
        // var pageNumbers = [];
        // for (let i = 1; i <= Math.ceil(this.state.postsData.length / this.state.dataPerPage); i++) {
        //     pageNumbers.push(i);
        // }

        return (
            <>
            <div className='m-2 w-full'>
            {/* <PostsTable  data={postsdata} nop={pageNumbers} paginationHandler={paginationHandler}/> */}
            <PostsTable />
            </div>
             
            </>
        )
    }

