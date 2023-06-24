import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid d-flex align-items-center">
        <NavLink to={"/"} className="navbar-brand" >
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
              <NavLink to="/about" className="nav-link active" aria-current="page">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAV CARDS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                MY CARDS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SANBOX
              </a>
            </li>
          </ul>
        </div>

        <ul className="navbar-nav d-flex">
          <form className="navbar" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <li className="nav-item">
            <NavLink to="/signup" className="nav-link">
              Sign Up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
