import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center text-md-start py-4">
      <div className="border-top border-secondary text-center py-3 mt-3">
  <h5 className="fw-bold">Mi Sitio de Viajes</h5>
            <p className="text-light small">
              Descubrí destinos únicos con nosotros.  
              Experiencias inolvidables para cada viajero.
            </p>
   <h6 className="fw-bold">Contacto</h6>
            <p className="mb-1 text-light small">📍 Buenos Aires, Argentina</p>
            <p className="mb-1 text-light small">📞 +54 9 11 5555-5555</p>
            <p className="text-light small">✉️ info@misitioviajes.com</p>
        <small className="text-secondary">
          © {new Date().getFullYear()} Mi Sitio de Viajes — Todos los derechos reservados.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
