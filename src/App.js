import React, { Component } from 'react';
import './App.css';
import NavBar from './components/EMS/components/NavBar';
import { Routes,Route } from 'react-router';
import Login from './components/EMS/components/login';
import Signup from './components/EMS/components/signup';
import Home from './components/EMS/components/Admin/Home';
import EHome from './components/EMS/components/Employee/EHome';
import NewUser from './components/EMS/components/Admin/newUserForm';
import EditForm from './components/EMS/components/editForm';
import Departments from './components/EMS/components/Admin/departments';
import DepForm from './components/EMS/components/Admin/depForm';
import Role from './components/EMS/components/Admin/role';
import RoleForm from './components/EMS/components/Admin/roleForm';
import ChangePass from './components/EMS/components/Employee/changePass';
import UpdatePassword from './components/EMS/components/updatePassword';
import ForgetPassword from './components/EMS/components/forgetPassword';
import LeaveForm from './components/EMS/components/Leave/leaveForm';
import PayRollForm from './components/EMS/components/Payroll/payrollForm';
import QualificationForm from './components/EMS/components/Qualification/qualificationForm';
import SalaryForm from './components/EMS/components/Salary/salaryForm';
import Salary from './components/EMS/components/Salary/salary';
import Qualification from './components/EMS/components/Qualification/qualification';
import Leave from './components/EMS/components/Leave/leave';
import EmployeeDetail from './components/EMS/components/employeeDetail';

export default class App extends Component {

  render() {
    return (
      <>
        <NavBar/> 
         
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ehome" element={<EHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newuser" element={<NewUser/>} />
          <Route path="/edituser" element={<EditForm/>} />
          <Route path="/departments" element={<Departments/>} />
          <Route path="/roles" element={<Role/>} />
          <Route path="/depform" element={<DepForm/>} />
          <Route path="/roleform" element={<RoleForm/>} />
          <Route path="/changepass" element={<ChangePass/>} />
          <Route path="/updatepass" element={<UpdatePassword/>} />
          <Route path="/forgetpass" element={<ForgetPassword/>} />
          <Route path="/payrollform" element={<PayRollForm/>} />
          <Route path="/salaryform" element={<SalaryForm/>} />
          {/* <Route path="/salary" element={<Salary/>} /> */}
          <Route path="/qualform" element={<QualificationForm/>} />
          {/* <Route path="/qual" element={<Qualification/>} /> */}
          <Route path="/leaveform" element={<LeaveForm/>} />
          {/* <Route path="/leave" element={<Leave/>} /> */}
          <Route path="/employee" element={<EmployeeDetail/>} />
          
        </Routes>
      </>
    );
  }
}


