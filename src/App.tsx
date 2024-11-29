import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import GenrePage from "./pages/GenrePage/GenrePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre/:id" element={<GenrePage />} />
      </Routes>
    </>
  );
}

export default App;
