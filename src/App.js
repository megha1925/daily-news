import React, { useState } from "react";
import NewsApi from "./components/NewsApi";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [code, setCode] = useState("in");
  return (
    <div className="container">
      <SearchBar onSubmit={setSearch} countryCode={setCode} />
      <NewsApi query={search} country={code} />
    </div>
  );
};

export default App;
