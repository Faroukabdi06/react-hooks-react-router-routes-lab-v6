import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import Directors from "../pages/Directors";
import Actors from "../pages/Actors";
import Home from "../pages/Home";

function NavBar() {
  return (
    <nav className="navbar">

      <NavLink to="/">Home</NavLink>
      <NavLink to="/Directors">Directors</NavLink>
      <NavLink to="/Actors">Actors</NavLink>
    </nav>
    );
};

export default NavBar;
