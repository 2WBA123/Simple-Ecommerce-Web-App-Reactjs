import React, { Component } from 'react'
import { render } from 'react-dom';
import { useNavigate} from 'react-router';
import {Link} from 'react-router-dom';
import { ROLE_KEY, TOKEN_KEY } from '../../../constants/constant';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const NavBar=()=> {
      const navigate  = useNavigate(); 
      const role = localStorage.getItem(ROLE_KEY)
      const token = localStorage.getItem(TOKEN_KEY)
      console.log(role)
      const logout=async()=>{
          localStorage.removeItem(TOKEN_KEY);
          const token=localStorage.getItem(TOKEN_KEY);
          console.log("token in logout",token)
          navigate('/')
          toast.success('You Are Logout', { theme: "colored" })
      }
      if(role==="Admin"){
        return (
            <div>
                <nav className="flex justify-between items-center h-16 bg-white relative shadow-sm font-mono" role="navigation">
                    <p  className="pl-8 no-underline font-bold text-3xl text-green-500 ">
                        Employee Management System
                    </p>
                    <div className="px-4 cursor-pointer md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </div>
                    {
                        token?<div className="pr-8 md:block hidden ">
                        {/* <Link to="/" className="p-4 no-underline font-bold text-black">Home</Link> */}
                                  <Link to="/home" className="p-4 no-underline font-bold text-black">Home</Link>
                                  <Link to="/departments" className="p-4 no-underline font-bold text-black">Departments</Link>
                                  <Link to="/roles"  className="p-4 no-underline font-bold text-black">Roles</Link>
                                  <Link to="" onClick={()=>logout()} className="p-4 no-underline font-bold text-black">Logout</Link>
  
                                  {/* <Link to="/qual" className="p-4 no-underline font-bold text-black">Qualification</Link> */}
                        {/* <Link to="/genre" className="p-4 no-underline font-bold text-black">Genre</Link>
                        <Link to="/movies" className="p-4 no-underline font-bold text-black">Movies</Link>
                        <Link to="/form" className="p-4 no-underline font-bold text-black">Form</Link> */}
                      </div>:null
                    }
                    
                </nav>
            </div>
        )
      }else{
        return (
            <div>
                <nav className="flex justify-between items-center h-16 bg-white relative shadow-sm font-mono" role="navigation">
                    <p  className="pl-8 no-underline font-bold text-3xl text-green-500 ">
                        Employee Management System
                    </p>
                    <div className="px-4 cursor-pointer md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </div>
                    {
                        token?<div className="pr-8 md:block hidden ">
                        <Link to="/ehome" className="p-4 no-underline font-bold text-black">Home</Link>
                        <Link to="" onClick={()=>logout()} className="p-4 no-underline font-bold text-black">Logout</Link>
                                
                    </div>:null
                    }
                    
                </nav>
            </div>
        )
      }
    
    
    }


export default NavBar;
