import React from 'react';

const Navbar = () => {
    const menuItems=<>
                       <li><a href="www.facebook.com" >Completed Tasks</a></li>
                       <li><a href="www.facebook.com" >To-Do</a></li>
                       <li><a href="www.facebook.com" >Calender</a></li>
                       <li><a href="www.facebook.com" >Calender</a></li>
                       <li><a href="www.facebook.com" >Calender</a></li>
                   </>
    return (
        <div>
            <div class="navbar bg-secondary font-bold text-[#e0ebeb]">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <ul class="menu menu-horizontal p-0">
     
     {/* type here */}
     {menuItems}


  </ul>
  </div>
  <div class="navbar-center hidden lg:flex">
  
  </div>
  {/* <div class="navbar-end">
    <a class="btn">Get started</a>
  </div> */}
</div>
        </div>
    );
};

export default Navbar;