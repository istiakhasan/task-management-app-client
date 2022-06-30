import React from "react";
import {Link} from 'react-router-dom'


const Navbar = ({refetch}) => {
  const menuItems = (
    <>
      <li className="mr-5 hover:bg-[rgb(82,37,124)] rounded ">
        <Link to="/home">To-Do</Link>
      </li>
      <li className="mr-5 hover:bg-[rgb(82,37,124)] rounded ">
        <Link to="/complete">Completed Tasks</Link>
      </li>
      <li className="mr-5 hover:bg-[rgb(82,37,124)] rounded ">
        <Link to="/calender">Calender</Link>
      </li>
     
     
     
    </>
  );




  return (
    <div>
      <div class="navbar bg-primary px-20 font-bold text-[#e0ebeb]">
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
          <Link to="/" class="btn btn-ghost normal-case text-xl">ToDo Cloud</Link>
        </div>
        <div className="navbar-center">
       



        </div>
        <div className="navbar-end">
           <ul class="menu hidden lg:flex menu-horizontal p-0">{menuItems}</ul>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
