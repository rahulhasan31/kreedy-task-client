import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Kreedy</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt='' src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a href='/' className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a href='/'>Settings</a></li>
        <li><a href='/'>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;