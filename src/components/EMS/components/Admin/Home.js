import React from 'react'
import { useNavigate } from 'react-router';
import UserTable from '../UserTable';


const Home = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className="relative h-14 w-full items-end ">
            <button onClick={() => { navigate('/newuser', { state: { id: 7,flag:"edit"} }); }} className=' absolute top-10 right-14 bg-green-500 hover:text-blue-400 outline-black text-white font-semibold 
             py-2 px-4 border border-blue-500 hover:bg-green-400 rounded'>
                Create User
            </button>
            </div>
        <UserTable/>
        </>
    )
}

export default Home
