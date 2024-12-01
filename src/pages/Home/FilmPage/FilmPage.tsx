import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getFIlmByIdThunk } from "../../../store/slices/filmsSlice";
const img_ulr = "https://image.tmdb.org/t/p/w500/";
import "./FilmPage.css";

const FilmPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { currentFilm } = useAppSelector((state) => state.filmsState);
  const { language } = useAppSelector((state) => state.globalState);
  console.log(id);
  console.log(currentFilm);

  useEffect(() => {
    dispatch(getFIlmByIdThunk({ id, language }));
  }, [id]);
  return (
    <div className="film-page">
      <div
        className="hero"
        style={{
          backgroundImage: `url(${img_ulr}${currentFilm?.backdrop_path})`,
        }}
      ></div>
      <div className="hero-content">
        {/* <h1 className="hero-title">{currentFilm?.title}</h1>
        <p className="hero-overview">{currentFilm?.overview}</p>
        <div className="buttons">
          <button className="button">Watch Trailer</button>
          <button className="button">Watch Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default FilmPage;
