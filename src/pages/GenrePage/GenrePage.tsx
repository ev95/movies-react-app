import { useParams } from "react-router-dom";
import "./GenrePage.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { getGenerFIlmsThunk } from "../../store/slices/genersSlice";
import Film from "../../components/Film/Film";

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
          return <Film key={film.id} film={film} />;
        })}
      </div>
    </div>
  );
};

export default GenrePage;
