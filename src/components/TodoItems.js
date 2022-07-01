import React, { useState } from 'react';
import { toast } from 'react-toastify';

const TodoItems = ({item,refetch}) => {
    const [isEdit,setIsEdit]=useState(false)
   
    const handleCompleteTask=(e)=>{

        const isRadioCheck=e.target.checked
        if(isRadioCheck){
            fetch(`https://todocloudapp.herokuapp.com/todo/${item._id}`,{
                method:"PUT"
            })
            .then(res=>res.json())
            .then(data=>{
                toast("Task completed")
                refetch()
                })
        }
    }


    const handleUpdate=(e)=>{
        e.preventDefault()
        const updateContent=e.target.todoUpdate.value
  
      
             fetch(`https://todocloudapp.herokuapp.com/todo/${item._id}`,{
                 method:"PATCH",
                 headers:{

                    'Content-type': 'application/json'},
                    body:JSON.stringify({updateContent})
             })
             .then(res=>res.json())
             .then(data=>{
                toast.success("Updated Successfully ...")
                 refetch()
                 setIsEdit(false)
                 e.target.reset()
                })
        
    }
 
    return (
      item.status !=="completed" &&    <>
      <li className='bg-white text-secondary  rounded-lg flex p-2 justify-between items-center'>
       <div className='flex  items-center'>
      <input onChange={handleCompleteTask} type="checkbox"   name="radio" className="checkbox checkbox-primary mr-2" />
      <span className='lg:w-[300px] w-[150px] overflow-hidden text-black text-start text-lg'>{item.todoDescription} </span>
      </div>  
      <span onClick={()=>setIsEdit(!isEdit)} className='btn btn-primary btn-sm'>{isEdit?"Cancel":"Edit"}</span>
     
     
      </li>
      <div className='divider p-0 m-0 '></div>
      {
         isEdit && <>
          <form onSubmit={handleUpdate} className='bg-white rounded-lg mt-2 text-black text-md  p-2'>
          <input name="todoUpdate" required type="text" placeholder="Type here" className="input input-bordered  w-full " />
          <button type='submit'  className=' btn btn-sm btn-primary text-white mt-2'>Update</button>
          </form>
         </>
        }
        </>
    );
};

export default TodoItems;