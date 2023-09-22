import { NavLink } from "react-router-dom";

function Fotter() {
    return ( 
        <>
        <footer className="navbar fixed-bottom bg-body-tertiary">
  <div className="container-fluid">
    <NavLink to={"/"} className="navbar-brand" ><i className="bi bi-exclamation-circle-fill"></i></NavLink>
    <NavLink to={"/"} className="navbar-brand" ><i className="bi bi-heart-fill"></i></NavLink>
    <NavLink to={"/"} className="navbar-brand" ><i className="bi bi-exclamation-circle-fill"></i></NavLink>
  </div>
  </footer>
  </>
    
       
     );
}

export default Fotter;