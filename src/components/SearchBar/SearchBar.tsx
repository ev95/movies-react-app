import "./SearchBar.css";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search movies..." />
      <button>
        <IoSearch />
      </button>
    </div>
  );
};

export default SearchBar;
