export function SearchBar({ onButtonClick }) {
  return (
    <>
      <div>
        <input type="text" placeholder="insert country" />
        <button onClick={onButtonClick}> submit </button>
      </div>
    </>
  );
}
