import React, { useContext } from "react";
// import { Button } from 'react-day-picker';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
//import './style.css';
import logo from "../../../assets/images/logo.png";

import "../../../Pages/Shared/Navbar/style.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <>
      <li >
        <Link to="/appointment" className="col2">
          Appointment
        </Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link to="/dashboard" className="col2">
              Dashboard
            </Link>
          </li>
          <li>
            <button className="btn btn-ghost col2" onClick={handleLogOut}>
              Log Out
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login" className="col2">
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar flex justify-between bg-base-100 bg-dark background hole big">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 big"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl nav-color col2"
        >
          <img style={{ height: 40, width: 40 }} src={logo} />
          Doctors Hub
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex big">
        <ul className="menu menu-horizontal p-0 big">{menuItems}</ul>

      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn  btn-ghost lg:hidden"
      >
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
    </div>
  );
};

export default Navbar;
