import { useParams } from "react-router-dom";
import "./GenrePage.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { getGenerFIlmsThunk } from "../../store/slices/genersSlice";

const img_ulr = "https://image.tmdb.org/t/p/w300/";

const GenrePage = () => {
  const { id } = useParams();
  const { language } = useAppSelector((state) => state.globalState);
  const { genreFilms, currentGenre } = useAppSelector(
    (state) => state.genersState
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGenerFIlmsThunk({ id, language }));
  }, [id, language]);
  return (
    <div className="container">
      <h1 className="genre-title">- {currentGenre} -</h1>
      <div className="genre-films-wrapper">
        {genreFilms.map((film) => {
          return (
            <div className="film">
              <img src={`${img_ulr}${film.poster_path}`} alt={film.title} />
              <h4>
                {film.title.length >= 25
                  ? `${film.title.slice(0, 25)} ...`
                  : film.title}
              </h4>
              <span className="release-date">
                {film.release_date.slice(0, 4)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenrePage;
