import { getAxiosInstance } from "../../configs/axois";

// GET POSTS
export const GET_POSTS = async ()=>{
   const axios=await getAxiosInstance();
   const res=await axios.get("/posts");
   console.log(res);
   return res;
}

export const ADD_POST = async (data)=>{
   const axios=await getAxiosInstance();
   const res=await axios.post("/posts",data);
   console.log(res);
   return res;
}

export const GET_POST_COMMENT = async (id)=>{
   const axios=await getAxiosInstance();
   const res=await axios.get(`posts/${id}/comments`);
   console.log(res);
   return res;
}
export const DELETE_POST = async (id)=>{
   const axios=await getAxiosInstance();
   const res=await axios.delete(`posts/${id}`);
   console.log(res);
   return res;
}

export const LOGIN = async (data)=>{
   const axios=await getAxiosInstance();
   const res = await axios.post("employee/login",data);
   console.log(res);
   return res;
}

export const SIGNUP = async (data)=>{
   const axios=await getAxiosInstance();
   const res=await axios.post("employee/signup",data);
   console.log(res);
   return res;
}