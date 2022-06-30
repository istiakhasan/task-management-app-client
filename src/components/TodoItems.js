import React, { useState } from 'react';

const TodoItems = ({item}) => {
    const [isEdit,setIsEdit]=useState(false)
 
    return (
        <>
        <li className='bg-white text-secondary mt-2 flex p-4 justify-between items-center'>
         <div className='flex items-center'>
        <input   name="radio-3" class="radio radio-secondary mr-2" />
        <span className=''>{item} </span>
        </div>  
        <span onClick={()=>setIsEdit(!isEdit)} className='btn btn-secondary'>Edit</span>
       
       
        </li>
        {
           isEdit && <>
            <div className='bg-white mt-2 flex justify-between items-center p-2'>
            <input type="text" placeholder="Type here" class="input input-bordered input-primary w-[80%] " />
            <span className=' btn btn-primary text-white'>Update</span>
            </div>
           </>
          }
          </>
    );
};

export default TodoItems;