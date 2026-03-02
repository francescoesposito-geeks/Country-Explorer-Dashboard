import { CountryCard } from "./CountryCard";
import "/src/countryGrid.css";

export function CountryGrid({ countries }) {
  return (
    <ul>
      <div className="gridCards">
        {countries.map((country) => {
          return <CountryCard country={country} />;
        })}
      </div>
    </ul>
  );
}
