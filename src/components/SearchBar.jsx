export function SearchBar({ searchCountries }) {
  return (
    <>
      <div>
        <input type="text" placeholder="insert country" />
        <button onClick={searchCountries}> submit </button>
      </div>
    </>
  );
}
