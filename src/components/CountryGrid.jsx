import { CountryCards } from "./CountryCards";

export function CountryGrid({ countries }) {
  return (
    <ul>
      {countries.map((country) => {
        return <CountryCards country={country} />;
      })}
    </ul>
  );
}
