export function CountryCard({ country }) {
  return (
    <li key={country.name.common}>
      <img src={country.flags.png} />
      <p>country name: {country.name.common}</p>
      <p>country capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <p>continents: {country.continents}</p>
    </li>
  );
}
