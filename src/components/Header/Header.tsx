import "./Header.css";
import logo from "../../assets/images/logo.png";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getgenersThunk } from "../../store/slices/genersSlice";
import { NavLink } from "react-router-dom";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  const [showMenu, setShowMenu] = useState(true);
  const dispatch = useDispatch();
  const { geners } = useSelector((state: any) => state.genersState);
  useEffect(() => {
    dispatch(getgenersThunk());
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
                {geners.map((gener: any) => {
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
