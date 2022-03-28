import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router';
import {toast} from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch,useSelector } from 'react-redux';
import { getRolesAsync } from '../../Redux/reducers/emsReducer';
import LoadingOverlay from 'react-loading-overlay-ts';
toast.configure();

const Role = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [roles,setRoles] = useState([])
    const [isActive, setActive] = useState(false)
    const state = useSelector(state=>state);
    console.log(state)


    useEffect(() => {
        setActive(true);
        dispatch(getRolesAsync()).then((value)=>{
            console.log(value);
            setActive(false);
        });
    }, []);
    return (
        <>
        <div className="relative h-14 w-full items-end mt-10 ">
            <button onClick={() => { navigate('/roleform', { state: { id: 7,flag:"edit"} }); }} className=' absolute right-14 bg-green-500 hover:text-blue-400 outline-black text-white font-semibold 
             py-2 px-4 border border-blue-500 hover:bg-green-400 rounded'>
                Create Role
            </button>
        </div>
        <LoadingOverlay
                active={isActive}
                spinner
                text='Loading your content...'
                >
        <div className="mt-14 w-full flex flex-col justify-center items-center">
            <div class="w-1/2">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200 ">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                   { state.employee.Roles.map((val)=>( <tr>
                                        <td class="px-2 py-4 whitespace-nowrap">
                                            <div class="flex items-center">

                                                <div class="ml-4">
                                                    <div class="text-sm font-medium text-gray-900">
                                                        {val.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-2 py-4 whitespace-nowrap">
                                            <div class="flex items-center">

                                                <div class="ml-4">
                                                    <div class="text-sm font-medium text-gray-900">
                                                        {val.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                  ))}
                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
        </LoadingOverlay>
        </>
    )
}

export default Role
