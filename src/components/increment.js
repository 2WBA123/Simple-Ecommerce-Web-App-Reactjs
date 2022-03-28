import React,{useState} from 'react'

const Increment = () => {
  const [count,setCount]=useState(0);
   const  increment1 = () =>{
       const c=count+1
       setCount(c);
    }

    const  decrement1 = () =>{
        if(count===0)
        {
            return
        }
        else{
            const c=count-1
            setCount(c);
        }
        
     }
    return (
        <div class="container mx-96 my-96">
            <div  class="flex flex-row justify-between my-1  h-1/4  w-1/4 ">
            <h1 class="rounded-full h-10 w-10 bg-blue-400 text-center align-middle text-white">{count}</h1>
            <button class="h-8 w-1/2 hover:bg-green-400 bg-green-500 rounded" onClick={increment1}>increment</button>       
        </div>
        <div class="flex flex-row justify-between  my-1 h-1/4 w-1/4">
            <h1 class="rounded-full h-10 w-10 bg-blue-400 text-center align-middle text-white">{count}</h1>
            <button class="h-8 w-1/2 hover:bg-green-400 bg-green-500 rounded" onClick={decrement1}>decrement</button>       
        </div>
        </div> 
        
    )
}

export default Increment;
