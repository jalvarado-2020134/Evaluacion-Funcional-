import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            {}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-auto">
              
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <h3>Inicio</h3>
                  </Link>
                </li>
                <li className="nav-item">
                 
                    <h3>Universidad de Guatemala</h3>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/registro">
                  <h3>Formulario de Registro</h3>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </div>
    </>
  );
};

export default Navbar;
