import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { CountryGrid } from "./components/CountryGrid";
import { useCountries } from "./hooks/useCountries";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { useState, useMemo } from "react";

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
      <SearchBar onSubmit={searchCountry} value={inputSearch} />
      {/* <FilterBar /> */}
      {loading && <LoadingSpinner />}
      <CountryGrid countries={filteredCountries} />
    </>
  );
}

export default App;
