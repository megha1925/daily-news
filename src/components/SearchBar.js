import React, { useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const SearchBar = (props) => {
  const [innerSearch, setInnerSearch] = useState("");
  const [options] = useState({
    codeOptions: countryList().getData(),
  });

  const submitHandler = () => {
    props.onSubmit(innerSearch);
    setInnerSearch("");
  };

  const changeHandler = (selected) => {
    props.countryCode(selected.value);
  };

  const resetHandler = async () => {
    setInnerSearch("");
    await props.onSubmit(innerSearch);
  };

  return (
    <div>
      <input
        name="search"
        type="text"
        value={innerSearch}
        onChange={(e) => setInnerSearch(e.target.value)}
        placeholder="Search News..."
      />

      <Select options={options.codeOptions} onChange={changeHandler} />

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
