import { useState } from "react";
import "./App.css";
import ItemOne from "./componentes/ItemOne/ItemOne";
import NavBar from "./componentes/NavBar/NavBar";
import Banner from "./componentes/Banner/Banner";
import Form from "./componentes/Form/Form";
import Video from "./componentes/Video/Video";
import Video2 from "./componentes/Video2/Video2";
import Animacion from "./componentes/Animacion/Animacion";

const App = () => {
  const [activo, setActivo] = useState(true);

  return (
    <div className={activo ? "body" : "on"}>
      <NavBar cambiarEstado={() => setActivo(!activo)} />

      {activo ? (
        // Vista inicial
        <>
          <Animacion/>
          <Video/>
        </>
      ) : (
        // Vista después de hacer click
        <>
          <Form />
          <Banner />
          <ItemOne />
       
        </>
      )}
    </div>
  );
};

export default App;
