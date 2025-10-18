import Marquee from "react-fast-marquee";

import "./Animacion.css";

const Animacion = () => {
  return (
    <div className="animacion-container">
      {/* Carrusel 1 */}
      <Marquee speed={50} className="marquee">
        <span>Explora ✈️</span>
        <span>Descubre 🌴</span>
        <span>Vive 🌍</span>
        <span>Disfruta ☀️</span>
      </Marquee>

      {/* Carrusel 2 (en sentido contrario) */}
      <Marquee speed={50} direction="right" className="marquee">
        <span>Aventuras 🏝️</span>
        <span>Ciudades 🏙️</span>
        <span>Montañas 🏔️</span>
        <span>Cultura 🎭</span>
      </Marquee>

      {/* Flores animadas */}
      <div className="flores">
        <img src="/imagenes/corazon.png" alt="Flor" className="flor" />
        <img src="/imagenes/corazon.png" alt="Flor" className="flor" />
        <img src="/imagenes/corazon.png" alt="Flor" className="flor" />
      </div>
    </div>
  );
};

export default Animacion;
