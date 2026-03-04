import "/src/filterbar.css";

export function FilterBar({
  valueContinent,
  valueSorting,
  onReset,
  setSorting,
  setContinentChoice,
}) {
  return (
    <>
      <div className="selects">
        <select
          value={valueContinent}
          onChange={(e) => setContinentChoice(e.target.value)}
        >
          <option value="" disabled hidden>
            Choose continent
          </option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
        </select>
        <select
          value={valueSorting}
          onChange={(e) => setSorting(e.target.value)}
        >
          <option value="" disabled hidden>
            Choose sort
          </option>
          <option value="increasing">increasing</option>
          <option value="decreasing">decreasing</option>
        </select>
        <button onClick={onReset}> reset </button>
      </div>
    </>
  );
}
