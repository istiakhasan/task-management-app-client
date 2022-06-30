import React from "react";

const Navbar = ({ setTodo, todo }) => {
  const menuItems = (
    <>
      <li>
        <a href="www.facebook.com">Completed Tasks</a>
      </li>
      <li>
        <a href="www.facebook.com">To-Do</a>
      </li>
      <li>
        <a href="www.facebook.com">Calender</a>
      </li>
      <li>
        <a href="www.facebook.com">Calender</a>
      </li>
      <li>
        <a href="www.facebook.com">Calender</a>
      </li>
    </>
  );
  console.log(todo);

  const handleClicked = (e) => {
    e.preventDefault();
    setTodo([...todo, e.target.todo.value]);
    e.target.reset()
  };

  return (
    <div>
      <div class="navbar bg-secondary font-bold text-[#e0ebeb]">
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
          <ul class="menu hidden lg:flex menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-center">
          <form className="flex" action="" onSubmit={handleClicked}>
            <input
              name="todo"
              type="text"
              placeholder="Type here"
              class="input input-bordered input-primary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
