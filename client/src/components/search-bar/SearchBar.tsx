import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <input type="text" placeholder="Search anything"></input>
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="search-bar-actions">
        <button>
          <FontAwesomeIcon icon={faHeart} /> <span>My Favorites</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faCartShopping} /> <span>My Favorites</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
