import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const Navbar = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({ type: authTypes.logout });
    history.replace("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <h2>Router App with DB Chars</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                activeClassName="active text-white"
                className="nav-link"
                aria-current="page"
                to="/male"
              >
                Male Chararcters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active text-white"
                className="nav-link"
                aria-current="page"
                to="/female"
              >
                Female Chararcters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active text-white"
                className="nav-link"
                aria-current="page"
                to="/search"
              >
                Search
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
