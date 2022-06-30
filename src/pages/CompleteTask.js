import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { BeakerIcon, InboxIcon, TrashIcon } from '@heroicons/react/solid'

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
        <div className='max-w-6xl mx-auto'>
            
             <ul className='w-8/12 mx-auto'>
             <h1 className='text-3xl underline my-5 text-black font-semibold '>Completed Task List </h1>
                {
                    completeData.map(data=>(
                        <div className='flex bg-white mt-1 rounded-[8px] p-2 items-center justify-between'>
                                 <div className='flex '>
                                 <InboxIcon className='w-12 h-12 mr-2 text-primary' />
                                 <li className='text-md  w-[500px] h-auto p-2 font-bold '>{data.todoDescription}</li>
                                 </div>
                                 <TrashIcon className='w-6 h-6 mr-5 text-red-600' />
                        </div>
                    ))
                }
             </ul>
        </div>
    );
};

export default CompleteTask;