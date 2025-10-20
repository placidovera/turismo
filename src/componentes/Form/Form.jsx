import React, { useState } from "react";
import "./Form.css";
import AnimacionDerecha from "../AnimacionDerecha/AnimacionDerecha";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [consulta, setConsulta] = useState("");

  const driverForm = async (event) => {
    event.preventDefault();
    // Aquí tu lógica de envío
  };

  return (
    <div className="form-container">
      <form onSubmit={driverForm} className="form-main">
        <h2>Formulario</h2>
        <label>Nombre</label>
        <input
          type="text"
          placeholder="Ingresa aqui tu nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Apellido</label>
        <input
          type="text"
          placeholder="Ingresa aqui tu apellido"
          onChange={(e) => setApellido(e.target.value)}
        />
        <label>Consulta</label>
        <textarea
          type="text"
          placeholder="Dejanos tu consulta"
          onChange={(e) => setConsulta(e.target.value)}
        ></textarea>
      </form>

      {/* Animación al lado derecho */}
      <AnimacionDerecha />
    </div>
  );
};

export default Form;
