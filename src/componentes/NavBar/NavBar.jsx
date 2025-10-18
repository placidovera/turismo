import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./NavBar.css";

const NavBar = ({ cambiarEstado }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Paquetes Turísticos</a>

        {/* Botón hamburguesa visible solo en móviles */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
          aria-controls="mobileMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>



        {/* Offcanvas para móvil */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="mobileMenu"
          aria-labelledby="mobileMenuLabel"
        >
          <div className="offcanvas-header">
            <h5 id="mobileMenuLabel">Paquetes Turísticos</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav text-center">
              <li className="nav-item"><a className="nav-link" href="#vuelos">Vuelos</a></li>
              <li className="nav-item"><a className="nav-link" href="#bus">Bus</a></li>
              <li className="nav-item"><a className="nav-link" href="#pack">Pack</a></li>
             <li className="nav-item">
  <button
    className="botonNav"
    onClick={cambiarEstado}
    data-bs-dismiss="offcanvas"
  >
    Contactanos
  </button>
</li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
