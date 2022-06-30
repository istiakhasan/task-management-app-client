import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Todo = () => {
    const [todo,setTodo]=useState([])
  

    console.log(todo.length)
    return (
        <>
        <Navbar setTodo={setTodo} todo={todo} />
        <div className=' min-h-[96vh] flex justify-center items-center'>
            <div className=' w-4/12'>

            <div class="card   text-primary-content text-center">
  <div class="card-body">
  <ul className='text-white'>
                    {
                        todo.map(item=><li className='card-title w-[80%] flex justify-between mx-auto bg-white mt-2 h-[50px] rounded text-primary p-4'>{item} <span>Edit</span></li>)
                    }
                   
                  </ul>
  </div>
</div>
              
                 
            </div>
             
        </div>
        </>
    );
};

export default Todo;