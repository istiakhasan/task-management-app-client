import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TodoItems from "../components/TodoItems";
import {useQuery} from 'react-query'

const Todo = () => {
  // const [todo, setTodo] = useState([]);
  
  const {data:todo,isLoading,refetch}=useQuery('todo',()=>fetch('http://localhost:4000/todo').then(res=>res.json()))
  // useEffect(()=>{
  //  fetch()
  //  .then(res=>res.json())
  //  .then(data=>setTodo(data))
  // },[])
  if(isLoading){
    return ;
  }

  return (
    <>
       <Navbar refetch={refetch} />
      <div className=" min-h-[96vh] flex justify-center items-center">
        <div className=" w-4/12">
          <div class="card   text-primary-content text-center">
            <div class="card-body">
                <h1 className="text-5xl text-red-700 underline">ToDo List</h1>
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
