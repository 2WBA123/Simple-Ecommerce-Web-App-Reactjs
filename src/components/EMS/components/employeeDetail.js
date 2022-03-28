import React,{useEffect,useState}from 'react';
import { useNavigate, useLocation } from 'react-router';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay-ts';
import { getOneLeaveAsync, getPayrollAsync, getQualificationAsync, getSalaryAsync } from '../Redux/reducers/emsReducer';
import { ROLE_KEY } from '../../../constants/constant';
toast.configure();

const EmployeeDetail = () => {
    const role = localStorage.getItem(ROLE_KEY);
    const {state} = useLocation();
    console.log(state.data);
    const user = state.data;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isActive, setActive] = useState(false)
   // const [departments,setDep] = useState([])
    const state1 = useSelector(state=>state);
    console.log(state1)

    useEffect(() => {
        console.log(user)
        setActive(true)
       dispatch(getOneLeaveAsync(user._id)).then((value)=>{console.log(value)});
       dispatch(getQualificationAsync(user._id)).then((value)=>{console.log(value)});
       dispatch(getSalaryAsync(user._id)).then((value)=>{console.log(value)});
       dispatch(getPayrollAsync(user._id)).then((value)=>{console.log(value)})
       setActive(false)    

    }, [])
    return (
        <>
        <LoadingOverlay
                active={isActive}
                spinner
                text='Loading your content...'
                >
        <div className="mt-0 w-full flex flex-col justify-center items-center bg-gray-300 py-10">
        <div><h3>Qualification Section</h3></div>
        {
           role==="Admin"?<div className="relative h-14 w-1/2 items-end mb-10">
            <button onClick={() => { navigate('/qualform', { state: { id:user._id} }); }} className=' absolute top-10 right-0 bg-green-500
             hover:text-blue-400  text-white font-semibold 
             py-2 px-4 border border-blue-500 hover:bg-green-400 rounded'>
                Add Qualification
            </button>
        </div>:null
        }
        {
            state1.employee.Qualification.length !==0?<div class="w-1/2">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200 ">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                        Position
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                        Requirements
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                        Joining Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                             {
                                 state1.employee.Qualification.map((val)=>(<tr>
                                    <td class="px-2 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900">
                                                    {val.position}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-2 py-4 whitespace-nowrap">
                                        <div class="flex items-center">

                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900">
                                                   {val.requirements}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="px-2 py-4 whitespace-nowrap">
                                        <div class="flex items-center">

                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900">
                                                   {val.date_in}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                </tr>))
                             } 
                               
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        </div>:
        <div className="flex flex-col bg-gray-50 w-1/2 justify-center items-center py-4 rounded">
            <p className=" italic text-lg">No Qualification Added Yet</p>       
        </div>
        }
            <div>
            </div>
        </div>

        

        <div className="mt-0 w-full flex flex-col justify-center items-center bg-gray-200 py-10">
            <div><h3>Leave Section</h3></div>
            {
                role==="Admin"?<div className="relative h-14 w-1/2 items-end mb-10">
                <button onClick={() => { navigate('/leaveform', { state: { id:user._id} }); }} className=' absolute top-10 right-0 bg-green-500 
                hover:text-blue-400  text-white font-semibold 
                 py-2 px-4 border border-blue-500 hover:bg-green-400 rounded'>
                    Add New Leave
                </button>
            </div>:null
            }
            {
                state1.employee.Leave.length !==0?
                <div class="w-1/2">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200 ">
                                <thead class="bg-gray-100">
                                    <tr>
                                        <th scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                            Reason
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                 {
                                     state1.employee.Leave.map((val)=>(<tr>

                                        <td class="px-2 py-4 whitespace-nowrap">
                                                 <div class="flex items-center">

                                                     <div class="ml-4">
                                                             <div class="text-sm font-medium text-gray-900">
                                                                {val.date}
                                                            </div>
                                                     </div>
                                                 </div>
                                         </td>
                                        
                                        <td class="px-2 py-4 whitespace-nowrap">
                                            <div class="flex items-center">

                                                <div class="ml-4">
                                                    <div class="text-sm font-medium text-gray-900">
                                                       {val.reason}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>))
                                 } 
                                   
                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            </div>:<div className="flex flex-col bg-gray-50 w-1/2 justify-center items-center py-4 rounded">
            <p className=" italic text-lg">No Leave Added Yet</p>       
           </div>
                
            }
            
            <div>
            </div>
        </div>

        

        <div className="mt-0 w-full flex flex-col justify-center items-center bg-gray-300 py-10 ">
        <div><h3>Salary Section</h3></div>
        {
            role==="Admin"?<div className="relative h-14 w-1/2 items-end mb-10">
            <button onClick={() => { navigate('/salaryform', { state: { id:user._id} }); }} className=' absolute top-10 right-0 bg-green-500
             hover:text-blue-400  text-white font-semibold 
             py-2 px-4 border border-blue-500 hover:bg-green-400 rounded'>
                Create Salary
            </button>
          </div>:null
        }
            {
                state1.employee.Salary.length !== 0 ?<div class="w-1/2">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200 ">
                                <thead class="bg-gray-100">
                                    <tr>
                                        <th scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                            Amount
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                            Anual
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                            Bonus
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                  {
                                      state1.employee.Salary.map((val)=>(
                                      <tr>
                                        <td class="px-2 py-4 whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="ml-4">
                                                    <div class="text-sm font-medium text-gray-900">
                                                        {val.amount}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-2 py-4 whitespace-nowrap">
                                            <div class="flex items-center">

                                                <div class="ml-4">
                                                    <div class="text-sm font-medium text-gray-900">
                                                       {val.annual}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="px-2 py-4 whitespace-nowrap">
                                            <div class="flex items-center">

                                                <div class="ml-4">
                                                    <div class="text-sm font-medium text-gray-900">
                                                       {val.bonus}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>))
                                  }
                                   
                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            </div>:<div className="flex flex-col bg-gray-50 w-1/2 justify-center items-center py-4 rounded">
            <p className=" italic text-lg">No Salary Added Yet</p>       
           </div>
            }
            
            <div>
            </div>
        </div>

        <div className="mt-0 w-full flex flex-col justify-center items-center bg-gray-200 py-10 ">
        <div><h3>PayRoll Section</h3></div>
        {
            role==="Admin"?<div className="relative h-14 w-1/2 items-end mb-10">
            <button onClick={() => { navigate('/payrollform', { state: { id:user._id} }); }} className=' absolute top-10 right-0 bg-green-500
             hover:text-blue-400  text-white font-semibold 
             py-2 px-4 border border-blue-500 hover:bg-green-400 rounded'>
                Create PayRoll
            </button>
          </div>:null
        }
        {
            state1.employee.Payroll.length !==0 ?<div class="w-1/2">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200 ">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                        Report
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                        Total Amount
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                              {
                                  state1.employee.Payroll.map((val)=>(<tr>
                                    <td class="px-2 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900">
                                                    {val.date}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-2 py-4 whitespace-nowrap">
                                        <div class="flex items-center">

                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900">
                                                   {val.report}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="px-2 py-4 whitespace-nowrap">
                                        <div class="flex items-center">

                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900">
                                                   {val.total_amount}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                </tr>))
                              }
                               
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        </div>:<div className="flex flex-col bg-gray-50 w-1/2 justify-center items-center py-4 rounded">
            <p className=" italic text-lg">No Payroll Added Yet</p>       
           </div>
        }
            
            <div>
            </div>
        </div>
        </LoadingOverlay>
        </>
    )
}

export default EmployeeDetail
