import React, { useState } from 'react';

const TodoItems = ({item}) => {
    const [isEdit,setIsEdit]=useState(false)
    const handleClick=(e)=>{

        const isRadioCheck=e.target.checked
        if(isRadioCheck){
            fetch('http://localhost:4000/')
            .then(res=>res.json())
            .then(data=>console.log(data))
        }
    }
 
    return (
        <>
        <li className='bg-white text-secondary mt-2 flex p-4 justify-between items-center'>
         <div className='flex items-center'>
        <input onChange={handleClick} type="radio"   name="radio" class="radio radio-secondary mr-2" />
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