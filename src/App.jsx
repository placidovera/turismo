import { useState } from "react";
import "./App.css";
import ItemOne from "./componentes/ItemOne/ItemOne";
import NavBar from "./componentes/NavBar/NavBar";
import Banner from "./componentes/Banner/Banner";
import Form from "./componentes/Form/Form";
import Video from "./componentes/Video/Video";
import Video2 from "./componentes/Video2/Video2";
import Animacion from "./componentes/Animacion/Animacion";
import Footer from "./componentes/Footer/Footer";

const App = () => {
  const [activo, setActivo] = useState(true);

  return (
    <div className={activo ? "body" : "on"}>
      <NavBar cambiarEstado={() => setActivo(!activo)} />

      <main>
        {activo ? (
          <>
            <Animacion />
            <Video />
          </>
        ) : (
          <>
            <Form />
            <Banner />
            <ItemOne />
          </>
        )}
      </main>

      {/* Footer siempre visible */}
      <Footer />
    </div>
  );
};

export default App;
