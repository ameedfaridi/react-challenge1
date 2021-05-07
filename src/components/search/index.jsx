import React from "react";
import { useMovie } from "../../context/dataProvider";

const Search = ({ inputRef }) => {
  const { searchValue, setSearchValue, search } = useMovie();

  return (
    <div style={{ padding: "1rem" }}>
      <div className="searchInput">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={({ target: { value } }) => {
            setSearchValue(value.toUpperCase());
          }}
          onKeyPress={(e) => (e.key === "Enter" ? search() : null)}
        />

        <button
          style={{
            position: "absolute",
            right: 20,
            top: 93.2,
            height: "50px",
            width: "100px",
            cursor: "pointer",
            background: "#f3ad0b",
            color: "#fff",
            fontSize: "1.2rem",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            border: "1px solid rgba(255,255,255,0.7)",
          }}
          onClick={() => search()}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
