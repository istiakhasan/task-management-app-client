import React from "react";
import Navbar from "../components/Navbar";
import TodoItems from "../components/TodoItems";
import {useQuery} from 'react-query'

const Todo = () => {

  
  const {data:todo,isLoading,refetch}=useQuery('todo',()=>fetch('http://localhost:4000/todo').then(res=>res.json()))

  if(isLoading){
    return ;
  }
  const handleClicked = async(e) => {
    e.preventDefault();
    const todoDescription=e.target.todo.value
  
      fetch('http://localhost:4000/todo',{
      method:"POST",
      headers:{

       'Content-type': 'application/json'},
       body:JSON.stringify({todoDescription})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
       refetch()
      e.target.reset()
    })
  
  };

  return (
    <>
      
      <div className=" min-h-[96vh] flex justify-center items-center text-black mt-10">
        <div className=" w-5/12  rounded-[8px] bg-white  border-secondary">
          
          <div class="card w-10/12 mx-auto   text-primary-content text-center">
            <div class="card-body">
                <h1 className="text-5xl text-primary underline">ToDo List</h1>
                <form className="my-4" action="" onSubmit={handleClicked} >
            <input
               required
              name="todo"
              type="text"
              placeholder="Add your daily task"
              class="input input-bordered text-black w-full "
            />
            <button className="btn btn-primary mt-2">Add Task</button>
            
          </form>
          <div class="divider"></div> 
              <ul className="text-white">
                {
                    todo.length===0&& <h1 className="mt-5">List is empty</h1>
                }
                { todo.map((item) => (
                  <TodoItems refetch={refetch} item={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
