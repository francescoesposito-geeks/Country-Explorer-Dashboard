import "../filterBar.css";

export function FilterBar({
  continents,
  valueContinent,
  valueSorting,
  onReset,
  canReset,
  setSorting,
  setContinentChoice,
}) {
  return (
    <div className="selects">
      <div className="field">
        <label htmlFor="continent" className="field-label">
          Continent
        </label>
        <select
          id="continent"
          value={valueContinent}
          onChange={(e) => setContinentChoice(e.target.value)}
        >
          <option value="">All continents</option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="sorting" className="field-label">
          Sort by
        </label>
        <select
          id="sorting"
          value={valueSorting}
          onChange={(e) => setSorting(e.target.value)}
        >
          <option value="">Name (A–Z)</option>
          <option value="decreasing">Population, largest first</option>
          <option value="increasing">Population, smallest first</option>
        </select>
      </div>
      <button type="button" onClick={onReset} disabled={!canReset}>
        Clear filters
      </button>
    </div>
  );
}
