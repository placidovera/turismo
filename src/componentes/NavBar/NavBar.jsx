import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./NavBar.css";

const NavBar = ({ cambiarEstado }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Paquetes Turísticos</a>

        {/* Botón hamburguesa */}
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

        {/* Contenedor del menú */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <a className="nav-link" href="#vuelos">Vuelos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#bus">Bus</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pack">Pack</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light ms-2" onClick={cambiarEstado}>
                Contactanos
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
