import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder }) {

  const [searchTerm, setsearchTerm] = useState("");

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => { setsearchTerm(e.target.value); }}
        />

      </div>

    </div>
  );
}

export default SearchBar;