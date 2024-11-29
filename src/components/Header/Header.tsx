import { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import {
  getgenersThunk,
  setCurrentGenre,
} from "../../store/slices/genersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import logo from "../../assets/images/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useAppDispatch();
  const { geners } = useAppSelector((state) => state.genersState);
  const { language } = useAppSelector((state) => state.globalState);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getgenersThunk(language));
  }, [language]);

  function selectGenre(genre: { id: number; name: string }) {
    setShowMenu(false);
    navigate(`/genre/${genre.id}`);
    dispatch(setCurrentGenre(genre.name));
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="menu-wrapper">
          <button
            className="geners-btn"
            onClick={() => setShowMenu(true)}
            // onBlur={() => setShowMenu(false)}
          >
            Geners
          </button>
          {showMenu ? (
            <nav className="menu">
              <ul className="geners-list">
                {geners?.map((genre: any) => {
                  return (
                    <li key={genre.id}>
                      <span onClick={() => selectGenre(genre)}>
                        {genre.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ) : (
            ""
          )}
          <SearchBar />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
