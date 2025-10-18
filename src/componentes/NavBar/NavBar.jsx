import "./NavBar.css";

const NavBar = ({ cambiarEstado }) => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <h1>Paquetes Turisticos</h1>
      </div>

      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav text-center">
          <li>Vuelos</li>
          <li>Bus</li>
          <li>Pack</li>
          <li className="botonNav" onClick={cambiarEstado}>Contactanos</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
