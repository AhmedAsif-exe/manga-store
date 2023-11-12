import classes from "./SearchBar.module.css";
import SearchIcon from "./SearchIcon";
const SearchBar = () => {
  return (
    <div className={classes.container}>
      <form action="/search" className={classes.search}>
        <input
          className={classes["search__input"]}
          type="search"
          placeholder="Search"
          id="searchInput"
          name="Title"
        />

        <div className={classes["search__icon-container"]}>
          <label
            htmlFor="searchInput"
            className={classes["search__label"]}
            aria-label="Search"
          >
            <SearchIcon className={classes.svg} />
          </label>

          <button className={classes["search__submit"]} aria-label="Search">
            <SearchIcon className={classes.svg} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
