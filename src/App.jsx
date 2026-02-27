import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { CountryGrid } from "./components/CountryGrid";
import { useCountries } from "./hooks/useCountries";
import { LoadingSpinner } from "./components/LoadingSpinner";

function App() {
  const { countries, loading, error } = useCountries();

  function searchCountry() {
    return;
  }

  return (
    <>
      <h1> Country Explorer Dashboard </h1>
      <SearchBar onButtonClick={searchCountry} />
      {/* <FilterBar /> */}
      {loading && <LoadingSpinner />}
      <CountryGrid countries={countries} />
    </>
  );
}

export default App;
