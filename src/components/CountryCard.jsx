import "/src/countryCard.css";

export function CountryCard({ country }) {
  return (
    <div className="countryCard">
      <li key={country.name.common}>
        <img src={country.flags.png} />
        <p>
          <b>name: </b>
          {country.name.common}
        </p>
        <p>
          <b>capital: </b>
          {country.capital}
        </p>
        <p>
          <b>population: </b>
          {country.population}
        </p>
        <p>
          <b>continents: </b>
          {country.continents}
        </p>
      </li>
    </div>
  );
}
