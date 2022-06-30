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
      <div className="navbar bg-primary lg:px-20 font-bold text-[#e0ebeb]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary  rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">ToDo Cloud</Link>
        </div>
        <div className="navbar-center">
       



        </div>
        <div className="navbar-end">
           <ul className="menu hidden lg:flex menu-horizontal p-0">{menuItems}</ul>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
