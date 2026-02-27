export function CountryCards({ countries }) {
  return (
    <li>
      <p>flag: {countries.flags.png}</p>
      <p>country name: {countries.name.common}</p>
      <p>country capital: {countries.capital}</p>
      <p>population: {countries.population}</p>
      <p>continents: {countries.continents}</p>
    </li>
  );
}
