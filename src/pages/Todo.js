import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TodoItems from "../components/TodoItems";

const Todo = () => {
  const [todo, setTodo] = useState([]);

  return (
    <>
      <Navbar setTodo={setTodo} todo={todo} />
      <div className=" min-h-[96vh] flex justify-center items-center">
        <div className=" w-4/12">
          <div class="card   text-primary-content text-center">
            <div class="card-body">
                <h1 className="text-5xl text-red-700 underline">ToDo List</h1>
              <ul className="text-white">
                {
                    todo.length===0&& <h1 className="mt-5">List is empty</h1>
                }
                {todo.map((item) => (
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
