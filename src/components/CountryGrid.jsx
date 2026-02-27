import { CountryCards } from "./CountryCards";

export function CountryGrid() {
  return (
    <ul>
      {countries.map((country) => {
        <CountryCards countries={countries} />;
      })}
    </ul>
  );
}
