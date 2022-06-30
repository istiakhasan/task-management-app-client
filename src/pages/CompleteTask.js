import React from "react";
import { InboxIcon, TrashIcon } from "@heroicons/react/solid";
import { useQuery } from "react-query";
import {toast} from 'react-toastify'
import { Helmet } from 'react-helmet-async';

const CompleteTask = () => {
  const { data, isLoading, refetch } = useQuery("completedTodo", () =>
    fetch("http://localhost:4000/todo").then((res) => res.json())
  );
  if (isLoading) {
    return;
  }
  const completedTodo = data.filter((item) => item.status === "completed");

  const handleRemoveTodo = (id) => {
    fetch(`http://localhost:4000/todo/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error("Task Deleted")
        refetch();
      });
  };

  return (
    <div className="lg:max-w-6xl mx-auto">
        <Helmet><title>Complted Task</title></Helmet>
      <ul className="lg:w-8/12 w-11/12 mx-auto">
        <h1 className="text-3xl underline my-5 text-black font-semibold ">
          Completed Task List{" "}
        </h1>
        {completedTodo.map((data) => (
          <div
            key={data._id}
            className="flex bg-white mt-1 rounded-[8px] p-2 items-center justify-between"
          >
            <div className="flex items-center">
              <InboxIcon className="w-6 h-6 mr-2 text-primary" />
              <li className="text-md  lg:w-[500px] w-[250px] h-auto p-2 text-black ">
                {data.todoDescription}
              </li>
            </div>
            <TrashIcon
              onClick={() => handleRemoveTodo(data._id)}
              className="w-6 cursor-pointer h-6 mr-5 text-red-600"
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CompleteTask;
