import React from "react";
import {Link} from 'react-router-dom'


const Navbar = ({refetch}) => {
  const menuItems = (
    <>
      <li className="mr-5 hover:bg-primary rounded ">
        <Link to="/complete">Completed Tasks</Link>
      </li>
      <li className="mr-5 hover:bg-primary rounded ">
        <Link to="/home">To-Do</Link>
      </li>
      <li className="mr-5 hover:bg-primary rounded ">
        <Link to="/calender">Calender</Link>
      </li>
      <li className="mr-5 hover:bg-primary rounded ">
        <Link to="/blog">Calender</Link>
      </li>
     
     
    </>
  );


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
    <div>
      <div class="navbar bg-[rgb(82,37,124)] font-bold text-[#e0ebeb]">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
         
        </div>
        <div className="navbar-center">
          {/* <form className="flex" action="" onSubmit={handleClicked}>
            <input
               required
              name="todo"
              type="text"
              placeholder="Type here"
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <button className="btn btn-primary ml-2">Add Note</button>
          </form> */}
           <ul class="menu hidden lg:flex menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">

        </div>
      </div>
    </div>
  );
};

export default Navbar;
