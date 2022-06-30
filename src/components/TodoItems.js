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
      <li className='bg-white text-secondary mt-2 flex p-4 justify-between items-center'>
       <div className='flex items-center'>
      <input onChange={handleClick} type="radio"   name="radio" class="radio radio-secondary mr-2" />
      <span className=''>{item.todoDescription} </span>
      </div>  
      <span onClick={()=>setIsEdit(!isEdit)} className='btn btn-secondary btn-sm'>{isEdit?"Cancel":"Edit"}</span>
     
     
      </li>
      {
         isEdit && <>
          <form onSubmit={handleUpdate} className='bg-white mt-2 text-primary flex justify-between items-center p-2'>
          <input name="todoUpdate" required type="text" placeholder="Type here" class="input input-bordered input-primary w-[80%] " />
          <button type='submit'  className=' btn btn-sm btn-primary text-white'>Update</button>
          </form>
         </>
        }
        </>
    );
};

export default TodoItems;