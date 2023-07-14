import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../auth/Logout";
import { verifyToken } from "../auth/TokenManager";

function Header() {
  const [search, setSearch] = useState("");

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-warning-subtle">
      <div className="container-fluid d-flex align-items-center">
        <NavLink to={"/"} className="navbar-brand">
          BCard
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link active"
                aria-current="page"
              >
                ABOUT
              </NavLink>
            </li>
            {!verifyToken() && (
              <li>
                <NavLink
                  to="/fav Cards"
                  className="nav-link active"
                  aria-current="page"
                >
                  FAV CARDS
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink to="/my cards" className="nav-link">
                MY CARDS
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                SANBOX
              </a>
            </li> */}
          </ul>
        </div>

        <ul className="navbar-nav d-flex">
          <form className="navbar" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
            />
          </form>
          <li className="nav-item">
            <NavLink to="/Signup" className="nav-link">
              Sign Up
            </NavLink>
          </li>
          {!verifyToken() && (
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
          )}
          {verifyToken() && (
            <li className="nav-item">
              <Logout />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
