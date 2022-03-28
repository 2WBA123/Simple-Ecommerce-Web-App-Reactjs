import { getAxiosInstance } from "../../../configs/axois";
import { ID_KEY } from "../../../constants/constant";


export const LOGIN = async (data)=>{
    const axios=await getAxiosInstance();
    const res = await axios.post("employee/login",data);
    console.log(res);
    return res;
 }

 export const GET_ALL_USER = async ()=>{
    const axios=await getAxiosInstance();
    const res = await axios.get("employee/");
    console.log(res);
    return res;
 }

 export const CREATE_USER = async (data)=>{
   const axios=await getAxiosInstance();
   const res = await axios.post("employee/signup/",data);
   console.log(res);
   return res;
}

export const GET_ALL_DEPARTMENTS = async ()=>{
   const axios=await getAxiosInstance();
   const res = await axios.get("department/");
   console.log(res);
   return res;
}

export const CREATE_DEPARTMENT = async (data)=>{
   const axios=await getAxiosInstance();
   const res = await axios.post("department/",data);
   console.log(res);
   return res;
}

export const GET_ALL_ROLES = async ()=>{
   const axios=await getAxiosInstance();
   const res = await axios.get("role/");
   console.log(res);
   return res;
}

export const CREATE_ROLE = async (data)=>{
   const axios=await getAxiosInstance();
   const res = await axios.post("role/",data);
   console.log(res);
   return res;
}

export const DELETE_USER = async (id)=>{
   const axios=await getAxiosInstance();
   const res = await axios.delete(`employee/${id}`);
   console.log(res);
   return res;
}

export const UPDATE_USER = async (data)=>{
   const axios=await getAxiosInstance();
   const res = await axios.put(`employee/${data.user_id}`,data);
   console.log(res);
   return res;
}

export const UPDATE_PASSWORD = async (data)=>{
   const axios=await getAxiosInstance();
   const id = localStorage.getItem(ID_KEY);
   const res = await axios.patch(`employee/${id}`,data);
   console.log(res);
   return res;
}

export const FORGET_PASSWORD = async (data)=>{
   const axios=await getAxiosInstance();
   const res = await axios.post("employee/forget-password/",data);
   console.log(res);
   return res;
}

export const UPDATE_FORGET_PASSWORD = async (data)=>{
   const axios=await getAxiosInstance();
   const res = await axios.post("employee/verify-password/",data);
   console.log(res);
   return res;
}

export const CREATE_QUALIFICATION = async (data)=>{
   const axios=await getAxiosInstance();
   const res = await axios.post("qualification/",data);
   console.log(res);
   return res;
}

export const GET_QUALIFICATIONS = async (data)=>{
   const axios=await getAxiosInstance();
   const res = await axios.get("qualification/",data);
   console.log(res);
   return res;
}

export const GET_QUALIFICATION = async (id)=>{
   const axios=await getAxiosInstance();
   const res = await axios.get(`qualification/${id}`);
   console.log(res);
   return res;
}

export const CREATE_LEAVE = async (data)=>{
   const axios=await getAxiosInstance();
   const res = await axios.post("leave/",data);
   console.log(res);
   return res;
}

export const GET_LEAVES = async ()=>{
   const axios=await getAxiosInstance();
   const res = await axios.get("leave/");
   console.log(res);
   return res;
}

export const GET_LEAVE = async (id)=>{
   const axios=await getAxiosInstance();
   const res = await axios.get(`leave/${id}`);
   console.log(res);
   return res;
}

export const CREATE_SALARY = async (data)=>{
   const axios=await getAxiosInstance();
   const res = await axios.post("salary/",data);
   console.log(res);
   return res;
}

export const GET_SALARIES = async ()=>{
   const axios=await getAxiosInstance();
   const res = await axios.get("salary/");
   console.log(res);
   return res;
}

export const GET_SALARY = async (id)=>{
   const axios=await getAxiosInstance();
   const res = await axios.get(`salary/${id}`);
   console.log(res);
   return res;
}

export const CREATE_PAYROLL = async (data)=>{
   const axios=await getAxiosInstance();
   const res = await axios.post("payroll/",data);
   console.log(res);
   return res;
}

export const GET_ALL_PAYROLLS= async ()=>{
   const axios=await getAxiosInstance();
   const res = await axios.get("payroll/");
   console.log(res);
   return res;
}

export const GET_PAYROLL = async (id)=>{
   const axios=await getAxiosInstance();
   const res = await axios.get(`payroll/${id}`);
   console.log(res);
   return res;
}