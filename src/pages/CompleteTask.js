import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const CompleteTask = () => {
    const [completeData,setCompleteData]=useState([])
    useEffect(()=>{
       fetch('http://localhost:4000/todo')
       .then(res=>res.json())
       .then(data=>{
        const newDAta=data.filter(dt=>dt.status==="completed")
        setCompleteData(newDAta)
       })
    },[])
  
    return (
        <div>
            <Navbar />
             <h1>Completed Task List </h1>
             <ul className='w-4/12'>
                {
                    completeData.map(data=>(
                        <>
                       <li className='text-xl bg-white mt-2 p-2 font-bold '>{data.todoDescription}</li>
                        </>
                    ))
                }
             </ul>
        </div>
    );
};

export default CompleteTask;