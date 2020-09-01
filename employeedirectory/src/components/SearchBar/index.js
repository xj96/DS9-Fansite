import React from "react";
import "./style.css";

function SearchBar(props) {
  return (
    <form className="form-inline">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search Roles..."
        aria-label="Search"
      />
      <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
