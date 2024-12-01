import "./Film.css";
import { FilmType } from "../../types/types";
import { NavLink } from "react-router-dom";
const img_ulr = "https://image.tmdb.org/t/p/w300/";

type FilmPropsType = {
  film: FilmType;
};

const Film = ({ film }: FilmPropsType) => {
  return (
    <div className="film">
      <NavLink to={`/film/${film.id}`}>
        <img src={`${img_ulr}${film.poster_path}`} alt={film.title} />
      </NavLink>
      <h4>
        <NavLink to={`/film/${film.id}`}>
          {film.title.length >= 20
            ? `${film.title.slice(0, 20)} ...`
            : film.title}
        </NavLink>
      </h4>
      <span className="release-date">{film.release_date.slice(0, 4)}</span>
    </div>
  );
};

export default Film;
