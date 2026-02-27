import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { CountryGrid } from "./components/CountryGrid";
import { useCountries } from "./hooks/useCountries";

function App() {
  const { countries, loading, error } = useCountries();
  return;
  <>
    <h1> Country Explorer Dashboard </h1>

    <SearchBar />
    <FilterBar />
    <CountryGrid />
  </>;
}

export default App;
