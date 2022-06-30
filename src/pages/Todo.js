import React from "react";
import TodoItems from "../components/TodoItems";
import { useQuery } from "react-query";
import {toast} from 'react-toastify'

const Todo = () => {
  const {
    data: todo,
    isLoading,
    refetch,
  } = useQuery("todo", () =>
    fetch("http://localhost:4000/todo").then((res) => res.json())
  );

  if (isLoading) {
    return;
  }
  const handleAddTodo = async (e) => {
    e.preventDefault();
    const todoDescription = e.target.todo.value;

    fetch("http://localhost:4000/todo", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ todoDescription }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("New task added ")
        refetch();
        e.target.reset();
      });
  };

  return (
    <>
      <div className=" min-h-[96vh] flex justify-center items-center text-black mt-10">
        <div className=" lg:w-5/12 w-11/12  rounded-[8px] bg-white  border-secondary">
          <div className="card lg:w-10/12 w-[100%]  mx-auto  text-primary-content text-center">
            <div className="card-body">
              <h1 className="text-5xl text-primary underline">ToDo List</h1>
              <form className="my-4" action="" onSubmit={handleAddTodo}>
                <input
                  required
                  name="todo"
                  type="text"
                  placeholder="Add your daily task"
                  className="input input-bordered text-black w-full "
                />
                <button className="btn btn-primary mt-2">Add Task</button>
              </form>
              <div className="divider"></div>
              <ul className="text-white">
                {todo.length === 0 && <h1 className="mt-5">List is empty</h1>}
                {todo.map((item) => (
                  <TodoItems key={item._id} refetch={refetch} item={item} />
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
