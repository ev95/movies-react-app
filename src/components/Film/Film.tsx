import "./Film.css";
import {FilmType} '../../types/types';
const img_ulr = "https://image.tmdb.org/t/p/w300/";

type FilmPropsType = {
    film: FilmType
}

const Film = ({ film } : FilmPropsType) => {
  return (
    <div className="film">
      <img src={`${img_ulr}${film.poster_path}`} alt={film.title} />
      <h4>
        {film.title.length >= 25
          ? `${film.title.slice(0, 25)} ...`
          : film.title}
      </h4>
      <span className="release-date">{film.release_date.slice(0, 4)}</span>
    </div>
  );
};

export default Film;
