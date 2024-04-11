import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center w-full space-x-10">
      <div className="relative h-12 w-2/6 border-2 rounded-sm border-primary  flex space-x-5 items-center">
        <input
          className="foucs: outline-none w-full h-full pl-5"
          type="text"
          placeholder="Search anything"
        ></input>
        <button className="bg-primary h-full text-white rounded-none">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="flex space-x-5 items-center">
        <div>
          <FontAwesomeIcon icon={faHeart} />{" "}
          <Link className="text-gray" to="favorites">
            My Favorites
          </Link>
        </div>
        <div>
          <FontAwesomeIcon icon={faCartShopping} />{" "}
          <Link className="text-gray" to="cart">
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
