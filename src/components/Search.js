import React, { useState } from "react";
import "./Search.css";
//import SearchIcon from "@material-ui/icons/Search";
//import CloseIcon from "@material-ui/icons/Close";

function Search({ placeholder, data }) {

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

      <div className="dataResult">

        {data.filter((val) => {
          if (searchTerm === "") {

            return val
          } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {

            return val
          }
        }).map((val, key) => {

          return (

            <div className="dataItem" key={key}>
              <p>
                {val.title} ,
                {val.author}
              </p>
            </div>
          );
        })
        }
      </div>

    </div>
  );
}

export default Search;