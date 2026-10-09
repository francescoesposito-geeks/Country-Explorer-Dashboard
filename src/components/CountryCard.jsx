import "../countryCard.css";

const numberFormat = new Intl.NumberFormat("en-US");

export function CountryCard({ country, maxPopulation }) {
  // square root scale: small countries stay visible next to China and India
  const share = Math.sqrt(country.population / maxPopulation) * 100;

  return (
    <article className="countryCard">
      <img
        className="flag"
        src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
        alt={`Flag of ${country.name}`}
        loading="lazy"
        width="320"
        height="213"
      />
      <h2 className="country-name">{country.name}</h2>
      <dl className="facts">
        <div>
          <dt>Capital</dt>
          <dd>
            {country.capital.length ? country.capital.join(", ") : "None"}
          </dd>
        </div>
        <div>
          <dt>Continent</dt>
          <dd>{country.continent}</dd>
        </div>
        <div>
          <dt>Population</dt>
          <dd className="population">
            {numberFormat.format(country.population)}
          </dd>
        </div>
      </dl>
      <div className="population-bar" aria-hidden="true">
        <span style={{ width: `${Math.max(share, 1)}%` }} />
      </div>
    </article>
  );
}
