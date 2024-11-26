import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { getgenersThunk } from "../../store/slices/genersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import logo from "../../assets/images/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useAppDispatch();
  const { geners } = useAppSelector((state) => state.genersState);
  const { language } = useAppSelector((state) => state.globalState);

  useEffect(() => {
    dispatch(getgenersThunk(language));
  }, []);

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
            onBlur={() => setShowMenu(false)}
          >
            Geners
          </button>
          {showMenu ? (
            <nav className="menu">
              <ul className="geners-list">
                {geners?.map((gener: any) => {
                  return (
                    <li key={gener.id}>
                      <NavLink to={`/geners/${gener.id}`}>{gener.name}</NavLink>
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
