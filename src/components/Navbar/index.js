import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="container">
      <div className="navbar">
        <img className="logo" alt="logo" src="./logo.png"></img>
        <ul>
          <li>
            <Link to="/">Vuelos</Link>
          </li>
          <li>
            <Link to="/reservaciones">Mis reservaciones</Link>
          </li>
          <li>
            <Link to="/boletos">Mis boletos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
