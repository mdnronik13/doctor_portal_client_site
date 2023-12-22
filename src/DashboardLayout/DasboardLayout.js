import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import "../Pages/Login/style.css";
import "../Pages/Shared/Navbar/style.css";

const DasboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>

      <ul className="menu p-4 w-80  text-base-content d-flex flex-row center "
      style={{ width: "100%", display: "flex", alignItems: "center",}}
      >
        <li>
          <Link to="/dashboard" className="col2">My Appointment</Link>
        </li>
        {isAdmin && (
          <>
            <li>
              <Link to="/dashboard/allusers" className="col2">All Users</Link>
            </li>
            <li>
              <Link to="/dashboard/adddoctor" className="col2" >Add a Doctor</Link>
            </li>
            <li>
              <Link to="/dashboard/managedoctor" className="col2">Manage Doctor</Link>
            </li>
          </>
        )}
      </ul>

      <div className="drawer drawer-mobile">
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        </div>
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DasboardLayout;
