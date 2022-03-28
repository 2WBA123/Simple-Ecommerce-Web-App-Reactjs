import React from 'react';
import { useNavigate } from 'react-router';
import UserTable from '../UserTable';

const EHome = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="relative h-14 w-full   items-end ">
            <button onClick={()=>navigate('/changepass')} className=' absolute top-10 right-14 hover:text-white outline-black text-blue-700 font-semibold 
             py-2 px-4 border border-blue-500 hover:bg-blue-500 rounded'>
                Change Password
            </button>
            </div>
             <UserTable/>
        </div>
    )
}

export default EHome
