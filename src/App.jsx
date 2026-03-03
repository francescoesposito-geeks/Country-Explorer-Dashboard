import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { CountryGrid } from "./components/CountryGrid";
import { useCountries } from "./hooks/useCountries";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { useState, useMemo } from "react";
import { FilterBar } from "./components/FilterBar";

function App() {
  const { countries, loading, error } = useCountries();
  const [inputSearch, setInputSearch] = useState("");

  const filteredCountries = useMemo(() => {
    if (inputSearch === "") {
      return countries;
    } else {
      return countries.filter((country) => country.name.common === inputSearch);
    }
  }, [countries, inputSearch]);

  function searchCountry(input) {
    setInputSearch(input);
  }

  return (
    <>
      <h1> Country Explorer Dashboard </h1>
      <div className="inputBar">
        <SearchBar onSubmit={searchCountry} value={inputSearch} />
      </div>
      <FilterBar />
      <CountryGrid countries={filteredCountries} />
      {loading && <LoadingSpinner />}
    </>
  );
}

export default App;
