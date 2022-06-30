import React, { useState } from 'react';

const TodoItems = ({item,refetch}) => {
    const [isEdit,setIsEdit]=useState(false)
    console.log(item)
    const handleClick=(e)=>{

        const isRadioCheck=e.target.checked
        if(isRadioCheck){
            fetch(`http://localhost:4000/todo/${item._id}`,{
                method:"PUT"
            })
            .then(res=>res.json())
            .then(data=>{
                refetch()
                console.log(data)})
        }
    }


    const handleUpdate=(e)=>{
        e.preventDefault()
        const updateContent=e.target.todoUpdate.value
  
      
             fetch(`http://localhost:4000/todo/${item._id}`,{
                 method:"PATCH",
                 headers:{

                    'Content-type': 'application/json'},
                    body:JSON.stringify({updateContent})
             })
             .then(res=>res.json())
             .then(data=>{
                 refetch()
                 setIsEdit(false)
                 e.target.reset()
                })
        
    }
 
    return (
      item.status !=="completed" &&    <>
      <li className='bg-white text-secondary  rounded-lg flex p-2 justify-between items-center'>
       <div className='flex  items-center'>
      <input onChange={handleClick} type="checkbox"   name="radio" class="checkbox checkbox-primary mr-2" />
      <span className='w-[300px] overflow-hidden text-black text-start text-lg'>{item.todoDescription} </span>
      </div>  
      <span onClick={()=>setIsEdit(!isEdit)} className='btn btn-primary btn-sm'>{isEdit?"Cancel":"Edit"}</span>
     
     
      </li>
      <div className='divider p-0 m-0 '></div>
      {
         isEdit && <>
          <form onSubmit={handleUpdate} className='bg-white rounded-lg mt-2 text-black text-md  p-2'>
          <input name="todoUpdate" required type="text" placeholder="Type here" class="input input-bordered  w-full " />
          <button type='submit'  className=' btn btn-sm btn-primary text-white mt-2'>Update</button>
          </form>
         </>
        }
        </>
    );
};

export default TodoItems;