import React from "react";
import { NavLink } from "react-router-dom";

import { LOCAL_STORAGE_KEY } from "../App";

function handleLogOut() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(null));
  window.location = "/login";
}

function NavBar() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            PlexTrac Hiring Exercise
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Log In
                  <span className="sr-only">(For now)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/userlist">
                  User List
                </NavLink>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={handleLogOut} revert>
                  Log Out
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
