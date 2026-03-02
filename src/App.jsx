import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { CountryGrid } from "./components/CountryGrid";
import { useCountries } from "./hooks/useCountries";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { useState } from "react";

function App() {
  const { countries, loading, error } = useCountries();
  const [inputSearch, setInputSearch] = useState("");
  let filteredCountries;

  if (inputSearch === "") {
    filteredCountries = countries;
  } else {
    filteredCountries = countries.filter((country) => {
      return country.name.common === inputSearch;
    });
  }
  function searchCountry(input) {
    console.log(input);
    setInputSearch(input);
  }

  function resetSearch() {
    setInputSearch("");
  }

  return (
    <>
      <h1> Country Explorer Dashboard </h1>
      <SearchBar onSubmit={searchCountry} onReset={resetSearch} />
      {/* <FilterBar /> */}
      {loading && <LoadingSpinner />}
      <CountryGrid countries={filteredCountries} />
    </>
  );
}

export default App;
