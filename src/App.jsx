import "./App.css";
import { useMemo, useState } from "react";
import { useCountries } from "./hooks/useCountries";
import { SearchBar } from "./components/SearchBar";
import { FilterBar } from "./components/FilterBar";
import { CountryGrid } from "./components/CountryGrid";
import { LoadingSpinner } from "./components/LoadingSpinner";

function App() {
  const { countries, loading, error } = useCountries();
  const [inputSearch, setInputSearch] = useState("");
  const [continentChoice, setContinentChoice] = useState("");
  const [sorting, setSorting] = useState("");

  const continents = useMemo(
    () => [...new Set(countries.map((country) => country.continent))].sort(),
    [countries],
  );

  const maxPopulation = useMemo(
    () => Math.max(1, ...countries.map((country) => country.population)),
    [countries],
  );

  const filteredCountries = useMemo(() => {
    let finalResult = countries;
    const search = inputSearch.trim().toLowerCase();

    if (search !== "") {
      finalResult = finalResult.filter((country) =>
        country.name.toLowerCase().includes(search),
      );
    }
    if (continentChoice !== "") {
      finalResult = finalResult.filter(
        (country) => country.continent === continentChoice,
      );
    }
    if (sorting === "increasing") {
      finalResult = [...finalResult].sort(
        (a, b) => a.population - b.population,
      );
    }
    if (sorting === "decreasing") {
      finalResult = [...finalResult].sort(
        (a, b) => b.population - a.population,
      );
    }

    return finalResult;
  }, [countries, inputSearch, continentChoice, sorting]);

  const hasFilters =
    inputSearch !== "" || continentChoice !== "" || sorting !== "";

  function resetStates() {
    setContinentChoice("");
    setSorting("");
    setInputSearch("");
  }

  function renderResults() {
    if (loading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return (
        <p className="message message-error" role="alert">
          Country data could not be loaded. Check your connection and reload the
          page.
        </p>
      );
    }
    if (filteredCountries.length === 0) {
      return (
        <p className="message">
          No country matches your search. Try another name or clear the filters.
        </p>
      );
    }
    return (
      <CountryGrid
        countries={filteredCountries}
        maxPopulation={maxPopulation}
      />
    );
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>Country Explorer</h1>
        <p className="page-intro">
          Search {countries.length || "all the"} countries and territories,
          filter them by continent and sort them by population.
        </p>
      </header>

      <section className="toolbar" aria-label="Search and filters">
        <SearchBar onSubmit={setInputSearch} value={inputSearch} />
        <FilterBar
          continents={continents}
          valueContinent={continentChoice}
          valueSorting={sorting}
          onReset={resetStates}
          canReset={hasFilters}
          setContinentChoice={setContinentChoice}
          setSorting={setSorting}
        />
      </section>

      {!loading && !error && (
        <p className="result-count" aria-live="polite">
          {filteredCountries.length === 1
            ? "1 country"
            : `${filteredCountries.length} countries`}
        </p>
      )}

      <main>{renderResults()}</main>

      <footer className="page-footer">
        Population figures are 2020 estimates. Flags by flagcdn.com.
      </footer>
    </div>
  );
}

export default App;
