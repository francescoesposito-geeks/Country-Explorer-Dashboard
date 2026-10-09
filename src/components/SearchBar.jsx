export function SearchBar({ onSubmit, value }) {
  return (
    <div className="search">
      <label htmlFor="country-search" className="field-label">
        Country name
      </label>
      <input
        id="country-search"
        value={value}
        onChange={(e) => onSubmit(e.target.value)}
        type="search"
        placeholder="e.g. Italy"
        autoComplete="off"
      />
    </div>
  );
}
