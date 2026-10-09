import "../countryCard.css";

const numberFormat = new Intl.NumberFormat("en-US");
const decimalFormat = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 1,
});

// shows the first items and how many are left, e.g. "Chibarwe, English +13 more"
function listPreview(items, max = 2) {
  if (items.length === 0) {
    return "None";
  }
  const shown = items.slice(0, max).join(", ");
  const hidden = items.length - max;
  return hidden > 0 ? `${shown} +${hidden} more` : shown;
}

function formatDensity(population, area) {
  if (!area) {
    return "—";
  }
  const density = population / area;
  if (density > 0 && density < 0.1) {
    return "less than 0.1 people/km²";
  }
  const formatted =
    density < 10
      ? decimalFormat.format(density)
      : numberFormat.format(Math.round(density));
  return `${formatted} people/km²`;
}

export function CountryCard({ country, maxPopulation }) {
  // square root scale: small countries stay visible next to China and India
  const share = Math.sqrt(country.population / maxPopulation) * 100;
  const currencies = country.currencies.map((currency) =>
    currency.symbol ? `${currency.name} (${currency.symbol})` : currency.name,
  );

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
          <dd>{listPreview(country.capital)}</dd>
        </div>
        <div>
          <dt>Continent</dt>
          <dd>{country.continent}</dd>
        </div>
        <div>
          <dt>Languages</dt>
          <dd title={country.languages.join(", ")}>
            {listPreview(country.languages)}
          </dd>
        </div>
        <div>
          <dt>Currency</dt>
          <dd title={currencies.join(", ")}>{listPreview(currencies, 1)}</dd>
        </div>
        <div>
          <dt>Calling code</dt>
          <dd>{country.callingCode ?? "None"}</dd>
        </div>
        <div>
          <dt>Area</dt>
          <dd>{numberFormat.format(country.area)} km²</dd>
        </div>
        <div>
          <dt>Density</dt>
          <dd>{formatDensity(country.population, country.area)}</dd>
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
