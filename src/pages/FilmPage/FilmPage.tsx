import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getFIlmByIdThunk } from "../../store/slices/filmsSlice";
import "./FilmPage.css";

const FilmPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { currentFilm } = useAppSelector((state) => state.filmsState);
  const { language } = useAppSelector((state) => state.globalState);

  useEffect(() => {
    dispatch(getFIlmByIdThunk({ id, language }));
  }, [id, language]);

  function getGenres(genres: any): string {
    let g = genres ?? [];
    let allGenres = "";
    for (let i = 0; i < g.length; i++) {
      allGenres += `${g[i].name}, `;
    }
    return allGenres;
  }

  return (
    <div className="film-page">
      <div
        className="hero"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_FIML_BACKDROP_URL}${
            currentFilm?.backdrop_path
          })`,
        }}
      ></div>
      <div className="hero-content">
        <img
          className="film-poster"
          src={`${import.meta.env.VITE_FIML_POSTER_URL}${
            currentFilm?.poster_path
          }`}
        />
        <div className="film-info">
          <h1 className="hero-title">{currentFilm?.title}</h1>
          <span className="tagline">
            <i>{currentFilm?.tagline}</i>
          </span>
          <p>{currentFilm?.runtime} min</p>
          <p className="rating">
            <FaStar /> {currentFilm?.vote_average}
          </p>
          <p className="overview">{currentFilm?.overview}</p>
          <h3>More about movie</h3>
          <p>
            <b>Genres:</b> {getGenres(currentFilm?.genres)}
          </p>
          <p>
            <b>Status:</b> {currentFilm?.status}
          </p>
          <p>
            <b>Release date:</b> {currentFilm?.release_date}
          </p>
          <p>
            <b>Country:</b>{" "}
            {currentFilm?.origin_country ? currentFilm?.origin_country[0] : ""}
          </p>
          <p>
            <b>Budget:</b> $ {currentFilm?.budget}
          </p>
          <p>
            <b>Revenue:</b> $ {currentFilm?.revenue}
          </p>
          <div className="buttons">
            <button className="button">Watch Trailer</button>
            <button className="button">Watch Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmPage;
