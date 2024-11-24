// import Slider from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero_image from "../../assets/images/hero-image.jpg";
import "./Home.css";

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className="home">
      <div className="hero">
        <img src={hero_image} className="hero-img" alt="hero-image" />
        <div className="overlay"></div>
        <div className="hero-caption">
          <h1> FILM WORLD</h1>
          <p>All the best movies in one site</p>
        </div>
      </div>

      <div className="container">
        <div className="popular-movies">
          <h2>Upcoming Movies</h2>
          <Slider {...settings}>
            <div>
              <h3>Slide 1</h3>
            </div>
            <div>
              <h3>Slide 2</h3>
            </div>
            <div>
              <h3>Slide 3</h3>
            </div>
            <div>
              <h3>Slide 4</h3>
            </div>
            <div>
              <h3>Slide 5</h3>
            </div>
          </Slider>
        </div>

        <div className="popular-movies">
          <h2>Popular Movies</h2>
          <Slider {...settings}>
            <div>
              <h3>Slide 1</h3>
            </div>
            <div>
              <h3>Slide 2</h3>
            </div>
            <div>
              <h3>Slide 3</h3>
            </div>
            <div>
              <h3>Slide 4</h3>
            </div>
            <div>
              <h3>Slide 5</h3>
            </div>
          </Slider>
        </div>

        <div className="popular-movies">
          <h2>Popular Series</h2>
          <Slider {...settings}>
            <div>
              <h3>Slide 1</h3>
            </div>
            <div>
              <h3>Slide 2</h3>
            </div>
            <div>
              <h3>Slide 3</h3>
            </div>
            <div>
              <h3>Slide 4</h3>
            </div>
            <div>
              <h3>Slide 5</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
