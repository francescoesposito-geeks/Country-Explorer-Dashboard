export function CountryCard({ country }) {
  return (
    <li key={country.name.common}>
      <img src={country.flags.png} />
      <p>name: {country.name.common}</p>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <p>continents: {country.continents}</p>
    </li>
  );
}
