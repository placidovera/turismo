import "./NavBar.css";

const NavBar = ({ cambiarEstado }) => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <h1 className="navbar-brand">Paquetes Turísticos</h1>

        {/* Botón hamburguesa (toggler) */}
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

        {/* Contenedor colapsable */}
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
            <li className="nav-item botonNav" onClick={cambiarEstado}>
              Contactanos
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
