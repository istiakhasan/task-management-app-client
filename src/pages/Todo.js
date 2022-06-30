import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TodoItems from "../components/TodoItems";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  useEffect(()=>{
   fetch('http://localhost:4000/addtodo')
   .then(res=>res.json())
   .then(data=>setTodo(data))
  },[])
console.log(todo,"hi this is demo")
  return (
    <>

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
                  <TodoItems item={item} />
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
