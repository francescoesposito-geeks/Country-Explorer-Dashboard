import { CountryCard } from "./CountryCard";
import "../countryGrid.css";

export function CountryGrid({ countries, maxPopulation }) {
  return (
    <ul className="gridCards">
      {countries.map((country) => (
        <li key={country.code}>
          <CountryCard country={country} maxPopulation={maxPopulation} />
        </li>
      ))}
    </ul>
  );
}
