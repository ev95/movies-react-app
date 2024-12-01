import { Route, Routes } from "react-router-dom";

import FilmPage from "./pages/Home/FilmPage/FilmPage";
import GenrePage from "./pages/GenrePage/GenrePage";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre/:id" element={<GenrePage />} />
        <Route path="/film/:id" element={<FilmPage />} />
      </Routes>
    </>
  );
}

export default App;
