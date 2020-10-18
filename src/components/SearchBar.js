import React, { useState } from "react";

const SearchBar = (props) => {
  const [innerSearch, setInnerSearch] = useState("");

  const submitHandler = () => {
    props.onSubmit(innerSearch);
    setInnerSearch("");
  };

  const resetHandler = () => {
    setInnerSearch("");
    props.onSubmit(innerSearch);
  };

  return (
    <div>
      <input
        name="search"
        type="search"
        value={innerSearch}
        onChange={(e) => setInnerSearch(e.target.value)}
      />

      <button type="button" onClick={submitHandler}>
        SEARCH
      </button>

      <button type="button" onClick={resetHandler}>
        RESET
      </button>
    </div>
  );
};

export default SearchBar;
