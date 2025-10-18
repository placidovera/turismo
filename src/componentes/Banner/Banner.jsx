import "./Banner.css"

const Banner = () => {
  const img = 'https://cdn.pixabay.com/photo/2017/11/16/19/29/cottage-2955582_1280.jpg'; 

  return (
    <div className="banner">
        <h2>Casas de Muestra</h2>
      <img src={img} alt="Imagen de la página" />
      
    </div>
  );
};

export default Banner;
