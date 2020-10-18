import React, { useState } from "react";
import NewsApi from "./components/NewsApi";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="container">
      <SearchBar onSubmit={setSearch} />
      <NewsApi query={search} />
    </div>
  );
};

export default App;
