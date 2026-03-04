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
  const [continentChoice, setContinentChoice] = useState("");
  const [sorting, setSorting] = useState("");

  const filteredCountries = useMemo(() => {
    let finalResult = countries;

    if (inputSearch !== "") {
      finalResult = finalResult.filter(
        (country) =>
          country.name.common.toLowerCase() === inputSearch.toLowerCase(),
      );
    }
    if (continentChoice !== "") {
      finalResult = finalResult.filter((country) => {
        return country.continents[0] === continentChoice;
      });
    }
    if (sorting === "increasing") {
      let arrayCountries = [...finalResult];
      finalResult = arrayCountries.sort((a, b) => a.population - b.population);
    }
    if (sorting === "decreasing") {
      let arrayCountries = [...finalResult];
      finalResult = arrayCountries.sort((a, b) => b.population - a.population);
    }

    return finalResult;
  }, [countries, inputSearch, continentChoice, sorting]);

  function searchCountry(input) {
    setInputSearch(input);
  }

  function resetStates() {
    setContinentChoice("");
    setSorting("");
    setInputSearch("");
  }

  return (
    <>
      <h1> Country Explorer Dashboard </h1>
      <div className="inputBar">
        <SearchBar onSubmit={searchCountry} value={inputSearch} />
      </div>
      <FilterBar
        valueContinent={continentChoice}
        valueSorting={sorting}
        onReset={resetStates}
        setContinentChoice={setContinentChoice}
        setSorting={setSorting}
      />
      <CountryGrid countries={filteredCountries} />
      {loading && <LoadingSpinner />}
    </>
  );
}

export default App;
