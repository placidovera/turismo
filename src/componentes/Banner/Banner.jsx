import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Banner.css";
import { Carousel } from "bootstrap"; 
const Banner = () => {
  const carouselRef = useRef(null);

  const images = [
    "https://tse3.mm.bing.net/th/id/OIP.NAvG4sDsu6fSGLkG7hr4qAHaEl?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
   "https://portal.andina.pe/EDPfotografia3/Thumbnail/2022/09/14/000898294W.jpg",
   "https://tipsparatuviaje.com/wp-content/uploads/2019/08/torre-de-pisa-italia.jpg",
  "https://cdn.pixabay.com/photo/2017/11/16/19/29/cottage-2955582_1280.jpg"
  ];
  useEffect(() => {
    if (carouselRef.current) {
      new Carousel(carouselRef.current, {
        interval: 3000, 
        ride: "carousel"
      });
    }
  }, []);

  return (
    <div className="banner">
      <h2>Vuelos</h2>

      <div ref={carouselRef} id="bannerCarousel" className="carousel slide">
        <div className="carousel-inner">
          {images.map((url, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={url} className="d-block w-100" alt={`Lugar ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
