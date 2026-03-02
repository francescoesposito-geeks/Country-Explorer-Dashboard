import { CountryCards } from "./CountryCard";

export function CountryGrid({ countries }) {
  return (
    <ul>
      {countries.map((country) => {
        return <CountryCards country={country} />;
      })}
    </ul>
  );
}
